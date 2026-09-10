const summaries = [

    {
        name: " Servey of American literature ",
        link: " https://drive.google.com/file/d/1Nsy4e256KPdczoVoI07Zg5OHsSL6mYb8/view?usp=sharing"
    },

     {
        name: "Introduction to linguistics",
        link: " https://drive.google.com/file/d/1CXAW-y8OB9i0n6jt-44o_vHk2f1yFzqG/view?usp=sharing"
    },

     {
        name: " Morphemes ",
        link: " https://drive.google.com/file/d/1lm6xISCPk3XSyoXZxJiShJ6R_h2jlxlV/view?usp=sharing"
    },

    {
        name: " Introduction to literature (mid)",
        link: " https://drive.google.com/file/d/1hH1f0l3lJrZLnoddO_uSLAeYUart3XnB/view?usp=sharing"
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