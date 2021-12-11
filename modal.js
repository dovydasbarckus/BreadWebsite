
const modalOpenButton = document.querySelector(`[data-modal-target]`);
const modalCloseButton = document.querySelector(`[data-close-button]`);

// const afterValue = window.getComputedStyle(document.querySelector('#overlay'), ':after').setPropertyValue('content') = "sad"
const overlay = document.getElementById("overlay");


modalOpenButton.addEventListener("click", ()=> {
    const modal = document.querySelector(modalOpenButton.dataset.modalTarget);
    openModal(modal);
    // console.log(button);
    // console.log(button.dataset);
    // console.log(button.dataset.modalTarget);
})

modalCloseButton.addEventListener("click", ()=> {
        const modal = document.querySelector(modalOpenButton.dataset.modalTarget);
        closeModal(modal);
        
    })

overlay.addEventListener("click", function(){
    const modal = document.querySelector(modalOpenButton.dataset.modalTarget);
    closeModal(modal);
})

function openModal(modal){
    if ( modal == null) return;
    modal.classList.add("active");
    overlay.style.display = "block";
}

function closeModal(modal){
    if ( modal == null) return;
    modal.classList.remove("active");
    overlay.style.display = "none";
}