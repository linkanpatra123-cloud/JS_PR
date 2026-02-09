const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let images = document.getElementById("img");

let index = 0;

let allImages = [
    {   
        path: "images/Audi.jpg" 
    },
    { 
        path: "images/bmw.jpg" 
    },
    { 
        path: "images/ferrari.jpg" 
    },
    {
         path: "images/Mclaren.jpg"
    },
    {
         path: "images/mercedes.jpg" 
    },
    {
         path: "images/Lamborghini.png"
    },
    {
         path: "images/jaguar.avif"
    },
    {
         path: "images/Porsche.jpg"
    },
    {
         path: "images/Rolls-Royce-Cullinan.jpg" 
    }
];

prevBtn.addEventListener("click", function (e) {

    if (index == 0){
        index = allImages.length - 1;
    } else {
        index--;
    }

    showImage(index);
});

nextBtn.addEventListener("click", function (e) {
    
    if (index == allImages.length - 1){
        index = 0;
    } else {
        index++;
    }

    showImage(index);
});

function showImage(i){
    images.src = allImages[i].path;
}

showImage(index);
