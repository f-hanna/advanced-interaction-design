//c-1
var c1 = document.getElementById("c-1");
c1.addEventListener("click", function () {
    alert("Welcome to Charette Clicks!")
    // c1.style.width = "300px";
});

//c-2
var c2 = document.getElementById("c-2");
c2.addEventListener("click", function () {
    c2.classList.add("bg-fill-animation");
    c2.style.backgroundColor = "rgb(255, 149, 0)";
    
});

//c-3
var c3 = document.getElementById("c-3");
// Create div elements dynamically
for (var i = 0; i < 18; i++) {
  // Create a new div element
  var newDiv = document.createElement("div");

  // Set some content or styles for the new div
  newDiv.classList.add("c3-child"); // Optional: Add a class for styling

  // Append the new div to the container
  c3.appendChild(newDiv);
}