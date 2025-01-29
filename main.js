// Toggle the navigation menu when the menu icon is clicked
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});




const readMoreBtn = document.getElementById("read-more-btn");
const extraText = document.getElementById("extra-text");

readMoreBtn.addEventListener("click", () => {
    if (extraText.style.display === "none") {
        extraText.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
});

/* Service Section */

// For "Read More" button functionality in Services Section
document.getElementById("read-more-btn-1").addEventListener("click", function() {
    var extraText = document.getElementById("extra-text-1");
    var button = document.getElementById("read-more-btn-1");

    if (extraText.style.display === "none") {
        extraText.style.display = "inline";
        button.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        button.textContent = "Learn More";
    }
});

document.getElementById("read-more-btn-2").addEventListener("click", function() {
    var extraText = document.getElementById("extra-text-2");
    var button = document.getElementById("read-more-btn-2");

    if (extraText.style.display === "none") {
        extraText.style.display = "inline";
        button.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        button.textContent = "Learn More";
    }
});

document.getElementById("read-more-btn-3").addEventListener("click", function() {
    var extraText = document.getElementById("extra-text-3");
    var button = document.getElementById("read-more-btn-3");

    if (extraText.style.display === "none") {
        extraText.style.display = "inline";
        button.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        button.textContent = "Learn More";
    }
});

 

/* Project section */
const projectData = [
    {
        title: "Project Title 1",
        image: "https://i.ytimg.com/vi/MIYQR-Ybrn4/maxresdefault.jpg",
        description: "Detailed description of Project 1 goes here.",
    },
    {
        title: "Project Title 2",
        image: "https://image.coolblue.nl/624x351/content/93cdc876c1ba978644388f575d19d12a",
        description: "Detailed description of Project 2 goes here.",
    },
    {
        title: "Project Title 3",
        image: "https://miro.medium.com/v2/resize:fit:704/0*S0RD9WszR44AbOds.png",
        description: "Detailed description of Project 3 goes here.",
    },
];

function openModal(index) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");

    modalTitle.textContent = projectData[index - 1].title;
    modalImage.src = projectData[index - 1].image;
    modalDescription.textContent = projectData[index - 1].description;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}






/* Function for form submission alert */



const scriptURL = 'https://script.google.com/macros/s/AKfycbxS6cw9AAzgW7mgsrsXuOKzOinFwvCbjQtLpaHpB3gGw6YFhMGl7hh4B7AEAbfQZBQK/exec';
const form = document.forms['submit-to-google-sheet'];
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            showNotification('success');
            form.reset();
        })
        .catch((error) => {
            showNotification('error');
            console.error('Error!', error.message);
        });
});

function showNotification(type) {
    const notification = type === 'success' ? successMessage : errorMessage;

    // Display the notification
    notification.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

