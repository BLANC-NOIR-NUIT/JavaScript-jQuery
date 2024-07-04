$(function() {
   $("dt").hover(function() {
    // stop()あり
    $("dd").stop().slideToggle();
    // stop()なし
    // $("dd").slideToggle();
   });
});