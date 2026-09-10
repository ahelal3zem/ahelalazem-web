const staff_items = [

   { name:' د. صالح الخوالدة', src: "https://i.supaimg.com/ffc04fc2-34a6-40f8-8a12-f7b0d292867d.jpg"},
{ name:' د. نائلة عبد الكريم', src: "https://i.supaimg.com/6f1f54d8-cd19-4c4d-bec4-029c29af040e.jpg"},
{ name: 'د. دعاء العدوان', src: "https://i.supaimg.com/54192e62-b234-4c63-93ea-73069e6b4a00.jpg"},
{ name: 'د. رحمة الحميدين', src: "https://i.supaimg.com/0c4e7205-2a62-4ddd-a43c-d8721f9c08d0.jpg"},
{ name: 'د. إيمان المحيسن', src: "https://i.supaimg.com/1354b666-9e04-4084-9c7b-f4cad2c72fe4.jpg"},
{ name: 'د. طلال العدوان', src: "https://i.supaimg.com/11b240da-03a7-424a-9eab-c05dbc567a17.jpg"},
{ name: 'د. فريال الشنيكات', src: "https://i.supaimg.com/593ec737-4069-4e20-af0e-67211472cfdd.jpg"},
{ name:' د. مي مهيدات', src: "https://i.supaimg.com/c367a60a-7bdd-43b7-8367-e01af394eaca.jpg"},
{ name:' د. يحيى القطاونة', src: "https://i.supaimg.com/1ac9937c-a41d-4e8a-8c2c-761415969169.jpg"},
{ name: 'د. انشراح المغاربة', src: "https://i.supaimg.com/ad11a49b-7c9c-4150-b48e-e16b52ebe478.jpg"},
{ name: 'د. شامة الحديدي', src: "https://i.supaimg.com/bd60fde8-3fc4-40c5-af2c-54eac782fe05.jpg"},
{ name:' د. أفنان الديات', src: "https://i.supaimg.com/9fa6a998-5ae9-4761-9b1e-0a310850ab7e.jpg"},
{ name: 'د. أحمد العياصرة', src: "https://i.supaimg.com/37261b53-b9ad-40e0-9298-c668d9a1986d.jpg"},
{ name: 'د. عليا العويدي', src: "https://i.supaimg.com/fa3c723d-3172-448a-a585-a65be685fe0c.jpg"},
{ name:' د. عبدالله الزعبي', src: "https://i.supaimg.com/7d24a198-85ae-4c67-bc17-4a929c946338.jpg"},
{ name: 'د. فادية السميحيين', src: "https://i.supaimg.com/5e098a4c-f9ae-457f-8fa0-ff89e917e2cf.jpg"},
{ name:' د. رهان الطراونة', src: "https://i.supaimg.com/399b2289-420d-4df2-9925-112694b4fea8.jpg"},
{ name: 'د. دانية عربيات', src: "https://i.supaimg.com/31acad30-cb90-4df2-b714-092c3ff70eb8.jpg"},
{ name:' د. دعاء العدوان', src: "https://i.supaimg.com/0c24e401-3eef-4682-b69b-f6e537e2ee83.jpg"},
{ name:' د. فاطمة التلاهين', src: "https://i.supaimg.com/555c65bf-1e2a-4f1c-bd9a-42a212cc769c.jpg"},
{ name: 'د. عرين الخوالدة', src: "https://i.supaimg.com/16052498-94ca-4f9a-bc30-93f0dc85a935.jpg"},
{ name: 'د. رندة بركات', src: "https://i.supaimg.com/e250fa5c-9748-4fe8-b068-7de8675a8795.jpg"},
{ name: 'د. عدي المصاروة', src: "https://i.supaimg.com/e8578290-6f68-426d-a31a-e67f03fa8bd2.jpg"},
{ name:' د. إبراهيم المعالي', src: "https://i.supaimg.com/49686bdc-580f-44b4-864b-c75b94415de7.jpg"}

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