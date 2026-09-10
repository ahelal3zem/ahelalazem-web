/**
 * ==========================================================================
 * أكاديمي أهل العزم - الوظائف التفاعلية المحدثة (Interactive JavaScript)
 * ==========================================================================
 */

// دالة الانتقال السلس للصفحات
function goToPage(page) {
    if (!page) return;
    document.body.style.opacity = '0.85';
    document.body.style.transition = 'opacity 0.25s ease';
    setTimeout(() => {
        window.location.href = page;
    }, 150);
}

document.addEventListener('DOMContentLoaded', () => {
    // عناصر البحث والفلترة
    const searchInput = document.getElementById('collegeSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const collegesGrid = document.getElementById('collegesGrid');
    const collegeCards = collegesGrid ? collegesGrid.querySelectorAll('.college-card') : [];
    const filterPills = document.querySelectorAll('.filter-pills .pill');
    const noResultsMsg = document.getElementById('noResultsMsg');
    const searchKeywordSpan = document.getElementById('searchKeyword');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    let currentCategory = 'all';
    let currentSearchTerm = '';

    // تصفية الكليات حسب النص والتصنيف
    function filterColleges() {
        let visibleCount = 0;
        const term = currentSearchTerm.trim().toLowerCase();

        collegeCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category') || '';
            const cardName = (card.getAttribute('data-name') || '').toLowerCase();
            const cardText = card.innerText.toLowerCase();

            const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
            const matchesSearch = !term || cardName.includes(term) || cardText.includes(term);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                card.style.animation = 'fadeInUp 0.4s ease forwards';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // إظهار رسالة عند عدم وجود نتائج
        if (noResultsMsg) {
            if (visibleCount === 0) {
                noResultsMsg.style.display = 'block';
                if (searchKeywordSpan) {
                    searchKeywordSpan.textContent = currentSearchTerm || 'التصنيف المختار';
                }
            } else {
                noResultsMsg.style.display = 'none';
            }
        }
    }

    // الاستماع لمدخلات البحث
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            if (clearBtn) {
                clearBtn.style.display = currentSearchTerm ? 'flex' : 'none';
            }
            filterColleges();
        });

        // زر مسح البحث
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                currentSearchTerm = '';
                clearBtn.style.display = 'none';
                searchInput.focus();
                filterColleges();
            });
        }

        // دعم زر Escape
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                currentSearchTerm = '';
                if (clearBtn) clearBtn.style.display = 'none';
                filterColleges();
            }
        });
    }

    // تفعيل كبسولات الفلترة
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-filter') || 'all';
            filterColleges();
        });
    });

    // زر العودة للأعلى
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// دالة إعادة تعيين البحث عند الضغط على زر في رسالة لا توجد نتائج
function resetSearch() {
    const searchInput = document.getElementById('collegeSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const allPill = document.querySelector('.filter-pills .pill[data-filter="all"]');

    if (searchInput) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
    }
    if (clearBtn) clearBtn.style.display = 'none';

    if (allPill) {
        allPill.click();
    }
}