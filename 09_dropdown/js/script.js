$(function() {
    // #navi直下のi要素をマウスオーバー
    $("#navi").children("li").hover(function() {
        // 下層ナビゲーションの表示を切り替える
        $(this).children("ul").stop().slideToggle(100);
    });
});