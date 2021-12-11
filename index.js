
const ul = document.querySelector(".ul");
const nav = document.querySelector("nav");
let firstTime = true;
let deleted = false;
let clicked = false;
let clientWidth = document.body.clientWidth;
let windowWidth = null;

if (clientWidth < 500){
        createButton();
}    

window.addEventListener("resize", function(event) {
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    windowWidth = document.body.clientWidth;

    if (windowWidth < 500){
        if (firstTime){
            firstTime = false;
            deleted = true;
            if(document.querySelector(`img[src="images/menuIcon.png"]`)){
                deleteIcon();
            }
            createButton();
        }  
    } else if (windowWidth > 500){
        if (deleted){
            deleteIcon();
            firstTime = true;
            deleted = false;
            window.location.href = "index.html";
        }
        
    }
})

function createButton(){
    let icon = document.createElement("img");
    icon.src = "images/menuIcon.png";
    icon.style.height = "3rem";
    icon.style.textAlign ="center";
    icon.style.cursor = "pointer";
    
    nav.append(icon);
    icon.after(ul);

    listenButton();
}

function deleteIcon(){
    let iconMenu = document.querySelector(`img[src="images/menuIcon.png"]`);
    nav.removeChild(iconMenu);
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

