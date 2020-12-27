const xl = 1280

let pushedBtn = false;

let btn = document.querySelector("#share-btn");
let infoTag = document.querySelector("#info-tag");
let bottomTag = document.querySelector("#bottom-tag");
let popup = document.querySelector("#share-popup");

btn.addEventListener('click', createShareDiv);
btn.addEventListener('mouseout', allowCloseShareDiv, true);
window.addEventListener("resize", setStyles);
window.addEventListener('click', clickOutsidePopup);

function setStyles(){
    if(pushedBtn && document.documentElement.clientWidth < xl){ 
        infoTag.classList.add("invisible");
        bottomTag.classList.add("bg-gray-700");      
    }

    if(pushedBtn && document.documentElement.clientWidth >= xl){
        infoTag.classList.add("visible");
        infoTag.classList.remove("invisible");
        bottomTag.classList.remove("bg-gray-700");
    }
}

function createShareDiv(){

    pushedBtn = !pushedBtn;

    if(document.documentElement.clientWidth < xl){
        infoTag.classList.toggle("invisible");
        bottomTag.classList.toggle("bg-gray-700");
    } 

    popup.classList.toggle("invisible");

    
}

function clickOutsidePopup(event){
    if(!popup.contains(event.target) && !btn.contains(event.target) && document.documentElement.clientWidth >= xl){
        popup.classList.add("invisible");
        pushedBtn = false;
    }
}

function allowCloseShareDiv(){
    if(pushedBtn){
        alert("pushed");
        btn.addEventListener('mouseover', closeShareDiv);
    }else{
        alert("not pushed")
        btn.removeEventListener('mouseover', closeShareDiv);
    }
}

function closeShareDiv(){
    if(pushedBtn){
        popup.classList.add("invisible");
        pushedBtn = false;
    }
}