const staff_items = [

{ name:' د. عمر العرايشي', src: "https://i.supaimg.com/f88ee334-12a5-4468-8a0a-a25ea0762085.jpg"},
{ name: 'د. سلام الطراونة', src: "https://i.supaimg.com/5eeba2a1-58b8-4575-a41f-77feff6add9d.jpg"},
{ name:' د. عبير الرواحنة', src: "https://i.supaimg.com/6e1a3039-4a8d-45db-ac70-da263a89deba.jpg"},
{ name:' د. وجدان ارتيمه', src: "https://i.supaimg.com/8d2c5170-ef7e-44a1-861d-54475138ddab.jpg"},
{ name: 'د. زيد المجالي', src: "https://i.supaimg.com/676c052b-c5ea-4a33-9e2e-3cfa02b4e66f.jpg"},
{ name: 'د. أوس العضايلة', src: "https://i.supaimg.com/4fac5c53-195e-41fa-bcf2-6d8c9fc94ac1.jpg"},
{ name:' د. أمجد الحمد', src: "https://i.supaimg.com/8968d32e-a3d6-4458-9a80-ba26400412b0.jpg"},
{ name: 'د. حنان الظاهر', src: "https://i.supaimg.com/570402e4-0781-4222-9e27-b79a902a8662.jpg"},
{ name: 'د. ممدوح العدوان', src: "https://i.supaimg.com/bcb5fae2-eab3-4fec-9678-ca4c438d316c.jpg"},
{ name:' د. إبراهيم الأرناؤوط', src: "https://i.supaimg.com/24006931-9ae4-43ed-8bce-0a6e8d39eff9.jpg"},
{ name: 'د. عبد السلام همّاش', src: "https://i.supaimg.com/fd98ef15-5f9b-4c2d-b1d6-22795beb9479.jpg"},
{ name:' د. طه العطيات', src: "https://i.supaimg.com/44b2f221-1b4e-400b-a0ac-5e50b1338c01.jpg"},
{ name: 'د. إبراهيم الصرايرة', src: "https://i.supaimg.com/f392ea13-065b-455d-a9bb-6fc8711d728d.jpg"},
{ name: 'د. علا عباسي', src: "https://i.supaimg.com/d3dcac3e-9444-487d-a867-19c1bcbbab8a.jpg"},
{ name:' د. أحمد صباح', src: "https://i.supaimg.com/f22b6345-dde7-4060-8c01-a83e8596c4b0.jpg"},
{ name: 'د. جهاد الجراح', src: "https://i.supaimg.com/a0faeaac-c5cd-4e60-8351-e5d8ff15dc14.jpg"},
{ name: 'د. محمد أبو الهيجا', src: "https://i.supaimg.com/d0ad1eeb-3f4d-4263-b9db-16c8d4c013e3.jpg"},

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