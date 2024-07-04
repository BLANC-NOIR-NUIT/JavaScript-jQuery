$(function() {
    $("button").click(function() {
        // 通常のアニメーション
        // $("dev").animate( {"left":"600px"} );

        // 相対指定によるアニメーション
        $("div").animate( {"left":"+=50px"} );
    });
});