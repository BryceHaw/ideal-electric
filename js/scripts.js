window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    var reviewDropDown = document.querySelector(".reviewDropDown");

    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if(document.querySelector(".reviewDropDown.active")){
                
            }
            else if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function reviewDropDown(){
    RDP.classList.toggle("active")
    var icon = RN.querySelector('svg');

    if(icon.classList.contains("fa-caret-up")){
        icon.classList.remove("fa-caret-up");
        icon.classList.add("fa-caret-down");
    }else{
        icon.classList.remove("fa-caret-down");
        icon.classList.add("fa-caret-up");
    }
}
var RN = document.querySelector(".reviewNav"), RDP = document.querySelector(".reviewDropDown");