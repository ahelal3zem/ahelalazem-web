const summaries = [

    {
        name:  "ملخص مادة العقيدة الاسلامية  (ميد)",
        link: "https://drive.google.com/file/d/1bw1_cC_EmZJqVrrBY3Zfjz-dhwGqNBgv/view?usp=sharing"
    },

    {
        name: "ملخص زواج و طلاق 1",
        link: "https://drive.google.com/file/d/16T_RJnJfpvBqJ0wZ6Op2HVPBA916osiR/view?usp=sharing"
    },

    {
        name: "ملخص أصول الفقه 1",
        link: "https://drive.google.com/file/d/1Rjft3AlJnIt4GB-TA6kIFha7aQbCw5a0/view?usp=sharing"
    },

    {
        name: "ملخص فقه الجنايات و الحدود 1",
        link: "https://example.com/shafii-4"
    },

     {
        name: "ملخص فقه العبادات  3",
        link: "https://drive.google.com/file/d/1sTkFVY6XRSFI5CeYnEHqTYvlAqkYcfHk/view?usp=sharing"
    },

    { 
        name: "ملخص فقه المعاملات المالية 1",
        link: "https://drive.google.com/file/d/1OFtR5YngMbAXygRsVV2n7i2RkE0W2IrC/view?usp=sharing"
    },

     {
        name: "ملخص فقه المعاملات المالية 2",
        link: "https://drive.google.com/file/d/1BIQBWUZT3vOI8DtijG2wvRB8yzlDF4yB/view?usp=sharing"
    },

    

     {
        name: "ملخص فقه النكاح و الطلاق 2",
        link: "https://drive.google.com/file/d/1ghs4TLkoQy8v32NRjqWykCUaQopzvJ6o/view?usp=sharing"
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