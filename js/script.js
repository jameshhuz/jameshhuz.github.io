let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value =window.scrollY;


    text.style.marginTop = value * 2.5 +'px';
    treeLeft.style.left = value * -1.5 +'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 +'px';
    gateRight.style.left = value * -0.5 + 'px';
})





//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

window.sr = ScrollReveal();

    sr.reveal('.contenedor-header', {
        duration: 1000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.contenido-banner', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.contenido-seccion', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });


    const btnSwitch = document.querySelector('#switch');

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');
    })
