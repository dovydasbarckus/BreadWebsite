
const ul = document.querySelector(".ul");
const nav = document.querySelector("nav");
let firstTime = true;
let deleted = false;
let clicked = false;
let windowWidth = null;


window.addEventListener("resize", function(event) {
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    windowWidth = document.body.clientWidth;

    if (windowWidth < 500){
        if (firstTime){
            firstTime = false;
            deleted = true;
            createButton();
        }  
    } else if (windowWidth > 500){
        if (deleted){
            deleteIcon();
            firstTime = true;
            location.reload();
            deleted = false;
        }
        
    }
})

function createButton(){
    let icon = document.createElement("img");
    icon.src = "images/menuIcon.png";
    icon.style.height = "3rem";
    icon.style.textAlign ="center";
    icon.classList.add = "iconMenu";
    
    nav.append(icon);
    icon.after(ul);

    listenButton();
}

function deleteIcon(){
    let iconMenu = document.querySelector(`img[src="images/menuIcon.png"]`);
    nav.removeChild(iconMenu);
    window.location.href = "index.html";
    
}

function listenButton(){
    let iconMenu = document.querySelector(`img[src="images/menuIcon.png"]`);
    iconMenu.addEventListener("click", function(){
        let list = document.querySelector(".ul ul");
        if(!clicked){
            list.style.display = "grid";
            clicked = true;
        } else{
            list.style.display = "none";
            clicked = false;
        }
        
    })
}

