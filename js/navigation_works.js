/*
window.addEventListener('scroll', function() {
    // .side-scroll または footer の要素が表示される位置に応じた条件を設定
    var sideScrollElement = document.querySelector('.side-scroll');
    var footerElement = document.querySelector('footer');

    var bodyElement = document.body;

    var isDarkBackground = false;

    // .side-scroll または footer の要素が画面内に表示されているかチェック
    if (isElementInViewport(sideScrollElement) || isElementInViewport(footerElement)) {
        isDarkBackground = true;
    }

    // 条件に応じてハンバーガーメニューアイコンの背景色を切り替える
    if (isDarkBackground) {
        bodyElement.classList.add('dark-bg');
    } else {
        bodyElement.classList.remove('dark-bg');
    }
});

// 要素が画面内に表示されているかを判定する関数
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
*/