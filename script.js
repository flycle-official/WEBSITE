// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 送信ボタンの簡易アクション
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('メッセージありがとうございます！送信されました。');
});
