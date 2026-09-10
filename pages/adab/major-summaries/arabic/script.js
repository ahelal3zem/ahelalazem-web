const summaries = [

    {
        name: "ملخص مادة أدب أندلسي       ",
        link: " https://drive.google.com/file/d/19I3p5fGA66478Zs15MOyNNofKwovniy-/view?usp=sharing"
    },

     {
        name: "ملخص مادة أدب أردني       ",
        link: " https://drive.google.com/file/d/1qd7gwlpEn6zXoKN5mu6wo6Hbm9LiHwVf/view?usp=sharing"
    },

     {
        name: "ملخص مادة اللسانيات و الصوتيات       ",
        link: "https://drive.google.com/file/d/1EEoa3IJDrzao11gw9-1iqtP-UZ5uifwZ/view?usp=sharing "
    },

     {
        name: "ملخص علم الصرف العربي 1       ",
        link: " https://drive.google.com/file/d/1CEJ9iF23arsx4iEcF33f1-tAq04co2Eo/view?usp=sharing"
    },


     {
        name: "ملخص علم النحو العربي 1       ",
        link: "https://drive.google.com/file/d/1CMCU33UIblpau55C52dSzXRx1D6BoF-Q/view?usp=sharing "
    },

     {
        name: "ملخص النثر العربي الحديث       ",
        link: "https://drive.google.com/file/d/1eN42Q_90v8D_l03vFN6fP5Z0w8NZtU4s/view?usp=sharing "
    },


     {
        name: "ملخص الأدب العباسي       ",
        link: " https://drive.google.com/file/d/1bLq-hoBfuJr7mEV3AkgbM4Ma_xVZZyWc/view?usp=sharing"
    },


     {
        name: "ملخص البلاغة العربية (علم البيان)       ",
        link: " https://drive.google.com/file/d/1xJSnb-XrX0eNSOPdch37-eA3aO3pkvVp/view?usp=sharing"
    },


     {
        name: "ملخص فقه اللغة       ",
        link: " https://drive.google.com/file/d/1ChBdTVtAOBX4JSf9_jqBKn0Im0gfJhaA/view?usp=sharing"
    },


     {
        name: "ملخص مناهج البحث في اللغة و الأدب       ",
        link: " https://drive.google.com/file/d/1Cmwyr_ZhCs5m_eYe1INMLNzAC5CxbQk2/view?usp=sharing"
    },


    {
        name: "ملخص نثر حديث      ",
        link: " https://drive.google.com/file/d/1QL0gopcqPF_WlGGGL0sD6AKpz1QDI4L6/view?usp=sharing"
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