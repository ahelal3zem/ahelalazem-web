const studyPlans = [

    {
        name: "أصول الدين  ",
        image: "https://i.ibb.co/5WCDsdW2/ll.png"
    },

    {
        name: "القراءات القرانية ",
        image: "https://i.ibb.co/XRFkrxG/g.png"
    },

    {
        name: "التجويد و الأداء الصوتي  ",
        image: "https://i.ibb.co/1Yc050vR/c.png"
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