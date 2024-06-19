/*function myscroll(){
    

    let add=document.getElementById('main');
    let c=window.scrollY;
    console.log(c);

    if(c>150)
        {
            add.classList.add('even');
        }
        else{
            add.classList.remove('')
        }


    
}*/
function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;

    if (scrollValue < 150) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);

