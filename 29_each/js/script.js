$(function() {
    // 要素ごとに処理を行う
    $("li").each(function() {
        $(this).html("List" + $(this).index());
    });
});