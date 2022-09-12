const url = `https://api.adviceslip.com/advice`;
const title = document.querySelector(".title");
const text = document.querySelector(".parag");
const img = document.querySelector(".img");
const genrateAdvice = async function () {
  const res = await fetch(url);
  if (!res.ok) return;
  const data = await res.json();
  title.textContent = `Advice #${data.slip.id}`;
  text.textContent = `"${data.slip.advice}"`;
};
genrateAdvice();
img.addEventListener("click", function () {
  genrateAdvice();
});
