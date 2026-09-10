const staff_items = [
    
{ name:' د.غفران سعيد حجاوي', src: "https://i.supaimg.com/0b64f138-229e-4f8d-9339-1d272f1eee3e.jpg" },
  { name: 'د.شيرين عودة الله الدعجة', src: "https://i.supaimg.com/bbd49fc6-5da2-41c4-afce-31aaddc0d8a1.jpg" },
  { name: 'د.علاء قاسم المطارنة', src: "https://i.supaimg.com/0cafa987-eddd-472c-901f-1638a0b1d09b.jpg" },
  { name: 'د.بسام خليل بقيله', src: "https://i.supaimg.com/8930ab11-f46f-43ac-aa73-cd0c4b0480f1.jpg" },
  { name:' د.آلاء عطا لطفي جرادات', src: "https://i.supaimg.com/0936a46f-becd-40de-a709-049fdf3dbb94.jpg" },
  { name:' د.منيرة عبد الله مفلح', src: "https://i.supaimg.com/2d7a910b-2c26-4f35-91e4-47c47ce04210.jpg" },
  { name:' د.محمد أمين', src: "https://i.supaimg.com/13953f91-dc0a-43e5-82d8-2be106949bb5.jpg" },
  { name:' د.إلياس عبد الله أبو الهيجاء', src: "https://i.supaimg.com/436877a1-9607-4515-9f8c-63709b991d30.jpg" },
  { name:' د.خالد محمد شعلان', src: "https://i.supaimg.com/7bc7aa40-8f3c-4577-9cbb-21a13b5ba152.jpg" },
  { name:' د.نسيم محمد أبو رمان', src: "https://i.supaimg.com/5e9226d1-7b8b-4c4f-b498-715394e9e648.jpg" },
  { name:' د.عاهد ساكت الحرايزة', src: "https://i.supaimg.com/ddebacc8-1b8d-4362-87bc-d4217e66ca79.jpg" },
  { name: 'د.طارق هاني الضرغام', src: "https://i.supaimg.com/05555be7-f887-4d54-85af-de8964a7b53e.jpg" },
  { name:' د.عبير فوزان العبادي', src: "https://i.supaimg.com/7c6145e7-fc6c-4063-b10f-ed3cc4dd5fad.jpg" },
  { name: 'د.مراد محمد الكساسبة', src: "https://i.supaimg.com/fd63d3b8-846e-4de6-a2d4-06ba3c3ea7ae.jpg" },
  { name: 'د.محمد عبد الحليم الخرابشة', src: "https://i.supaimg.com/be2a59c0-28de-4623-9808-2f7767c64618.jpg" },
  { name: 'د.نداء صالح النسور', src: "https://i.supaimg.com/a3461272-f42a-463a-bb49-be67a86b5a43.jpg" },
  { name: 'د.لايزر حسين الحجاحجة', src: "https://i.supaimg.com/1e53862a-c308-47dc-9a50-7a5a91a9b115.jpg" },
  { name:' د.رزان عبدالله التخاينة', src: "https://i.supaimg.com/4bf3cf8e-8782-4499-a09d-acfb62088f6f.jpg" },
  { name: 'د.نادية يوسف جودت', src: "https://i.supaimg.com/9c946eb1-3d86-41ac-9409-934f356197b3.jpg" },
  { name:' د.وائل عبد الفتاح الصرايره', src: "https://i.supaimg.com/097ab5d8-0673-4de6-bc7d-1ebe61f3af92.jpg" },
  { name:' د.إسراء جودت منصور', src: "https://i.supaimg.com/31e6392b-927d-42ac-a822-6db53be562a7.jpg" },
  { name: 'د.عبدالله صلاح حردان', src: "https://i.supaimg.com/169e0967-846b-4f02-99bd-894ca5f7a7eb.jpg" },
  { name: 'أ.د.أحمد إسماعيل المعاني', src: "https://i.supaimg.com/eaada235-f208-4756-871e-772b6415bbcc.jpg" },
  { name:' د.حسين أحمد الطروانة', src: "https://i.supaimg.com/13b2d393-4485-4451-a9ea-799dc1a82f3c.jpg" },
  { name:' د.طلال عبد الكريم القرعان', src: "https://i.supaimg.com/8a6fd090-f52d-408f-9156-ea6c0f8bf701.jpg" },
  { name:' د.سوسن عبدالله الشاعر', src: "https://i.supaimg.com/3d0cc55f-448d-4cfe-a9ef-b36a1da13e50.jpg" },
  { name:' أ.د.عبد الفتاح زهير العبداللات', src: "https://i.supaimg.com/d1d22cb7-a76f-41d4-968f-67f70c8f04d3.jpg" },
  { name:' أ.د عماد يوسف أحمد', src: "https://i.supaimg.com/ebebb5e6-2a1b-44c9-a5bb-235df457bbb3.jpg" },
  { name:' د.سامر فواز الهواري', src: "https://i.supaimg.com/4ca49835-6c7b-4d76-a713-ff13ed6256f2.jpg" },
  { name: 'أ.د خالد محمود الشوابكة', src: "https://i.supaimg.com/1dc2c351-a0fb-4b32-bb80-7149031c226d.jpg" },
  { name:' أ.د. مروان محمد أبو عرابي', src: "https://i.supaimg.com/358ec4e0-2f21-416d-b5e5-cff4a39a72fe.jpg" },
  { name:' أ.د.نضال عمر زلوم', src: "https://i.supaimg.com/64ed08e7-870c-49a1-8d72-e21ac85ca1c7.jpg" },
  { name:' أ.د. شاكر جار الله الخشالي', src: "https://i.supaimg.com/d093b3bf-f7b6-41d3-952c-421e5c34a96d.jpg" }

   
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