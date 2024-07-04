$(function() {
    // ゆっくり表示
    // $("p").fadeOut();

    // 速度指定
    // $("p").fadeOut(3000);

    // 終了後の処理を指定
    $("p").fadeOut(function() {
        alert("フェードアウトしました");
    });

    // 速度と終了後の処理を指定
    $("p").fadeOut(3000, function() {
        alert("フェードアウトしました");
    })
});