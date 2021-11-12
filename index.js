let ul=document.getElementById("real_nav");
let ic=document.getElementById("icon");
ic.addEventListener("click",()=>{
    if(ul.style.display=="none"){
        ul.style.display="flex";
    }
    else{
        
        ul.style.display="none";
    }
})
