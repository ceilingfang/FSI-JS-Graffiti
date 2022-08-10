let header = document.querySelector('#page-header')
header.style.textAlign = "left"
let dogImages =document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
}
let dogNames = document.querySelectorAll('dog-names')
for(let i = 0; i < dogNames.length; i++) {
    dogNames[i].style.textAlign ='left'
}

// Select some elements...