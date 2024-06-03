$(function () {
    const headerLogo = $(".header_logo img");
    const sideScroll = $(".side-scroll");
    const footer = $("footer");

    let isInsideSideScroll = false;
    let isInsideFooter = false;

    // ページ読み込み時の初期状態
    headerLogo.attr("src", "images/aicon-black.gif");

    $(window).on("scroll", function () {
        const scrollTop = $(this).scrollTop();

        // .side-scroll内でのスクロール
        if (scrollTop >= sideScroll.offset().top && scrollTop < sideScroll.offset().top + sideScroll.height()) {
            if (!isInsideSideScroll) {
                // .side-scrollに入ったとき
                isInsideSideScroll = true;
                isInsideFooter = false;
                headerLogo.attr("src", "images/aicon-white.gif");
            }
        } else {
            if (isInsideSideScroll) {
                // .side-scrollから出たとき
                isInsideSideScroll = false;
                // フッター内にいない場合は黒に切り替え
                if (!isInsideFooter) {
                    headerLogo.attr("src", "images/aicon-black.gif");
                }
            }
        }

        // Footer内でのスクロール
        if (scrollTop >= footer.offset().top) {
            if (!isInsideFooter) {
                // Footerに入ったとき
                isInsideFooter = true;
                headerLogo.attr("src", "images/aicon-white.gif");
            }
        } else {
            if (isInsideFooter) {
                // Footerから出たとき
                isInsideFooter = false;
                // .side-scroll内にいない場合は黒に切り替え
                if (!isInsideSideScroll) {
                    headerLogo.attr("src", "images/aicon-black.gif");
                }
            }
        }
    });
});



/*
$(function () {
    const openBtn = $(".openbtn");
    const menuIconBars = openBtn.find(".menu-icon-bar");
    const sideScroll = $(".side-scroll");
    const footer = $("footer");

    let isInsideSideScroll = false;
    let isInsideFooter = false;

    // ページ読み込み時の初期状態（黒色）
    menuIconBars.css("background-color", "#333");

    $(window).on("scroll", function () {
        const scrollTop = $(this).scrollTop();

        // .side-scroll内でのスクロール
        if (scrollTop >= sideScroll.offset().top && scrollTop < sideScroll.offset().top + sideScroll.height()) {
            if (!isInsideSideScroll) {
                // .side-scrollに入ったとき
                isInsideSideScroll = true;
                isInsideFooter = false;
                menuIconBars.css("background-color", "#fff"); // 色を白に切り替え
            }
        } else {
            if (isInsideSideScroll) {
                // .side-scrollから出たとき
                isInsideSideScroll = false;
                // フッター内にいない場合は黒に切り替え
                if (!isInsideFooter) {
                    menuIconBars.css("background-color", "#333"); // 色を黒に切り替え
                }
            }
        }

        // Footer内でのスクロール
        if (scrollTop >= footer.offset().top) {
            if (!isInsideFooter) {
                // Footerに入ったとき
                isInsideFooter = true;
                menuIconBars.css("background-color", "#fff"); // 色を白に切り替え
            }
        } else {
            if (isInsideFooter) {
                // Footerから出たとき
                isInsideFooter = false;
                // .side-scroll内にいない場合は黒に切り替え
                if (!isInsideSideScroll) {
                    menuIconBars.css("background-color", "#333"); // 色を黒に切り替え
                }
            }
        }
    });
});
*/


