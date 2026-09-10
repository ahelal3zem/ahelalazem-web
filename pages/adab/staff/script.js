const staff_items = [

    { 
        name: 'د. هديل السنجاري',
        src: "https://i.supaimg.com/e2292ffd-60b5-4a39-9bf0-43257cbb7386.jpg"
    },

    { 
        name: 'د. فاتن أبو عرابي',
        src: "https://i.supaimg.com/600e19d4-f6a2-4151-accc-8b14f2cd404f.jpg"
    },

    { 
        name: 'د. خلود شقيرات',
        src: "https://i.supaimg.com/4780d14e-8100-4d84-a612-66cb3d9836ff.jpg"
    },

    { 
        name: 'د. عمر النصرة',
        src: "https://i.supaimg.com/7c3a4383-d19d-440f-9514-ab9512163ba6.jpg"
    },

    { 
        name: 'د. حسين البدوي',
        src: "https://i.supaimg.com/fb64dd83-2f36-4ec9-94b5-dedb1cdccc88.jpg"
    },

    { 
        name: 'د. شيماء مساعدة',
        src: "https://i.supaimg.com/0d3e93e5-2ada-491b-8ce4-a4a2b74646d7.jpg"
    },

    { 
        name: 'د. محمد عبدالعال',
        src: "https://i.supaimg.com/38b70551-3b96-4f82-b3b4-e2cd48587e8a.jpg"
    },

    { 
        name: 'د. محمد العملة',
        src: "https://i.supaimg.com/33351aeb-1897-4f52-9c96-5e011e730ab6.jpg"
    },

    { 
        name: 'د. حمزة أبو شريعة',
        src: "https://i.supaimg.com/53725940-7553-4465-9e00-335107f50ba9.jpg"
    },

    { 
        name: 'د. إشراق العموش',
        src: "https://i.supaimg.com/e8c10a58-71db-4d9c-99da-6c977fe2e1ed.jpg"
    },

    { 
        name: 'د. مبارك الطراونة',
        src: "https://i.supaimg.com/fad59f53-9a2a-4751-b39c-99203665696e.jpg"
    },

    { 
        name: 'د. محمد شطناوي',
        src: "https://i.supaimg.com/840c314a-9561-4afc-996a-016fc0a30a4a.jpg"
    },

    { 
        name: 'د. صالح الشورة',
        src: "https://i.supaimg.com/5e310a08-c8f1-4a8f-a940-deedd8871325.jpg"
    },

    { 
        name: 'د. أنس الصرايرة',
        src: "https://i.supaimg.com/0e5a89cd-c9cf-48b4-bfa8-3c83b6d4e88b.jpg"
    }

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