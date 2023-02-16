const textInput = document.getElementById("text_field");
const textInputValue = textInput.value;
document.getElementById("bold").addEventListener("click", function () {
  textInput.classList.toggle("bold_font");
});
document.getElementById("italic").addEventListener("click", function () {
  textInput.classList.toggle("italic_font");
});
document.getElementById("underline").addEventListener("click", function () {
  textInput.classList.toggle("underline_font");
});
//align style
document.getElementById("align_left").addEventListener("click", function () {
  textInput.style.textAlign = "left";
});
document.getElementById("align_center").addEventListener("click", function () {
  textInput.style.textAlign = "center";
});
document.getElementById("align_right").addEventListener("click", function () {
  textInput.style.textAlign = "right";
});
document.getElementById("align_justify").addEventListener("click", function () {
  textInput.style.textAlign = "justify";
});
document.getElementById("color_picker").addEventListener("input", function (event) {
    const color = event.target.value;
    textInput.style.color = color;
  });
document.getElementById("font_size").addEventListener("change", function (event) {
  const size = event.target.value;
  textInput.style.fontSize = size + "px";
  // Set height of the textarea
  textInput.style.height = textInput.scrollHeight + "px";
});
