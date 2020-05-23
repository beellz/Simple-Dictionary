


function getMeaning() {
  let word = document.getElementById('myword').value;

 
    // async function to call api
        async function API() {
    
            const response = await fetch("https://googledictionaryapi.eu-gb.mybluemix.net/?define=" + word);
            // putting everything into data
    
            const data = await response.json();
            console.log(data);          
            let word2 = data[0].word;
            let word3 = word2.toUpperCase()
            
            console.log(word3);
            let defination = data[0].meaning.noun[0].definition;
            console.log(defination);
            let example = data[0].meaning.noun[0].example;
            let origin = data[0].origin;
            // let syn = data[0].meaning.noun[0].synonyms[0]
            // console.log(syn);
            
    
            let outputall =  `
                    <div class = "card OutAll "
                     <ul class="card-body ">
                        <li> The Word is : ${word3}</li>
                        <br>
                          <li> Origin : ${origin} </li>
                          <br>
                         <li>  Defination : ${defination}</li>
                         <br>
                         <li>  Example : ${example}</li>
                         </ul>
                      </div>      
                         `;
            
                        
            // putting it all in innerHTML
    
           document.querySelector(".output").innerHTML= outputall;
        
        }

        API();

}



