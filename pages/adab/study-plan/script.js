const studyPlans = [

    {
        name: " التاريخ ",
        image: "https://i.ibb.co/NnTpHYxn/a.png"
    },

    {
        name: "اللغة الانجليزية ",
        image: "https://i.ibb.co/1Ghm6Nwz/r.png"
    },

    {
        name: "اللغة العربية ",
        image: "https://i.ibb.co/chzzx1Js/ss.png"
    },

    {
        name: " الرياضيات ",
        image: "https://i.ibb.co/0RLbdzHn/IMG-20251024-WA0137.jpg"
    },

    {
        name: "الكيمياء  ",
        image: "https://i.ibb.co/HDZJcwJB/5814654290608459108-2.jpg"
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