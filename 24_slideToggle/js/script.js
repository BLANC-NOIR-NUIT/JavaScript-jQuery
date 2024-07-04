$(function() {
    $("dt").click(function() {
        // ゆっくり開閉
        // $("dd").slideToggle();

        // 速度を指定して開閉
        $("dd").slideToggle(3000);
    });
});