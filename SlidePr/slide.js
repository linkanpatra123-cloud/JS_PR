const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
let images = document.querySelector("#img");

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

    displayImage(index);
});

nextBtn.addEventListener("click", function (e) {
    
    if (index == allImages.length - 1){
        index = 0;
    } else {
        index++;
    }

    displayImage(index);
});

function displayImage(i){
    images.src = allImages[i].path;
}

displayImage(index);
