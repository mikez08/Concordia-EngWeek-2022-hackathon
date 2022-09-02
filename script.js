const msg = document.querySelector(".message");
const tf = document.querySelectorAll(".txt_field");
const btn = document.querySelector(".button"); // Get the button from the page
// Detect clicks on the button



btn.addEventListener("click", function() {
  console.log("hello");
  tf.forEach(x => {
    x.style.display = "none";
  });
  msg.style.display = "block";
  btn.style.display = "none";
});

