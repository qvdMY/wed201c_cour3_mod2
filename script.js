// Function to handle image hover
function upDate(previewPic) {
  // Logging to check if event triggers
  console.log("Image hovered: ", previewPic);

  // Log alt and src attributes for debugging
  console.log("Alt text: " + previewPic.alt);
  console.log("Image source: " + previewPic.src);

  // Change the text and background image of the div with id 'image'
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt; // Change text to alt attribute
  imageDiv.style.backgroundImage = `url(${previewPic.src})`; // Change background to image source
}

// Function to reset the image div
function undo() {
  // Reset the text and background image
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = "Hover over an image below to display here."; // Reset text
  imageDiv.style.backgroundImage = ""; // Clear background image
}
