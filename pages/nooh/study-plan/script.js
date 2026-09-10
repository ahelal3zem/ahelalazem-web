const studyPlans = [

    {
        name: "القانون  ",
        image: "https://i.ibb.co/60rDmprQ/m.png"
    },


    {
        name: "الفقه وأصوله",
        image: "https://i.ibb.co/4wgK2kmV/w.png"
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