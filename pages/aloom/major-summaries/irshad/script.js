const summaries = [

 {
        name: " ملخص اضطراب الوسواس القهري  ",
        link: " https://drive.google.com/file/d/19gOp3tl9sBfqU_G0vloAvZI_6qBcy08q/view?usp=sharing"
    }, 

    {
        name: " ملخص مدخل الى صعوبات التعلم ",
        link: " https://drive.google.com/file/d/1D8kqzqNOWQMmfyg-JkFYrbn4jjL5zP7g/view?usp=sharing"
    },

     {
        name: "ملخص علم نفس الشواذ",
        link: " https://drive.google.com/file/d/1DQbpZj5gh32Kd1is_QkDyIzDZVvW2HNd/view?usp=sharing"
    },

     {
        name: "ملخص المشكلات السلوكية و أساليب معالجتها ",
        link: "https://drive.google.com/file/d/1CyTwYb6iRJctilMXvlL3UfsoJDOJRwn_/view?usp=sharing "
    },

     {
        name: "ملخص علم النفس التربوي ",
        link: " https://drive.google.com/file/d/1DQj3p4CGoNSm4DsX7-wAzZuBNbvh2fMc/view?usp=sharing"
    },

     {
        name: "ملخص ارشاد أسري ",
        link: " https://drive.google.com/file/d/1FRA7iNJtIHet7eKhHCTkoFo2PbIWuKUa/view?usp=sharing"
    },

     {
        name: "ملخص مبادئ الارشاد النفسي ",
        link: " https://drive.google.com/file/d/1Cn-C1HT1Gth1ns6C553dcpXGLh2scM_W/view?usp=sharing"
    },

     {
        name: "ملخص مدخل الى التربية الخاصة ",
        link: "https://drive.google.com/file/d/1D82q5gNm5kRKbVzo4Zvuv-rPiojkwuBA/view?usp=sharing "
    },

    {
        name: "ملخص التربية و التعليم في الاردن",
        link: " https://drive.google.com/file/d/1D82q5gNm5kRKbVzo4Zvuv-rPiojkwuBA/view?usp=sharing"
    }

];

const container = document.getElementById("summaries-container");

summaries.forEach(summary => {

    const button = document.createElement("button");

    button.className = "summary-button";

    button.innerHTML = `

        <span class="summary-name">
            ${summary.name}
        </span>

        <span class="arrow">
            ➜
        </span>
    `;

    button.onclick = function () {

        window.open(summary.link, "_blank");

    };

    container.appendChild(button);

});

// =========================================
// نافذة مشاركة الملخصات
// =========================================

function openShareBox() {

    const overlay = document.createElement("div");

    overlay.className = "share-overlay active";

    overlay.innerHTML = `
        <div class="share-box">

            <button class="close-share" onclick="closeShareBox()">
                ×
            </button>

            <div class="share-box-icon">
                🤍
            </div>

            <h2>شاركنا ملخصاتك</h2>

            <p>
              هل أعددت ملخصاً قيماً؟
                <br>
اجعل أثره يتعداك وشاركه معنا؛ لنصل به إلى كل طالب يحتاجه
            </p>

            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfya1bThzDPsKIf8SS_qatImLl5Trlo5T3MMMLRwPwPAutHqw/viewform?usp=header"
                target="_blank"
                class="share-link"
            >
                 شاركنا ملخصاتك
            </a>

        </div>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", function(event) {

        if (event.target === overlay) {
            closeShareBox();
        }

    });
}


function closeShareBox() {

    const overlay = document.querySelector(".share-overlay");

    if (overlay) {
        overlay.remove();
    }

}