$(function() {
    // 要素がクリックされたときに、引数の内容を呼び出す
    $("a").click(function() {
      $(this).css("color", "#FF0000"); // 文字色を赤に設定
      return false; // リンクを無効化
    });
  });
  