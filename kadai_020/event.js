const textBtn = document.getElementById("btn");
const textAdd = document.getElementById("text");

textBtn.addEventListener("click", () => {
  textAdd.textContent = "ボタンをクリックしました";
});
