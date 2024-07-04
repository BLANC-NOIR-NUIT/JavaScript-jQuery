$(function() {
    // 要素の上にマウスカーソルが重なった際、引数の内容を呼び出す
    $("a").hover(function() {
      $(this).css("color", "#FF0000");
    });
  });