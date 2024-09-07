const image_container = document.querySelector('.main-image img');
const main_image =document.querySelectorAll('.gallery img');

for (let i = 0; i < main_image.length; i++) {
    main_image[i].addEventListener('click',function(e){
        const image_src =e.target.getAttribute('src');
        image_container.setAttribute('src',`${image_src}`);
        console.log(e.target.getAttribute('src'));
        
    })
    
}
