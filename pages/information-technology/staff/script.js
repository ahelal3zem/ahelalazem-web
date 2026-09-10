const staff_items = [

 {name: `د معاذ حسني الطراونة`, src: "https://i.supaimg.com/af2a9573-ec11-4e92-86ff-9574313a4db6.jpg"},
{name: `د مهند عوض طحبوش`, src: "https://i.supaimg.com/207107fa-f021-4220-bd7b-c65dc518822b.jpg"},
{name: `د مروة مصطفى عليان`, src: "https://i.supaimg.com/a775219a-9768-4117-b495-28bf89af311b.jpg"},
{name: ` د صفاء خالد الصرايرة`, src: "https://i.supaimg.com/688a75b4-eae6-4e5c-b83d-5111820d6159.jpg"},
{name: `د صهيب عبد الكريم الحيري`, src: "https://i.supaimg.com/21ccabbb-e331-4b55-a45f-58cf89684354.jpg"},
{name: `د هديل ضا الشبول`, src: "https://i.supaimg.com/e6b60f79-66c0-46a2-a2b9-ac15bf614bba.jpg"},
{name: `د رجاء محمد عبد القادر مساعدة`, src: "https://i.supaimg.com/5efe5771-2479-4e4c-aadc-3e83e3c49cb4.jpg"},
{name: `د سمية محمد ابو فخر`, src: "https://i.supaimg.com/97c8ce32-5d8e-4ea4-9aaf-f699f22d527d.jpg"},
{name: `د محمد حسن بني عطا`, src: "https://i.supaimg.com/1f15087d-67a0-41a9-8c7d-0ec5c384bc60.jpg"}

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