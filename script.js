const btn = document.querySelector(".btn");
const fixidMenu = document.querySelector(".darkMenu");
const menu = document.querySelector(".menuList");
const arrow = document.querySelector(".btnArrow");
const conditionsTxt = document.querySelector(".conditionsTxt0");
const conditionsTxt1 = document.querySelector(".conditionsTxt1");
const conditionsTxt2 = document.querySelector(".conditionsTxt2");
const discount = document.querySelector(".discount");

const menuToggel = () => {
  menu.classList.toggle("displayNone");
  arrow.classList.toggle("rotate");
  fixidMenu.classList.toggle("displayNone");
};

btn.addEventListener("click", menuToggel);
fixidMenu.addEventListener("click", menuToggel);

conditionsTxt.addEventListener("click", () => {
  conditionsTxt.style.height = "auto";
  conditionsTxt.textContent =
    "мы не будем возвращать деньги если вы передумали или тп(важно отметить здесь то что это после того как вас добавили в группу vip)";
});

conditionsTxt1.addEventListener("click", () => {
  conditionsTxt1.style.height = "auto";
  conditionsTxt1.textContent =
    "мы покупаем ответы у самых известных каналов даже если это обойдется дороже, но гарантирует что ответы будут максимально правильные";
});
conditionsTxt2.addEventListener("click", () => {
  conditionsTxt2.style.height = "auto";
  conditionsTxt2.textContent =
    "мы гарантируем что сразу будем пересылать вам все ответы с других групп, а так же будем держать связь с вами до окончания последних экзаменов";
});

discount.addEventListener("click", () => {
  discount.classList.toggle("discountActive");
});
