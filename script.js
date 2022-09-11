var myImgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".light-box-container");
var previce = document.getElementById("previce");
var close = document.getElementById("close");
var next = document.getElementById("next");
var currentImgIndex = 0;

// show img in lightBoxContainer
for (var i = 0; i < myImgs.length; i++) {
    myImgs[i].addEventListener('click', function (e) {
        var imgSrc = e.target.src;
        currentImgIndex = myImgs.indexOf(e.target);
        lightBoxContainer.style.display = "flex";
        lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
    })
}

// to close lightBoxContainer
close.addEventListener("click", hideBox ) 
function hideBox(){
    lightBoxContainer.style.display = "none";
}

//  to go previce imge
previce.addEventListener("click", goPrivce)
function goPrivce(){
    currentImgIndex--;
    if (currentImgIndex < 0) {
        currentImgIndex = myImgs.length - 1;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + myImgs[currentImgIndex].src + ")";
}

//  to go next imge
next.addEventListener("click", goNext);
function goNext() {
    currentImgIndex++;
    if (currentImgIndex == myImgs.length) {
        currentImgIndex = 0;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + myImgs[currentImgIndex].src + ")";
    console.log(currentImgIndex);

}

// to go previce imge with keydown
document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        goNext();
    }
    // to go next imge with keydown
    else if (e.key == "ArrowLeft"){
        goPrivce()  ;
    }
    else if(e.key == " "){
        hideBox();
    }
    console.log(e);
})
