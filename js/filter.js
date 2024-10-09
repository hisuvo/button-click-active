// Utility part here

const $ = (id) => document.getElementById(id);
const mk = (id) => document.createElement(id);


const btnEle = $("btn_cantainer").querySelectorAll("button")
btnEle.forEach((item) => {
    item.addEventListener("click", () => {
        $("btn_cantainer").querySelector(".bg-teal-500")?.classList.remove("bg-teal-500", "font-black", "scale-125")
        item.classList.add("bg-teal-500", "font-black", "scale-125")
    })
})
