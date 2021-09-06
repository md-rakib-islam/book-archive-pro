// Search Book 

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // Clear searchText
    searchField.value= '';
    const searchResult = document.getElementById('search-result');
        searchResult.innerHTML= '';
    

    document.getElementById('notFound').textContent ='';
    if (searchText === '' || searchText == parseInt(searchText) ){
        document.getElementById('numFound').innerText = `Not acceptable empty or number. 
        Please input right text`;
        // const searchCount =    document.getElementById('search-count');
        // searchCount.style.display='none';
    }
    else{
        document.getElementById('numFound').textContent='';
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        
        fetch(url)
        .then(res => res.json())
        .then (data => displaySearchResult(data.docs));
    }
}

// Display searchBook section

const displaySearchResult = books =>{
    
    // Display searchBook Counting
    document.getElementById('search-count').innerHTML= `<p >Total items found: ${books.length}  </p>`;
    
     
    if (books.length !== 0) {
        const searchResult = document.getElementById('search-result');
        searchResult.innerHTML= '';
    
    // clear error message
    document.getElementById('notFound').textContent ='';

    // Book List
    books.forEach(book => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div  class="card m-4 border border-success border-4 rounded-3">
                
                <div class="card-body  text-center border rounded-3">
                    <h4>Book Details</h4>
                    
                    <img height=300 weight=300 src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
                    
                    <h5 class="card-title">Book Name: ${book.title.slice(0,30)}</h5>
                    <h6 class="card-text">Author Name: ${book.author_name?.shift()||'Author Name Not Available'}</h6>
                    <h6 class="card-text">Publisher: ${book.publisher?.shift()|| 'Not available Publisher'}</h6>
                    <h6 class="card-text">Published Year: ${book.first_publish_year|| 'Not available Year'}</h6>
                    
                </div>
        </div>
        `
        searchResult.appendChild(div);
        
        
    });
    }
    else{
        
        document.getElementById('notFound').innerText = `Not available contant`;
        const searchResult = document.getElementById('search-result');
        searchResult.innerHTML= '';
        // const searchCount =    document.getElementById('search-count');
        // searchCount.style.display='none';
    }
    

    
}