//============= menu icon navBar ===============
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');

}


//============= sticky header ===============
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100)


    // remove menu icon navBar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}


//============= show | hide FAQs anser ===============
const faqs = document.querySelectorAll('.faq');

faqs.forEach(data => {
    data.addEventListener('click', () => {
        data.classList.toggle('open');

        // change icon
        const icon = data.querySelector('.faq_icon i');

        if (icon.className === 'bx bx-plus') {
            icon.className = 'bx bx-minus';
        } else {
            icon.className = 'bx bx-plus';
        }
    });
});



//============= dark light mode ===============
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

}

//============= text animation typed js  ===============
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Youtuber', 'Web Developer'],
    typeSpeed: 120,
    backSpeed: 120, 
    backDelay: 1300,
    loop: true
});



//============= ScrollReveal ===============
ScrollReveal({ 
    reset: true,
    distance: '70px',
    duration: 1800,
    delay: 150
});
ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img img, .about-content, .education-row, .skills-row, .portfolio-container, .container, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1'  , { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content'  , { origin: 'right' });






// Your existing JavaScript code for opening/closing the popup
const popup = document.getElementById('popup');

const openPopup = () => {
    popup.style.transition = 'transform 0.4s, top 0.4s';
    popup.classList.add('open-popup');
}

const closePopup = () => {
    popup.style.transition = 'transform 0.4s, top 0.4s';
    popup.classList.remove('open-popup');
}

//============= form validation using Jquery  Validation Plugin ===============
jQuery('#frm').validate({
    rules: {
        fname: "required",
        lname: "required",
        number: "required",
        msg: {
            required: true,
            minlength: 50,
        },
        email: {
            required: true,
            email: true,
        }
    },
    messages: {
        fname: "Please Enter Your First Name",
        lname: "Please Enter Your Last Name",
        number: "Please Enter Your Contact Number",
        msg: {
            required: "Please Enter Your Message",
            minlength: "Message must be at least 50 characters long",
        },
        email: {
            required: "Please Enter Your Email Address",
            email: "Please Enter a Valid Email Address",
        }
    },
    submitHandler: function (form) {
        // Show the success popup
        openPopup();
        // Prevent the form from submitting immediately
        return false;
    }
});

// Function to handle "OK" button click in the popup
document.querySelector('.ok-btn').addEventListener('click', function () {
    // Hide the button and close the popup
    this.style.display = 'none';
    closePopup();

    // Submit the form data after the popup is closed
    document.getElementById('frm').submit();
});


