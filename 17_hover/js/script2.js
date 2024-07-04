$(function() {
    // マウスカーソルが離れた際にも、引数の内容を呼び出す
    // .hover(function() {...}, function() {...});
    $("a").hover(function() {
      $(this).css("color", "#FF0000");
    }, function() {
      $(this).css("color", "#0000FF");
    });
  });