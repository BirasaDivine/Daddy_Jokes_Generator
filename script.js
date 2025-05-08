const results=document.querySelector("p")
const button=document.getElementById("button")
const url="https://icanhazdadjoke.com/" 
function getJokes(url){
    return fetch(url,{
        headers: {
            Accept: "application/json" 
        }
    })
    .then(function(response){
        if(!response.ok){
            throw new Error(`HTTP FAILED${response.status}`)
        }else{
            return response.json()
        }
    })
    .catch(function(error){
        console.log(error)
    })
    
}
button.addEventListener("click",function(){
    getJokes(url).then(function(data){
        if(data && data.joke){
            results.textContent=data.joke
        }
    })
})