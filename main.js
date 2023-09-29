const menuEmail=document.querySelector('.navbar-email');
const menuHamIcon=document.querySelector('.menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon=document.querySelector('.product-detail-close');

const desktopMenu=document.querySelector('.desktop-menu');
const mobileMenu=document.querySelector('.mobile-menu');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const productDetailContainer=document.querySelector('#productDetail');
const cardsContainer=document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',CloseProductDetailaside);

function toggleDesktopMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){shoppingCartContainer.classList.add('inactive');}
    desktopMenu.classList.toggle('inactive');}

    function toggleMobileMenu(){
        const isAsideClosed=shoppingCartContainer.classList.contains('inactive');

        if(!isAsideClosed){
            shoppingCartContainer.classList.add('inactive');
        }
        CloseProductDetailaside()
        mobileMenu.classList.toggle('inactive');}

    function toggleCarritoAside(){
        const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
        if(!isMobileMenuClosed){mobileMenu.classList.add('inactive');}
        
        const isProductDetailClosed=productDetailContainer.classList.contains('inactive');

        if(!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
        }

        shoppingCartContainer.classList.toggle('inactive');}


    function OpenProductDetailaside(){
        shoppingCartContainer.classList.add('inactive')
        productDetailContainer.classList.remove('inactive');
    }

    function CloseProductDetailaside(){
        productDetailContainer.classList.add('inactive');
    }   

const productList=[];
productList.push({name:'Neusa',price:420.000,image:'https://www.neusahills.com/wp-content/uploads/2023/09/Diseno-sin-titulo-10.png',});
productList.push({name:'Bajo el cielo San francisco',price:470.000,image:'https://static.wixstatic.com/media/0506ec_4ed82728f23641d38c1112eed8ba9bf8~mv2.jpg/v1/fill/w_1826,h_1027,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0506ec_4ed82728f23641d38c1112eed8ba9bf8~mv2.jpg',});
productList.push({name:'Bajo el cielo Guatavita',price:620.000,image:'https://static.wixstatic.com/media/0506ec_8ae26a8fdf0a4d56a73d116d590aef23~mv2_d_4608_2592_s_4_2.jpg/v1/fill/w_1886,h_1061,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0506ec_8ae26a8fdf0a4d56a73d116d590aef23~mv2_d_4608_2592_s_4_2.jpg',});
productList.push({name:'De lujo santander',price:520.000,image:'https://weekend-bucket.s3.amazonaws.com/image_4d9e50dd54.png',});
productList.push({name:'Mesa de los santos',price:510.000,image:'https://weekend-bucket.s3.amazonaws.com/image_95e8b0bd18.png',});


function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', OpenProductDetailaside);

        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv=document.createElement('div');
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;

        const productName=document.createElement('p');
        productName.innerText=product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);}}

renderProducts(productList);