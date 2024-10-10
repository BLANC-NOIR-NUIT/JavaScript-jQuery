console.log(document.querySelector('#colorPicker').value);

// 定数の定義
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作した時の一連の動作
const colorBg = () => {
    // 選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;

    // カラーコードを表示
        // 白
    if (color.value === '#ffffff') {
        text.textContent = `カラーコード：${color.value} (white) `;
        // 黒
    } else if (color.value === '#000000') {
        text.textContent = `カラーコード：${color.value} (black) `;
        // 赤
    } else if (color.value === '#ff0000') {
        text.textContent = `カラーコード：${color.value} (red) `;
        // 緑
    } else if (color.value === '#00ff00') {
        text.textContent = `カラーコード：${color.value} (green) `;
        // 青
    } else if (color.value === '#0000ff') {
        text.textContent = `カラーコード：${color.value} (blue) `;
    } else {
        text.textContent = `カラーコード：${color.value}`;
    } 
}




// カラーピッカーが変更されたら、colorBg関数を発動
color.addEventListener(`input`,colorBg);

