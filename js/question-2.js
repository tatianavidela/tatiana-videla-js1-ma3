//Question 2

const url =  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating" ;

const resultsContainer = document.querySelector(".results")


async function makeApiCall (){

    try{
        const response = await fetch(url);
        const results = await response.json();
    
        const items= results.results;
    
    
        console.log(results.results)
    
        resultsContainer.innerHTML = ""
    
        for  (let i = 0; i < items.length; i++ ) {
    
            if (i === 8) {
                break
            }
    
            resultsContainer.innerHTML += 
            `<div class="result"> 
            <p>Name: ${items[i].name}</p> 
            <p>Rating: ${items[i].rating}</p> 
            <p>Amount of tags: ${items[i].tags.length} </p> 
            </div>`;
        }
    } 
    catch (error) {
        resultsContainer.innerHTML = "Sorry. An error occurred"
    }
}

makeApiCall();