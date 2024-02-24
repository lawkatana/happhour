// Get all the gallery items
const galleryItems = document.querySelectorAll(".gallery-item");
// Get the image sources and alts as arrays
const imageSources = [...galleryItems].map(item => item.querySelector(".gallery-image").src);
const imageAlts = [...galleryItems].map(item => item.querySelector(".gallery-image").alt);
// Declare a variable to store the current index of the modal image
let currentIndex = 0;
// Loop through each item and add a click event listener
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
    // Set the current index to the clicked item's index
    currentIndex = index;
    // Create a modal element with the image and caption
    const modal = document.createElement("div");
    modal.classList.add("fixed", "top-20", "left-0", "right-0", "bottom-0", "bg-black", "bg-opacity-80", "flex", "items-center", "justify-center", "z-10");
    modal.innerHTML = `
        <div class="relative">
            <img src="${imageSources[currentIndex]}" alt="${imageAlts[currentIndex]}" id="modal-image">
            <div id="close-modal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            
            <div class="modal-nav">
                <button>
                    <svg id="prevG" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>                         
                </button>

                <button >
                    <svg id="nextG" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    `;
    // Append the modal to the body
    document.body.appendChild(modal);
    // Get the modal image, prev, and next buttons
    const modalImage = document.getElementById("modal-image");
    const prev = document.getElementById("prevG");
    const next = document.getElementById("nextG");
    // Add a click event listener to the prev button
    prev.addEventListener("click", () => {
        // Decrease the current index by 1, or wrap around to the last index if it is 0
        currentIndex = currentIndex === 0 ? imageSources.length - 1 : currentIndex - 1;
        // Update the modal image source and alt attributes
        modalImage.src = imageSources[currentIndex];
        modalImage.alt = imageAlts[currentIndex];
    });
    // Add a click event listener to the next button
    next.addEventListener("click", () => {
        // Increase the current index by 1, or wrap around to the first index if it is the last
        currentIndex = currentIndex === imageSources.length - 1 ? 0 : currentIndex + 1;
        // Update the modal image source and alt attributes
        modalImage.src = imageSources[currentIndex];
        modalImage.alt = imageAlts[currentIndex];
    });
    // Add a click event listener to the modal element
    modal.addEventListener("click", (e) => {
        // Check if the clicked element is not the modal image or the prev or next buttons
        if (e.target !== modalImage && e.target !== prev && e.target !== next) {
        // Remove the modal from the body
        document.body.removeChild(modal);
        }
    });
    });
});