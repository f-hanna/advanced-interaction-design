//************* ALL PSEUDO CODE **************/

//set image array of 12
let imgArray = ["images/ramen.jpg", "images/blueberry.jpg", "images/buger.jpg", "images/feast.jpg", "images/hamburger.jpg", "images/pasta-salad.jpg", "images/pizza.jpg", "images/quiche.jpg", "images/salad.jpg", "images/salmon.jpg", "images/tacos.jpg", "images/white-spaghetti.jpg"];


let bigDiv = document.createElement("div");
bigDiv.style.display = "none";
bigDiv.setAttribute("class", "big-div");
bigDiv.setAttribute("id", "big-div");
document.getElementById("enlarged-wrapper").appendChild(bigDiv);

let bigImg = document.createElement("img");
bigImg.setAttribute("class", "big-img");
bigImg.setAttribute("id", "big-img");

bigDiv.appendChild(bigImg);

let navBtns = document.createElement("div");
navBtns.setAttribute("class", "btn-group");
navBtns.id = "nav-buttons";

bigDiv.appendChild(navBtns);


//set all the buttons outside the function to prevent array multiplication
//add the button
let closeBig = document.createElement('button');
closeBig.innerText = 'X';
document.getElementById("overlay").appendChild(closeBig);
closeBig.style.display = "none";

let leftBtn = document.createElement("button");
leftBtn.id = "left-btn";
leftBtn.innerHTML = "<-";
leftBtn.addEventListener("click", function () { leftArrow() });

let rightBtn = document.createElement("button");
rightBtn.id = "right-btn";
rightBtn.innerHTML = "->";
rightBtn.addEventListener("click", function () { rightArrow() });


// append nav buttons to navBtn div in correct order
//
navBtns.appendChild(leftBtn);
navBtns.appendChild(rightBtn);





//parses thru img array
imageToDiv(imgArray);


/**
 * 
 * START OF THE JS FUNCTIONS
 *  
 */


//wraps all the images in an div (imgArray would pass thru here)
function imageToDiv(arr) {
    for (i = 0; i < arr.length; i++) {
        //variables
        //let smallDiv = document.getElementById("small-images");


        let imgDiv = document.createElement("div");
        let imgTag = document.createElement("img");

        imgDiv.setAttribute("class", "small-img-div");
        imgDiv.setAttribute("id", "img-div-" + i);
        imgDiv.style.display = "inline-flex";

        imgTag.setAttribute("class", "small-img");
        imgTag.setAttribute("id", "small-img-" + i);
        imgTag.setAttribute("src", arr[i]);
        imgTag.setAttribute("width", "30%");
        imgTag.style.margin = "auto";

        document.getElementById("small-images").appendChild(imgDiv);
        document.getElementById("img-div-" + i).appendChild(imgTag);



        //all the actions the user can take
        imgDiv.addEventListener("click", function () {
            enlargeImage(imgTag.getAttribute("id"))
        });

        imgDiv.addEventListener("mouseover", function () {
            hoverSmall(imgTag.getAttribute("id"))
        });

        imgDiv.addEventListener("mouseout", function () {
            hoverSmallOver(imgTag.getAttribute("id"))
        });

    }
}

function hoverSmall(id) {
    console.log("i am hovering");
    let hoverImage = document.getElementById(id);
    hoverImage.style.border = "2px solid";
    hoverImage.style.borderColor = "blue";
}

function hoverSmallOver(id) {
    console.log("i am done hovering");
    let hoverImage = document.getElementById(id);
    hoverImage.style.border = "none";
    //hoverImage.style.borderColor = "blue";
}

//chanegs the link of the image to make it bigger
function enlargeImage(id) {

    console.log("big image func");
    closeBig.style.display = "block";

    document.getElementById("overlay").style.display = "block";

    let chosenLink = document.getElementById(id).getAttribute("src");

    bigImg.setAttribute("src", chosenLink);
    bigImg.setAttribute("width", "80%")
    bigDiv.style.display = "inline-flex";
    bigDiv.style.justifyContent = "center"
    bigDiv.style.margin = "auto";

    let smallDiv = document.getElementById("small-images");
    smallDiv.style.display = "none";

    closeBig.addEventListener("click", function () {
        closeBig.addEventListener("click", closeBigImg);
    });
}

function closeBigImg() {
    bigDiv.style.display = "none"
    document.getElementById("overlay").style.display = "none";

    let smallDiv = document.getElementById("small-images");
    smallDiv.style.display = "block";

}

function leftArrow() {
    closeBigImg();

    let currLink = document.getElementById("big-img").getAttribute("src");

    let index = imgArray.indexOf(currLink);

    let prevIndex = index - 1;
    if (prevIndex < 0) {

        alert("no more images to go to!")
        
    }
    else {

        let prevId = document.getElementById("small-img-" + prevIndex).getAttribute("id");
        enlargeImage(prevId);

    }

    
}

function rightArrow() {
    console.log("inside the right arrow")
    closeBigImg();

    let currLink = document.getElementById("big-img").getAttribute("src");

    let index = imgArray.indexOf(currLink);

    let nextIndex = index + 1;
    
    if (nextIndex > 11) {

        alert("no more images to go to!")
        
    }
    else {

        let nextId = document.getElementById("small-img-" + nextIndex).getAttribute("id");
        enlargeImage(nextId);

    }

    
}

