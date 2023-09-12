var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// button.addEventListener("click", function(){
//   // console.log("It's working")
//   cat.classList.add("show");
//   button.innerText = "Isn't he cute!?"
// });

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
  } else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!!";
  }
});