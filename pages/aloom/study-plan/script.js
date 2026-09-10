const studyPlans = [

    {
        name: "معلم صف  ",
        image: "https://i.ibb.co/QvHL6YK4/p.png"
    },

    {
        name: "تربية الطفولة المبكرة ",
        image: "https://i.ibb.co/x8DjWT3H/6003465450983380112.jpg"
    },

    {
        name: "الارشاد و الصحة النفسية ",
        image: "https://i.ibb.co/39xS3GJc/6003465450983380292.jpg"
    },

    {
        name: "التربية الخاصة  ",
        image: "https://i.ibb.co/Y78SVpPF/5816704162534724049.jpg"}

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