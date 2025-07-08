// open & close Cart

var cart = document.querySelector('.cart');



function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}

// open & close menu

var menu = document.querySelector('#menu');

function open_menu() {
    menu.classList.add("active")
}
function close_menu() {
    menu.classList.remove("active")
}







// change item image 

let bigImage = document.getElementById("bigImg")

function ChangeItemImage(img) {
    bigImage.src = img 
}











/* add items in cart */

var all_products_json;

var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addToCart(id , btn) {
    product_cart.push(all_products_json[id])
    btn.classList.add("active")

    console.log(product_cart);
    getCartItems()
}

let count_item = document.querySelector('.count_item');
let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');

 let price_cart_Head = document.querySelector('.price_cart_Head');



function getCartItems(){
    let total_price = 0;

    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `

        
         <div class="item_cart">
            <img src="${product_cart[i].img}" alt="">
            <div class="content">
                <h4>${product_cart[i].name}</h4>
                <p class="price_cart">${product_cart[i].price}</p>
            </div>
            <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        
        `
        total_price += product_cart[i].price

    }
    items_in_cart.innerHTML = items_c

    price_cart_Head.innerHTML = "$" + total_price
    count_item.innerHTML = product_cart.length

    count_item_cart.innerHTML = ` (${product_cart.length}Item in Cart)`
    price_cart_total.innerHTML = "$" + total_price
}



function remove_from_cart(index) {
    product_cart.splice(index,1)
    getCartItems()
    let addToCartButtons =  document.querySelectorAll(".fa-cart-plus");
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active")

        product_cart.forEach(product =>{
            if(product.id == i){
                addToCartButtons[i].classList.add("active")
            }
        })
    }
}



// back_to_top js

let back_to_top = document.querySelector(".back_to_top")

back_to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"

    })
})








/* Plantilla bootstrap */



(function ($) {
    "use strict";

    // Spinner: oculta el loader cuando la página ya cargó
window.addEventListener("load", function () {
    var spinner = document.getElementById("spinner");
    if (spinner) {
        spinner.classList.remove("show");
    }
});

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

