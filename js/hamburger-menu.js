$(function () {
    const nav = $("#g-nav");
    const openbtn = $(".openbtn");

    // 背景色の明るさを計算する関数
    function calculateBrightness(rgbColor) {
        const r = parseInt(rgbColor.slice(1, 3), 16);
        const g = parseInt(rgbColor.slice(3, 5), 16);
        const b = parseInt(rgbColor.slice(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
    }

    $(window).on("scroll", function () {
        const sideScrollTop = $(".side-scroll").offset().top;
        const worksTop = $(".works").offset().top;
        const footerTop = $("footer").offset().top;
        const scrollTop = $(this).scrollTop();
        const backgroundColor = getComputedStyle(nav[0]).backgroundColor;
        const backgroundBrightness = calculateBrightness(backgroundColor);
    
        if (scrollTop > sideScrollTop - 30 && scrollTop < worksTop - 30) {
            // .side-scrollを通り過ぎて.worksに入る間、テキスト色を背景に合わせて変更
            if (backgroundBrightness > 128) {
                openbtn.find("span").css("background-color", "#333");
            } else {
                openbtn.find("span").css("background-color", "#fff");
            }
        } else if (scrollTop > worksTop - 30 && scrollTop < footerTop - 30) {
            // .worksを通り過ぎて.footerに入る間、テキスト色を背景に合わせて変更
            if (backgroundBrightness > 128) {
                openbtn.find("span").css("background-color", "#fff");
            } else {
                openbtn.find("span").css("background-color", "#333");
            }
        } else if (scrollTop > footerTop - 30) {
                // スクロール位置が閾値より下にある場合、テキスト色を背景に合わせて変更
                if (backgroundBrightness > 128) {
                    // 背景が明るい場合、テキスト色を暗くする
                    openbtn.find("span").css("background-color", "#333");
                } else {
                    // 背景が暗い場合、テキスト色を明るくする
                    openbtn.find("span").css("background-color", "#fff");
                }
        } else {
            // スクロール位置が上記の条件を満たさない場合、元のテキスト色に戻す
            openbtn.find("span").css("background-color", "#333");
        }
    });
});    