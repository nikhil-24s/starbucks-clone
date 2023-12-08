function myFunction(){
    document.querySelector('.nav-items').style.display =' inline-block'
    document.querySelector('.nav-search').style.display =' inline-block'
    document.querySelector('.contact').style.display =' inline-block'
    document.querySelector('.navbar').style.backgroundColor =' rgb(22, 70, 51,0.888)'
    document.querySelector('.navbar').style.height ='fit-content'
    document.querySelector('.close').style.visibility='visible'
    document.querySelector('.menu').style.visibility='hidden'
}

function Close(){
    document.querySelector('.nav-items').style.display =' none'
    document.querySelector('.nav-search').style.display =' none'
    document.querySelector('.contact').style.display =' none'
    document.querySelector('.navbar').style.backgroundColor =' white'
    document.querySelector('.navbar').style.height ='130px'
    document.querySelector('.close').style.visibility='hidden'
    document.querySelector('.menu').style.visibility='visible'
}
