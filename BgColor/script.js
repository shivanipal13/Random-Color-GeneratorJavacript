
// Copyright 2025 [Shivani Pal]

// This product includes software developed by [Shivani Pal] (https://github.com/shivanipal13/).







//generate randowm color

const randomcolor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0; i<6; i++){
        color +=hex[Math.floor(Math.random()*16)];

    }
    return color;
}
let setintervalId;//global scope thats way we are able to use anywhere
//console.log(randomcolor())
const startChangingBgColor=function(){
    console.log("start clicked")
    setintervalId= setInterval(ChangeBgColor,1000)//changebgcolor after every 1second

    function ChangeBgColor(){
        document.body.style.backgroundColor=randomcolor();//changing the bg color random

    }
   

}
//documenting start button

document.querySelector("#start").addEventListener('click',startChangingBgColor)

const stopChangingBgColor=function(){
    console.log("stopped")
    clearInterval(setintervalId)//it will stop the setinterval
}

//documenting stop button
document.querySelector('#stop').addEventListener('click',stopChangingBgColor);

