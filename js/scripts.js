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
            if(reviewDropDown.style.display == "block"){
                
            }
            else if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//open the reviews dropdown menu
function reviewDropDown(){
    var dropDown = document.querySelector(".reviewDropDown");
    var icon = document.querySelector(".fa-caret-up");
    
    if(dropDown.style.display == "none"){
        dropDown.style.display = "block";
        icon.style.transform = "rotate(180deg)";
        icon.style.transition = "all .5s ease-in-out";
    }else{
        dropDown.style.display = "none";
        icon.style.transform = "rotate(180deg)";
        icon.style.transition = "all .5s ease-in-out";
    }
}