let inc=document.querySelector(".increment")
let dec=document.querySelector(".decrement")
let reset=document.querySelector(".reset")

let display=document.querySelector(".display")

let num=0
inc.addEventListener("click" , function(){
    num=++num
    display.textContent=num
})
dec.addEventListener("click" , function(){
    num=--num
    if(num<1){
        num=0
    }
    display.textContent=num

})

reset.addEventListener("click" , function(){
    num=0
    display.textContent=num
})









