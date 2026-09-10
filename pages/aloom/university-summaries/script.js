const universityRequirements = [

    {
        name: "ملخص مادة الإحسان",
        link: "https://drive.google.com/file/d/145853HZ6B6IA6jWW4l4HvHwptTLy_NnF/view?usp=sharing"
    },

    {
        name: "ملخص مادة الإعجاز العلمي في القرآن والسنة",
        link: "https://drive.google.com/file/d/106-WnrrhdRG0IRi6SOB8euXwJ67KXsae/view?usp=sharing"
    },

    {
        name: "ملخص مادة التربية الوطنية",
        link: "https://drive.google.com/file/d/1nd56JFeaa4tHSv0qyDNpVKvDnCjuxq9u/view?usp=sharing"
    },

    {
        name: "ملخص مادة اللغة العربية (101)",
        link: "https://drive.google.com/file/d/11nqqRAIHuzwFTqzfJv1n5GtdZHoYHDtE/view?usp=sharing"
    },

    {
        name: "ملخص مادة اللغة الإنجليزية (101)",
        link: "https://drive.google.com/file/d/11ko8PzbIrXh4N4xNWu90dGI42lF0cuI3/view?usp=sharing"
    },

    {
        name: "ملخص مادة الثقافة الرقمية",
        link: "https://drive.google.com/file/d/1YV5RxS_FE4bL-MWpzH28vAKNlqMBgG9T/view?usp=sharing"
    },

    {
        name: "ملخص مادة العلوم العسكرية",
        link: "https://drive.google.com/file/d/1Ry7aJ3X2A2Zs8aqntK5UNVOdADViCECx/view?usp=sharing"
    },

    {
        name: "ملخص مادة السيرة النبوية",
        link: "https://drive.google.com/file/d/1N-ooDz4n8InlcDXAr7P5hpf8-JHBY48t/view?usp=sharing"
    },

    {
        name: "ملخص مادة الصحة والتغذية",
        link: "https://drive.google.com/file/d/1MTz6WExi7DxpdIXWHmUsmGVPD4HFpySe/view?usp=sharing"
    },

    {
        name: "ملخص مادة القانون في حياتنا",
        link: "https://drive.google.com/file/d/1XTwS03DvvHp5lwocQWcDhioPyitCQbBU/view?usp=sharing"
    },

    {
        name: "ملخص مادة القرآن الكريم وتلاوته",
        link: "https://drive.google.com/file/d/1x4hQKFZXQDLfQaDKtGxHfvPoSDPnn0N3/view?usp=sharing"
    },

    {
        name: "ملخص مادة مدخل إلى العقيدة الإسلامية",
        link: "https://drive.google.com/file/d/1dgSZ8Efd72x9CY8nhVhEmIXAcquT7iqi/view?usp=sharing"
    },

    {
        name: "ملخص مادة قضايا معاصرة",
        link: "https://drive.google.com/file/d/1TJvjnfx2Da8jUOQ9J6-XQVJE_p7c8U31/view?usp=sharing"
    },

    {
        name: "ملخص مادة الريادة والابتكار",
        link: "https://drive.google.com/file/d/1B_DUWwafQpledffvpAd6adVI4kWb5zvF/view?usp=sharing"
    },

    {
        name: "ملخص مادة الثقافة الإسلامية",
        link: "https://drive.google.com/file/d/1kM495w0r_HiFCtR-mbqg5QWa2znkjRdX/view?usp=sharing"
    },

    {
        name: "ملخص مادة نظام الأسرة والمجتمع",
        link: "https://drive.google.com/file/d/1JaDy_at79ZxYSfNhQmok6VrIXciLeDET/view?usp=sharing"
    },

    {
        name: "ملخص مادة اللغة العربية (99)",
        link: "https://drive.google.com/file/d/18vLZRwwWOQ0TGuzAHWA3PpQbIt8f3pdw/view?usp=sharing"
    },

    {
        name: "ملخص مادة مهارات الحاسوب (99)",
        link: "https://drive.google.com/file/d/1NrU37E9SemY3tKUpcJ0OlIv5augch4Mj/view?usp=sharing"
    },

    {
        name: "ملخص مادة اللغة الإنجليزية (99)",
        link: "https://drive.google.com/file/d/1RwWigEJwwp5iJX7YVm43aS0iWt2KLn7R/view?usp=sharing"
    }

];

const container=document.getElementById("buttons-container");

universityRequirements.forEach(subject=>{

    const button=document.createElement("button");

   button.innerHTML = `
<span>${subject.name}</span>
<span class="arrow">➜</span>
`;

    button.onclick=()=>{

        window.open(subject.link,"_blank");

    };

    container.appendChild(button);

});

function goBack(){

    history.back();

}