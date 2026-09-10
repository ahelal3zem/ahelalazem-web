const summaries = [


     {
        name: "ملخص تكنولوجيا التعليم و التعلم (ميد)       ",
        link: "https://drive.google.com/file/d/1mqXFno7LaXgSMnTw7h9sa_snxANUs_HJ/view?usp=sharing "
    },


    {
        name: "ملخص مناهج البحث العلمي في التربية و علم النفس (ميد)      ",
        link: "https://drive.google.com/file/d/1IkRr_dMOJflRVsilJNMQfJt5M2Q-k0Zy/view?usp=sharing "
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