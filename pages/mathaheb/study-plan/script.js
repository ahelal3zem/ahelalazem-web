const studyPlans = [

    {
        name: "دبلوم الفقه المالكي",
        image: "https://i.ibb.co/hJHFN3Dh/i.png"
    },

    {
        name: "الفقه الحنفي",
        image: "https://i.ibb.co/v0C5jtX/j.png"
    },

    {
        name: "الفقه الشافعي",
        image: "https://i.ibb.co/9kxNQNvk/o.png"
    },

    {
        name: "الفقه المالكي وأصوله",
        image: "https://i.ibb.co/LzBBBnXT/x.png"
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