const summaries = [

    {
        name: "ملخص فقه الدعوة  ",
        link: " https://drive.google.com/file/d/1oOtKDhFQQ6R3QcG3xmkMv7jtJKhFYHqW/view?usp=sharing "
    },

     {
        name: "ملخص علم المنطق ",
        link: " https://drive.google.com/file/d/1DeLXkfbDXjOuyWZ41fJdC24MzyQg0rRX/view?usp=sharing "
    },


     {
        name: "ملخص العقيدة الاسلامية 1  ",
        link: " https://drive.google.com/file/d/1DaHcmPmqBGtOH-UkK9C7llAjm0cft1eN/view?usp=sharing "
    },


     {
        name: "ملخص اعجاز القران الكريم",
        link: " https://drive.google.com/file/d/1C_ln-Jedevj8KBHQd43i-jQ3ipb44RtC/view?usp=sharing"
    },

 {
        name: "ملخص مظخل الى علم القانون",
        link: "https://drive.google.com/file/d/1CRQMtPLFzH_cqwvEYkRIquIPbRFgHrGK/view?usp=sharing"
    },


    {
        name: "ملخص أساليب البحث في الدراسات الاسلامية ",
        link: " https://drive.google.com/file/d/1Cl8gdcbfPPQdvJyTvU2Xkw5Sxknhe0nB/view?usp=sharing "
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