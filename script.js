const container = document.querySelector('.container');
const url = 'https://fakestoreapi.com/products';
function fetchData() {
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        createCards(data);
    })
}

fetchData();

function createCards(data) {
    data.forEach((val) => {

        const div1 = document.createElement('div');
        div1.classList.add('col-lg-3');
        div1.classList.add('col-md-4');
        div1.classList.add('col-sm-6');
        container.appendChild(div1);
        
        const div = document.createElement('div');
        div.classList.add('card');
        div1.appendChild(div);
        const img = document.createElement('img');
        img.src = val.image;
        div.appendChild(img);
        const category = document.createElement('h3');
        category.innerHTML = val.category;
        div.appendChild(category);
        const price = document.createElement('h2');
        price.innerHTML = val.price;
        div.appendChild(price);
        const rating = document.createElement('p');
        rating.innerHTML = val.rating.rate;
        div.appendChild(rating);

    })
}