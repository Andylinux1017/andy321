document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const message = document.getElementById('message').value;
            const statusDiv = document.getElementById('status');

            statusDiv.textContent = '發送中...';

            try {
                const response = await fetch('https://andy-2.onrender.com/send-message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message }),
                });

                if (response.ok) {
                    statusDiv.textContent = '訊息發送成功！';
                    document.getElementById('message').value = '';
                } else {
                    statusDiv.textContent = '發送失敗，請稍後再試。';
                }
            } catch (error) {
                console.error('Error:', error);
                statusDiv.textContent = '發送時出現錯誤，請稍後再試。';
            }
        });
    }
});