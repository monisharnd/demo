// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Create a new div element
    const newDiv = document.createElement("div");
    
    // Set its content
    newDiv.innerHTML = "<h1>Hello, World!</h1><p>This is a paragraph styled using JavaScript.</p>";
    
    // Add CSS styles using JavaScript
    newDiv.style.backgroundColor = "#f0f0f0";
    newDiv.style.padding = "20px";
    newDiv.style.borderRadius = "10px";
    
    // Append the new div element to the content div
    document.getElementById("content").appendChild(newDiv);
});
