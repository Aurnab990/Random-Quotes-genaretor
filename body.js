function loadQuotes(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}


function displayData(posts){
    const quoteConatiner = document.getElementById('quotes');
    quoteConatiner.innerHTML = posts.quote;
        
    
}


