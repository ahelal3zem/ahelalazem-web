 const staff_items = [
 {name: ` د. أحمد القنا  `, src: " https://i.supaimg.com/63d01b43-1eef-4a54-93e5-84b238dbf838.jpg "},
 {name: ` د. هلا الحياري  `, src: " https://i.supaimg.com/a3303c04-d850-481e-b317-a0b2d6f0fa47.jpg "},
 {name: `  د. هناء حجازي `, src: " https://i.supaimg.com/d9fe81ce-2650-4d20-ba9f-3c25bfdf8115.jpg "}
];


const container = document.getElementById("staff-container");


staff_items.forEach(staff => {

    const card = document.createElement("div");

    card.className = "staff-card";


    card.innerHTML = `

        <img
            src="${staff.src}"
            alt="${staff.name}"
        >

        <div class="staff-name">
            ${staff.name}
        </div>

    `;


    container.appendChild(card);

});