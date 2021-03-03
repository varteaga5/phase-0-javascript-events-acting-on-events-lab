// Your code here
const dodger = document.getElementById("dodger"); 
dodger.style.backgroundColor = "#FF69B4"; 
// dodger.style.bottom = "100px"; 
// dodger.style.left = "0px"; 

function moveDodgerLeft(){
// 1) moves the DODGER to the left
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight () {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
    dodger.style.left = `${left + 1}px`;
    }
  
    }

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } 
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      } 
  

  }); 

//////////////////////////////////////////////////////



