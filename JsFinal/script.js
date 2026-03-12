let products = JSON.parse(localStorage.getItem("products")) || [];

let editIndex = null;

displayProducts();

function addProduct(){

let title = document.getElementById("title").value;
let price = document.getElementById("price").value;
let image = document.getElementById("image").value;
let stock = document.getElementById("stock").value;

if(title === "" || price === ""){
alert("Title and Price required");
return;
}

let product = {
id: Date.now(),
title: title,
price: price,
image: image,
stock: stock
};

if(editIndex !== null){

products[editIndex] = product;
editIndex = null;

}else{

products.push(product);

}

localStorage.setItem("products", JSON.stringify(products));

displayProducts();

clearInputs();


let modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
modal.hide();

}


function displayProducts(list = products){

let container = document.getElementById("productList");

container.innerHTML = "";

list.forEach((p,index)=>{

container.innerHTML += `

<div class="col-md-3 mb-4">

<div class="card">

<img src="${p.image}" class="card-img-top">

<div class="card-body">

<h5>${p.title}</h5>

<p>Price: ₹${p.price}</p>

<span class="stock-badge">
Stock: ${p.stock}
</span>

<button onclick="editProduct(${index})" class="btn btn-warning btn-sm">
Edit
</button>

<button onclick="deleteProduct(${index})" class="btn btn-danger btn-sm">
Delete
</button>

</div>

</div>

</div>

`

})

}

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem("products", JSON.stringify(products));

displayProducts();

}

function editProduct(index){

let p = products[index];

document.getElementById("title").value = p.title;
document.getElementById("price").value = p.price;
document.getElementById("image").value = p.image;
document.getElementById("stock").value = p.stock;

editIndex = index;

let modal = new bootstrap.Modal(document.getElementById("productModal"));
modal.show();

}


function clearInputs(){

document.getElementById("title").value = "";
document.getElementById("price").value = "";
document.getElementById("image").value = "";
document.getElementById("stock").value = "";

}

function searchProduct(){

let value = document.getElementById("search").value.toLowerCase();

let filtered = products.filter(p =>
p.title.toLowerCase().includes(value)
);

displayProducts(filtered);

}

function sortProduct(type){

let sorted = [...products];

if(type == "low"){
sorted.sort((a,b)=>a.price-b.price);
}

else if(type == "high"){
sorted.sort((a,b)=>b.price-a.price);
}

else if(type == "az"){
sorted.sort((a,b)=>a.title.localeCompare(b.title));
}

else if(type == "za"){
sorted.sort((a,b)=>b.title.localeCompare(a.title));
}

displayProducts(sorted);

}