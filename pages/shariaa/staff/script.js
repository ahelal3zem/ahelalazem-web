const staff_items = [

   { name: 'د. نزار عطا الله', src: "https://i.supaimg.com/917bc063-1026-4aad-8d45-a196bd3a51f4.jpg"},
{ name:' د. نزار الشياب', src: "https://i.supaimg.com/404947c4-ec95-470e-9dac-dc3bbd0a1139.jpg"},
{ name: 'د. أمين دغمش', src: "https://i.supaimg.com/81295290-46b5-4518-963d-1c17ffdb1a7f.jpg"},
{ name:' د. أحمد البشايرة', src: "https://i.supaimg.com/95a43ef0-3da7-405c-a270-0d1939d4f2b3.jpg"},
{ name:' د. يزيد الشباب', src: "https://i.supaimg.com/e47ed688-b979-4788-b25b-dfdab2deed47.jpg"},
{ name: 'د. محمد السواعدة', src: "https://i.supaimg.com/f0d53bb5-7e5f-4291-9d80-9d6bcdcaf352.jpg"},
{ name:' د. جمال حسان', src: "https://i.supaimg.com/939dec4d-f45a-4918-9afa-65242cd08abe.jpg"},
{ name: 'د. محمد النويهي', src: "https://i.supaimg.com/001a7034-dfba-4fb9-9dcc-f9a538d9c52c.jpg"},
{ name: 'د. فايز أبوعميرة', src: "https://i.supaimg.com/c65a86cb-19f2-47a0-aa03-95429e1f5fca.jpg"},
{ name:' د. عامر الملاحمة', src: "https://i.supaimg.com/82d82cee-30c1-479b-a8ff-e1ebc108866d.jpg"},
{ name: 'د. حمدي مراد', src: "https://i.supaimg.com/121f279c-651b-4f28-b59f-884c1b57aa80.jpg"},
{ name:' د. أحمد عبد الله أحمد', src: "https://i.supaimg.com/ac73b5ed-112e-423a-87ea-360265a08226.jpg"},
{ name: 'د. ابتهاج الرحمن', src: "https://i.supaimg.com/71458172-578d-4584-9865-bef7daa5b670.jpg"},
{ name: 'د. زكي البشايرة', src: "https://i.supaimg.com/54976652-4b01-469d-a783-948873438b9d.jpg"},
{ name: 'د. محمد سالم حرشة', src: "https://i.supaimg.com/bf11c238-4e5a-4ede-bb13-aad2c8a65769.jpg"},
{ name: 'د. مهند الحوراني', src: "https://i.supaimg.com/110f0dec-eb58-4587-b470-ce2d727ed2ff.jpg"},
{ name: 'د. سونا عبادي', src: "https://i.supaimg.com/1131ab79-72c4-4d53-b2c5-5afd9d580e40.jpg"},
{ name:' د. خليل العبادي', src: "https://i.supaimg.com/efb1d51a-9c23-4a64-ad99-234e5e5b7b95.jpg"},
{ name: 'د. يحيى القضاة', src: "https://i.supaimg.com/e1262ab9-d93d-46ff-a9ae-c92398c1a304.jpg"},
{ name: 'د. محمد ذيب', src: "https://i.supaimg.com/4a2115af-52e9-4a87-856a-32881ba63d4e.jpg"},
{ name: 'د. مختار الشنقيطي', src: "https://i.supaimg.com/90d23b02-4527-43d7-ad24-2e7d3e184f3e.jpg"},
{ name: 'د. ياسر السيد نوير', src: "https://i.supaimg.com/ba8d3663-90c7-402d-8d2b-a4314f4fc068.jpg"},
{ name:' د. محمد هاشم', src: "https://i.supaimg.com/9d623307-977c-4469-956c-55d857090923.jpg"}
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