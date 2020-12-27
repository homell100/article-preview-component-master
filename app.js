const xl = 1280

let pushedBtn = false;

btn = document.querySelector("#share-btn");
btn.onclick = createShareDiv;

window.addEventListener("resize", setStyles);

function setStyles(){
    if(pushedBtn && document.documentElement.clientWidth < xl){
        
        var infoTag = document.querySelector("#info-tag");
        infoTag.classList.add("invisible");
        var div = document.querySelector("#bottom-tag");
        div.classList.add("bg-gray-700");      
    }

    if(pushedBtn && document.documentElement.clientWidth >= xl){
    
        var infoTag = document.querySelector("#info-tag");
        infoTag.classList.add("visible");
        infoTag.classList.remove("invisible");
        var div = document.querySelector("#bottom-tag");
        div.classList.remove("bg-gray-700");
    }
}

function createShareDiv(){

    pushedBtn = !pushedBtn;

    if(document.documentElement.clientWidth < xl){
        var infoTag = document.querySelector("#info-tag");
        infoTag.classList.toggle("invisible");
        var div = document.querySelector("#bottom-tag");
        div.classList.toggle("bg-gray-700");
    } 

    var popup = document.querySelector("#share-popup");
    popup.classList.toggle("invisible");

    
}

