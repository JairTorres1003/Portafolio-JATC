const DataProyect = [
    {
        NameProyect: 'Portafolio',
        ImageProyect: 'https://user-images.githubusercontent.com/83931760/161457711-5b44b439-ef8a-42aa-bd40-05e033e3d788.png',
        ViewProyect: 'https://jairtorres1003.github.io/Portafolio-JATC/',
        CodeProyect: 'https://github.com/JairTorres1003/Portafolio-JATC'
    },
    {
        NameProyect: 'Generador QR',
        ImageProyect: 'https://user-images.githubusercontent.com/83931760/160695374-4bd92173-6a1c-43b7-bf34-31f31f940628.png',
        ViewProyect: 'https://jairtorres1003.github.io/Generador-QR/',
        CodeProyect: 'https://github.com/JairTorres1003/Generador-QR'
    },
    {
        NameProyect: 'FullStack (Catalogo)',
        ImageProyect: 'https://user-images.githubusercontent.com/83931760/160694684-6603d7f1-b762-4480-aa76-11ea7444f51a.png',
        ViewProyect: 'https://jairtorres1003.github.io/FullStack/Catalogo/',
        CodeProyect: 'https://github.com/JairTorres1003/FullStack/tree/main/Catalogo'
    },
    {
        NameProyect: 'FullStack (Hoja de vida)',
        ImageProyect: 'https://user-images.githubusercontent.com/83931760/160693663-e6c7b416-02b6-423a-871b-595ca6ec5d50.png',
        ViewProyect: 'https://jairtorres1003.github.io/FullStack/Hoja%20de%20vida/',
        CodeProyect: 'https://github.com/JairTorres1003/FullStack/tree/main/Hoja%20de%20vida'
    },
    {
        NameProyect: 'Maxylu',
        ImageProyect: 'https://user-images.githubusercontent.com/83931760/160698278-dc9b9f27-32cb-4df2-9b31-42d5c29baf1f.png',
        ViewProyect: 'http://maxylu.epizy.com/',
        CodeProyect: 'Codigo no disponible'
    },
    {
        NameProyect: 'Question Challenge',
        ImageProyect: 'https://user-images.githubusercontent.com/83931760/160696510-0d1e1441-54b0-4cde-a3bc-4614bf55298d.png',
        ViewProyect: 'http://protect-jatc.epizy.com/Question%20Challenge',
        CodeProyect: 'https://github.com/JairTorres1003/Question-Challenge'
    },
    {
        NameProyect: 'JT1805',
        ImageProyect: 'https://user-images.githubusercontent.com/83931760/160696140-9da0cee4-7760-4a1c-860a-41996e99eeeb.png',
        ViewProyect: 'https://jairtorres1003.github.io/JT1805/',
        CodeProyect: 'https://github.com/JairTorres1003/JT1805'
    },
    {
        NameProyect: 'Live The Music',
        ImageProyect: 'https://user-images.githubusercontent.com/83931760/160695880-dea03c7d-b4b3-4b45-960c-9161cd31622d.png',
        ViewProyect: 'https://jairtorres1003.github.io/LiveTheMusic/',
        CodeProyect: 'https://github.com/JairTorres1003/LiveTheMusic'
    },
];
const section = document.getElementById('section');
window.addEventListener('load', function(e){
    for (let x = 0; x < DataProyect.length; x++) {
        let proyect_c = this.document.createElement('article');
        let title_proyect = this.document.createElement('h3');
        let image_c = this.document.createElement('div');
        let img = this.document.createElement('img');
        let btn_container = this.document.createElement('div');
        let btn_a1 = this.document.createElement('a');
        let btn_a2 = this.document.createElement('a');
        proyect_c.setAttribute('class', 'proyect-c');
    
        title_proyect.setAttribute('class', 'title-proyect');
        title_proyect.textContent = DataProyect[x].NameProyect;
    
        image_c.setAttribute('class', 'image-c');
    
        img.src = DataProyect[x].ImageProyect;
        img.alt = "preview" + DataProyect[x].NameProyect;
    
        btn_container.setAttribute('class', 'btn-container');
    
        btn_a1.setAttribute('class', 'btn-a');
        btn_a1.setAttribute('target', '_blank')
        btn_a1.href = DataProyect[x].ViewProyect;
        btn_a1.textContent = "Pagina";
    
        btn_a2.setAttribute('class', 'btn-a');
        btn_a2.setAttribute('target', '_blank')
        btn_a2.href = DataProyect[x].CodeProyect;
        btn_a2.textContent = "Código";

        proyect_c.append(title_proyect);
        proyect_c.append(image_c);
        proyect_c.append(btn_container);

        image_c.append(img);

        btn_container.append(btn_a1);
        btn_container.append(btn_a2);

        section.append(proyect_c);
    }
});
// ------------------------------------------------------------ //
// ------ Estructura del nodo creado al carga la pagina. ------ //
// ------------------------------------------------------------ //
// <article class="proyect-c">                                  //
//     <h3 class="title-proyect">Proyecto</h3>                  //
//     <div class="image-c">                                    //
//         <img src="" alt="">                                  //
//     </div>                                                   //
//     <div class="btn-container">                              //
//         <a href="" class="btn-a" target="_blank">Ver</a>     //
//         <a href="" class="btn-a" target="_blank">Código</a>  //
//     </div>                                                   //
// </article>                                                   //
// ------------------------------------------------------------ //

window.addEventListener('click', function(e){
    if (e.target.getAttribute('href') === 'Codigo no disponible') {
        e.preventDefault();
        alert('¡Codigo no disponible!');
    }
    if (e.target.href === 'https://jairtorres1003.github.io/Portafolio-JATC/') {
        e.preventDefault();
        this.location.href = this.location.href;
    }
});
