/* Enter the code to remove the main node element under this comment */
const main=document.querySelector('main')
main.remove()
/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1')
newHeader.innerText = "Pardis is awesome"

document.body.appendChild(newHeader)
