let alphabets = "abtcxdefrsguhipqjklmvnowyz" ;
let Alphabets = "AYBSJKCDVLEWMXFGNHIUOQPRTZ" ;
let num = "1293845607" ;
let symbols = "!@)(#$^%&*_+=`~'\.,?/:;}][{|" ;


document.querySelector("button").addEventListener("click", () => {
    
    let results = "" ;
    for(let i=0; i<3; i++) {
        let a_results = alphabets[Math.floor(Math.random()*alphabets.length)];
        let A_results = Alphabets[Math.floor(Math.random()*Alphabets.length)];
        let num_results = num[Math.floor(Math.random()*num.length)];
        let symbols_results = symbols[Math.floor(Math.random()*symbols.length)];
    
         results = results + (a_results +  A_results  + num_results +  symbols_results) ;
    }
    document.querySelector("input").value = results;
    
});

document.querySelector("a").addEventListener("click", () => {
    document.querySelector("input").select();
    document.execCommand("copy");

});

