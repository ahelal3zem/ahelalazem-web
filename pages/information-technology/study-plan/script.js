const studyPlans = [

    {
        name: "هندسة البرمجيات  ",
        image: "https://i.ibb.co/tPZzqgLC/f.png"
    },

    {
        name: "علم الحاسوب ",
        image: "https://i.ibb.co/Gvb6Yd81/q.png"
    },

    {
        name: "أمن و سرية المعلومات و الشبكات ",
        image: "https://i.ibb.co/HpDkv9F3/6003465450983380289.jpg"
    },

    {
        name: "نظم شبكات الحاسوب  ",
        image: "https://i.ibb.co/d47MdPRC/6003465450983380291.jpg"
    }

];


const container = document.getElementById("plans-container");


studyPlans.forEach(plan => {

    const card = document.createElement("div");

    card.className = "plan-card";


    card.innerHTML = `

        <img
            src="${plan.image}"
            alt="${plan.name}"
        >

        <div class="plan-name">
            ${plan.name}
        </div>

    `;


    card.onclick = function () {

        window.open(plan.image, "_blank");

    };


    container.appendChild(card);

});