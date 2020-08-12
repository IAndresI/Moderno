"use strict";
document.addEventListener("DOMContentLoaded", function () {

  $(".rate-star").rateYo({
    rating: 3.6,
    starWidth: "12px",
    spacing: "1px",
    readOnly: true
  });

  if (document.querySelector(".newest-products__list")) {
    let mixer = mixitup(".newest-products__list");
  }

  if (document.querySelector(".product-page__tabs")) {
    let mixerTab = mixitup(".products-page__tab-content");
    mixerTab.filter('.features');
  }

  if (document.querySelector(".profile__descriprion")) {
    let mixerTab = mixitup(".profile__descriprion");
    mixerTab.filter('.about');
  }

  if (document.querySelector(".settings__form")) {
    let mixerProfile = mixitup(".settings__inner", {
      animation: {
        enable: false
      }
    });
    mixerProfile.filter('.information');
  }

  $('.trending-products__slider').slick({
    slidesToShow: 4,
    dots: true,
    arrows: false,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".aside__slider").ionRangeSlider({
    min: 0,
    max: 1000,
    from: 550,
    type: "double",
    prefix: "$"
  });

  window.addEventListener("resize", function () {
    document.querySelector(".header__nav-list").classList.remove("show-nav");
    document.querySelector(".header__content").classList.remove("show-user");
    document.querySelector(".header__nav-adaptive").classList.remove("header__nav-adaptive--active");
  });

  document.querySelector(".header__adaptive").addEventListener("click", function () {
    document.querySelector(".header__content").classList.toggle("show-user");
  });

  document.querySelector(".header__nav-adaptive").addEventListener("click", function () {
    document.querySelector(".header__nav-list").classList.toggle("show-nav");
  });

  document.querySelector(".header__nav-adaptive").addEventListener("click", function () {
    document.querySelector(".header__nav-adaptive").classList.toggle("header__nav-adaptive--active");
  });

  let productsFilter = document.querySelector(".products__button--sort-sm"),
    productsFilterLarge = document.querySelector(".products__button--sort-lg"),
    productsItems = document.querySelectorAll(".products__product-item");

  if (productsFilter) {
    function productSizeChange(productCurrentSize, productChangeSize, button, activeClass, target) {
      document.querySelectorAll(button).forEach(element => {
        element.classList.remove(activeClass);
      });
      target.classList.add(activeClass);
      productsItems.forEach(element => {
        element.classList.add(productChangeSize);
        element.classList.remove(productCurrentSize);
      });
    }

    productsFilter.addEventListener("click", (e) => {
      productSizeChange("product-item--lg", "product-item--md", ".products__button", "products__button--active", e.target);
    });

    productsFilterLarge.addEventListener("click", (e) => {
      productSizeChange("product-item--md", "product-item--lg", ".products__button", "products__button--active", e.target);
    });

    window.addEventListener("resize", function () {
      if (document.documentElement.offsetWidth < 992) {
        productSizeChange("product-item--lg", "product-item--md", ".products__button", "products__button--active", productsFilter);
      }
    });
  }

  let popup = document.querySelector(".popup"),
    popupInner = document.querySelector(".popup__inner"),
    popupClose = document.querySelector(".popup__close");

  if (popup) {
    document.querySelector(".header__button--login").addEventListener('click', function () {
      popup.classList.add("show-popup");
      popupInner.classList.add("show-popupinner");
      popup.addEventListener("click", function close(e) {
        if (e.target == popup || e.target == popupClose) {
          popup.classList.remove("show-popup");
          popupInner.classList.remove("show-popupinner");
        }
      });
    });
  }

  if (document.querySelector(".form__input--select")) {
    $('.form__input--file, file').styler({
      locale: 'en',
      locales: {
        'en': {
          filePlaceholder: 'No file selected',
          fileBrowse: 'Choose File',
          fileNumber: 'Selected files: %s',
        }
      }
    });
  }

  if (document.querySelector(".form__input--select")) {
    $('.form__input--select, select').styler();
  }
});