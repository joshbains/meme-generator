const formElement = document.querySelector("form");
const body = document.querySelector("body");
const imgURL = document.querySelector("input[name='img-URL']");
const topText = document.querySelector("input[name='top-text']");
const bottomText = document.querySelector("input[name='bottom-text']");


// Resets Inputs to Default
function setDefault() {
    imgURL.value = "";
    topText.value = "";
    bottomText.value = "";
}

    

formElement.addEventListener("submit", function(e){
    e.preventDefault(); //prevents page from reloading on submit

    const mainDiv = document.createElement("div");
    const wrapDiv = document.createElement("div");
    wrapDiv.classList.add("divStyle");                  //adding class for later method to removing

    const newImg = document.createElement("img");
    newImg.src = imgURL.value;                          //storing img url pasted into src of new img tag

    const newTop = document.createElement("h1");
    newTop.innerText = topText.value;
    newTop.classList.add("topText");                    //placing input top text value into new h1

    const newBottom = document.createElement("h1");
    newBottom.innerText = bottomText.value;
    newBottom.classList.add("bottomText");              //placing input bottom text value into new h1
    
    document.querySelector("body").appendChild(mainDiv);        //adding primary div

    mainDiv.appendChild(wrapDiv);                           //adding div to wrap img and text
    wrapDiv.appendChild(newImg);
    wrapDiv.appendChild(newTop);
    wrapDiv.appendChild(newBottom);                     //appended all children into wrap div
  
    setDefault();
})

//Checking for double click to remove memes
body.addEventListener("dblclick", function(e) {
    if (e.target.className === "divStyle" || e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
})