"use strict";

;

(function () {
  var menuBtnRef = document.querySelector('[data-menu-button]');
  var mobileMenuRef = document.querySelector('[data-menu]');
  var mobileBtnClose = document.querySelector('[data-menu-close]');
  menuBtnRef.addEventListener('click', function () {
    mobileMenuRef.classList.toggle('is-open');
  });
  mobileBtnClose.addEventListener('click', function () {
    mobileMenuRef.classList.toggle('is-open');
  });
});