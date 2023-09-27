const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');
const cardsContainer=document.querySelector('.cards-container');

menuEmail.addEventListener('click',cambiardesktopMenu);
menuHamIcon.addEventListener('click',cambiarMobileMenu);
menuCarritoIcon.addEventListener('click',cambiarCarritoAside);


function cambiardesktopMenu(){
    const IsAsideClose=aside.classList.contains('inactive');
    if(!IsAsideClose){
        aside.classList.add('inactive');  
    }

    desktopMenu.classList.toggle('inactive');
}

function cambiarMobileMenu(){
    const IsAsideClose=aside.classList.contains('inactive');
    if(!IsAsideClose){
        aside.classList.add('inactive');  
    }
    mobileMenu.classList.toggle('inactive');
}

function cambiarCarritoAside(){
    
    const IsMobileClose=mobileMenu.classList.contains('inactive');

    if (!IsMobileClose){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList=[];

productList.push({
    name: 'bike',
    price: 120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'pc',
    price: 720,
    Image:'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

productList.push({
    name: 'cd',
    price: 20,
    Image:'https://images.pexels.com/photos/2489988/pexels-photo-2489988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'libro',
    price: 20,
    Image:'https://images.pexels.com/photos/15126536/pexels-photo-15126536/free-photo-of-light-landscape-sunset-people.jpeg?auto=compress&cs=tinysrgb&w=1600'
});


/*con este document.createElement podemos crear objertos de html desde java */
function renderProducts(arr){
    for (product of arr){
    
        /* div de la tarjeta del producto*/
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        /* Imagen del producto*/
        const productImg =document.createElement('img');
        productImg.setAttribute('src', product.Image);
    
        /* div de la tarjeta para contener la informacion del producto*/
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        /* Elementos p */
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+ product.price;
        const productName=document.createElement('p');
        productPrice.innerText= product.name;
        
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);

        
    
    }
    
    

}

renderProducts(productList);
