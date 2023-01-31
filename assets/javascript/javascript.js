let input = document.querySelector("input");
document.querySelectorAll("button").forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerHTML=="c"){
            input.value="";
        }
        else if(button.innerHTML=="=") {
            let cal =  eval(input.value);
            input.value =cal;

        }
        else{
            input.value = input.value+button.innerHTML;
        }
       
       
    })
})