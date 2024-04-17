const textBtn = document.getElementById("btn");
const textAdd = document.getElementById("text");

textBtn.addEventListener("click", () => {
  setTimeout(() => {
    textAdd.textContent = "ボタンをクリックしました";
  }, 2000);
});
