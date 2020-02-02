const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for( let card of cards ){
    card.addEventListener("click", function(){
        let idImage = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `assets/${idImage}`
        console.log(idImage)
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})