$(function() {
    // ゆっくり表示
    // $("p").fadeIn();

    // 速度指定
    // $("p").fadeIn(1000);

    // 終了後の処理を指定
    // $("p").fadeIn(function() {
    //     $(this).css("color", "#FF0000");
    // });

    // 速度と終了後の処理を指定
    $("p").fadeIn(1000,function() {
        $(this).css("color","#0000FF");
    });
});