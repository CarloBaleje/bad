document.addEventListener("DOMContentLoaded", function() {
    // Arrays of image paths for each service
    const slidingWindowImages = [
        "image/services/sliding/1.jpg",
        "image/services/sliding/2.jpg",
        "image/services/sliding/3.jpg",
        "image/services/sliding/4.jpg",
        "image/services/sliding/5.jpg",
        "image/services/sliding/6.jpg",
        "image/services/sliding/7.jpg",
        "image/services/sliding/8.jpg"
    ];

    const glassDoorImages = [
        "image/services/glass-doors/1.jpg",
        "image/services/glass-doors/2.jpg",
        "image/services/glass-doors/3.jpg"
    ];

    const customGlassDesignsImages = [
        "image/services/custom-glass-designs/1.jpg",
        "image/services/custom-glass-designs/2.jpg",
        "image/services/custom-glass-designs/3.jpg"
    ];

    let currentImageIndex = 0;
    let currentImages = [];

    // Function to open the image viewer modal with the correct set of images
    function openImageViewer(index, service) {
        // Set the appropriate images array based on the service clicked
        switch(service) {
            case 'slidingWindow':
                currentImages = slidingWindowImages;
                break;
            case 'glassDoors':
                currentImages = glassDoorImages;
                break;
            case 'customGlassDesigns':
                currentImages = customGlassDesignsImages;
                break;
            default:
                currentImages = [];
        }

        // Set the initial image index
        currentImageIndex = index;

        // Get modal and modal image elements
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");
        
        // Show modal and update the image source
        modal.style.display = "block";
        modalImage.src = currentImages[currentImageIndex];
    }

    // Function to close the image viewer modal
    function closeImageViewer() {
        const modal = document.getElementById("imageModal");
        modal.style.display = "none";
    }

    // Function to change the image (Previous/Next)
    function changeImage(direction) {
        currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
        const modalImage = document.getElementById("modalImage");
        modalImage.src = currentImages[currentImageIndex];
    }

    // Event listener for clicking the "Learn More" buttons for each service
    document.querySelectorAll('.learn-more').forEach((button) => {
        // Check service type and add appropriate event listener
        if (button.classList.contains('slidingWindow')) {
            button.addEventListener('click', () => openImageViewer(0, 'slidingWindow'));
        } else if (button.classList.contains('glassDoors')) {
            button.addEventListener('click', () => openImageViewer(0, 'glassDoors'));
        } else if (button.classList.contains('customGlassDesigns')) {
            button.addEventListener('click', () => openImageViewer(0, 'customGlassDesigns'));
        }
    });

    // Event listener for the close button in the modal
    document.querySelector('.close').addEventListener('click', closeImageViewer);

    // Event listener for the next button
    document.querySelector('.next').addEventListener('click', () => changeImage(1));

    // Event listener for the previous button
    document.querySelector('.prev').addEventListener('click', () => changeImage(-1));

    // Event listener for clicking outside the modal to close it
    window.addEventListener('click', (event) => {
        const modal = document.getElementById("imageModal");
        if (event.target === modal) {
            closeImageViewer();
        }
    });

    // Function to toggle the menu for mobile responsiveness
    function toggleMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('open');
    }

    // Add event listener to the menu toggle button
    const menuToggle = document.getElementById('menu-toggle'); // Assuming you have an element with this id for mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
});
