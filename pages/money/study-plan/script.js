const studyPlans = [

    {
        name: "المصارف الاسلامية  ",
        image: "https://i.ibb.co/1fYsgV17/e.jpg"
    },

    {
        name: "العلوم المالية والمصرفية ",
        image: "https://i.ibb.co/GfM2T3GH/k.png"
    },

    {
        name: "ادارة الأعمال ",
        image: "https://i.ibb.co/BVXwtzw6/n.png"
    },

     {
        name: "المحاسبة  ",
        image: "https://i.ibb.co/pr5VLYCm/6003465450983380290.jpg"
    },

    {
        name: "نظم المعلومات الادارية  ",
        image: "https://i.ibb.co/jvdDTmzG/u.png"
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