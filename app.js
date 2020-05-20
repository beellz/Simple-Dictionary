
// function getMeaning() {
//    let word = document.getElementById('myword').value;
//    console.log(word);
//    let ptag = document.getElementById('hereon');    
//   var OurRequest = new XMLHttpRequest();
//   OurRequest.open('GET', 'https://googledictionaryapi.eu-gb.mybluemix.net/?define='+ word);
//   OurRequest.onload = function() {
//     var ourData = JSON.parse(OurRequest.responseText);
//     var meaning = ourData[0].meaning.noun[0].definition;
//     ptag.innerHTML = meaning;
//   };
//   OurRequest.send();
// };



function getMeaning() {
  let word = document.getElementById('myword').value;

 
    // async function to call api
        async function API() {
    
            const response = await fetch("https://googledictionaryapi.eu-gb.mybluemix.net/?define=" + word);
            // putting everything into data
    
            const data = await response.json();
    
            // making random number  
            // also using the .lenght to take the lenght of the data dynamically .
    
            // let randomNUMs = Math.floor(Math.random() * data.length )
            // console.log(randomNUMs)
    
            // using random number to call certain api main
            console.log(data);
            // let text = data[randomNUMs].text
            // let author = data[randomNUMs].author
    
            // consoling it to check
            // console.log(text);
            // console.log(author)
    
            // making outputall to store data 
    
            // let outputall =  `
            //          <ul>
            //              <li>" ${text}"</li>
            //              <li> - ${author}</li>
            //             </ul    
            //              `;
            
            //              // 
            // // putting it all in innerHTML
    
            // // document.querySelector(".quote").innerHTML= outputall;
        
        }

        API();

}






// const getMeaning = () => {
//   document.querySelector('.defs').innerHTML = ''
//   document.querySelector('.means').style.display = 'block'
//   let word = document.querySelector('#myword').value
//   fetch('https://googledictionaryapi.eu-gb.mybluemix.net/?define='+word).then(res => res.json()).then(data => {
//     let word = document.querySelector('.word')
//     let type = document.querySelector('.type')
//     let defs = document.querySelector('.defs')
//     if(data.word == undefined && data.type == undefined) {
//       word.innerHTML = data.error
//       type.innerHTML = 'Contact us at '+data.contact_us
//     } else {
//       word.innerHTML = data.word
//       type.innerHTML = data.type
//       data.definitions.forEach(def => {
//       defs.innerHTML += `<li>${def}</li>`
//     })
//     }
//   })
// }


// let jack = fetch('https://googledictionaryapi.eu-gb.mybluemix.net/?define=ball');
// var obj = JSON.parse(jack);
// let help = obj.word;

// document.querySelector("tryhere").innerHTML = help;



// var OurRequest = new XMLHttpRequest();
// OurRequest.open('GET', 'https://googledictionaryapi.eu-gb.mybluemix.net/?define='+ word);
// OurRequest.onload = function() {
//   var ourData = JSON.parse(OurRequest.responseText);
//   console.log(ourData[0].meaning.noun[0].definition);

// };
// OurRequest.send();



 // var query = document.querySelector('word').innerHTML;
    // let made = meaninig = query;
    // ourData[0].meaning.noun[0].definition = document.querySelector('word'); 
    
    
    // var meaning = ourData[0].meaning.noun[0].definition;
    // console.log(meaning);
    // // document.getElementById('here').innerHTML = meaning;