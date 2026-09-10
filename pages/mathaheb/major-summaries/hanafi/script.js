const summaries = [

    {
        name: "ملخص وصايا و مواريث ",
        link: "https://drive.google.com/file/d/19j8uSIB4Qs9pRAP4B999ubBBS2Wu_Nf-/view?usp=sharing"
    },

    {
        name: "ملخص ايات الاحكام ",
        link: "https://drive.google.com/file/d/1Djda_yGE3vkEkw4ZCwx65Ad3ayQeczt_/view?usp=sharing"
    },

    {
        name: "ملخص أحكام التنفيذ ميد (تهذيب نظرية التنفيذ) ",
        link: "https://drive.google.com/file/d/1z5dvhc8yNMm3XqFTx1onu35Yvd6oibwD/view?usp=sharing"
    },

    {
        name: "ملخص أصول الافتاء (ميد) ",
        link: "https://drive.google.com/file/d/1b_871fa8Dkig3Y3aj06er7j40H-7vkvh/view?usp=sharing"
    },

    {
        name: "ملخص مادة العقيدة 1",
        link: "https://drive.google.com/file/d/1Dk59evzFahkXtQNEgAUhlJNOjQVYwXsH/view?usp=sharing"
    },

    {
        name: "ملخص عقيدة أهل السنة و الجماعة (نهذيب شرح العقائد النسفية)   ",
        link: "https://drive.google.com/file/d/1rV-Nf8t46e6cW7Txp3tPMwbXyQ0nzGoA/view?usp=sharing"
    },

    {
        name: "ملخص القضاء و السير 2",
        link: "https://drive.google.com/file/d/1Dw4Kj7UwIce_mgl4a08y9F_Afcgi1ZoE/view?usp=sharing"
    },

    {
        name: "ملخص تنمية العقيدة ",
        link: "https://drive.google.com/file/d/1E-L50_V67_gUq5RWpo846wrfBSVeY2fh/view?usp=sharing"
    },

    {
        name: "ملخص تلاوة 1",
        link: "https://drive.google.com/file/d/1E3nXLPsaJsM3JBZ2JJhMsfW4hInqsFAN/view?usp=sharing"
    },

    {
        name: "ملخص الوجيز في القواعد الفقهية ",
        link: "https://drive.google.com/file/d/1E3nXLPsaJsM3JBZ2JJhMsfW4hInqsFAN/view?usp=sharing"
    },

    {
        name: "ملخص علوم الحديث / أسئلة ",
        link: "https://drive.google.com/file/d/1Dp0P4f2CJvywNjmumAVcgLDxLsMEdb1z/view?usp=sharing"
    },

    {
        name: "ملخص أصول التنفيذ 1",
        link: "https://drive.google.com/file/d/1Eq9lpS112eICSgb4v9mKrqIX8JawWK0H/view?usp=sharing"
    },

    {
        name: "ملخص أصول المحاكمات ",
        link: "https://drive.google.com/file/d/1Eh2RM-EnyyZQHijnwJWe0lX26sN3Ug62/view?usp=sharing"
    },

    {
        name: "ملخص مادة القضايا و احكامها ",
        link: "https://drive.google.com/file/d/1EVMaOb0DQnY13QIIdHmwaOzVptbevtTQ/view?usp=sharing"
        
    },

    {
        name: "ملخص مصادر الالتزام 1",
        link: "https://drive.google.com/file/d/1EDSEYEqX87iaVU8ozx2WBZyAyzwGF-L-/view?usp=sharing"
    },

    {
        name: "ملخص نظام الحكم ",
        link: "https://drive.google.com/file/d/1E8Hdi-yLVdNJbyDLvdzg8gQ2x22-2ncP/view?usp=sharing"
    },

    {
        name: "تهذيب مادة دراسات أصولية 2",
        link: "https://drive.google.com/file/d/1E4_eHZ7wrkLpL5PZw-ooq-Spggi_ooRD/view?usp=sharing"
    },

    {
        name: "ملخص فقه النكاح و الطلاق 1",
        link: "https://drive.google.com/file/d/1Euv6lapmo7btbI218F_wnic6A4iuWY6d/view?usp=sharing"
    },

    {
        name: "ملخص فقه عبادات 1",
        link: "https://drive.google.com/file/d/1Et3K01t8YW-o1L2cARv-MdYEaWRFvxkQ/view?usp=sharing"
    },

    {
        name: "ملخص مقدمات في التربية و الاصلاح الشرعي  ",
        link: "https://drive.google.com/file/d/1q9Jtq8Fk9jHhnahkPkd0XKgROYcUAkal/view?usp=sharing"
    },

    {
        name: "ملخص الترجيح المذهبي (اختيارات الشرنبلي و القدوري)",
        link: "https://drive.google.com/file/d/1EYzDYtgb-liOg75_wfPQoy99qJBlt0bv/view?usp=sharing"
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