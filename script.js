document.addEventListener('DOMContentLoaded', (event) => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.querySelector('button');

    // Event listener untuk mendeteksi tombol Enter pada textarea
    userInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();  // Mencegah newline pada textarea
            sendMessage();
        }
    });
});

function sendMessage() {
    var userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    // Menonaktifkan textarea dan tombol Kirim sementara permintaan sedang diproses
    const userInputElement = document.getElementById('user-input');
    const sendButton = document.querySelector('button');
    userInputElement.disabled = true;
    sendButton.disabled = true;

    // Tambahkan pesan pengguna ke chat-box
    var chatBox = document.getElementById('chat-box');
    var userMessageElement = document.createElement('div');
    userMessageElement.classList.add('chat-message', 'user-message');
    userMessageElement.innerHTML = `<span class="label">User</span><p class="message">${userInput}</p>`;
    chatBox.appendChild(userMessageElement);

    // Kirim permintaan POST ke server Flask
    fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Tambahkan respons dari chatbot ke chat-box
        var botMessageElement = document.createElement('div');
        botMessageElement.classList.add('chat-message', 'bot-message');
        botMessageElement.innerHTML = `<span class="label">Your Assistant</span><p class="message">${data.sentiment_response}</p>`;
        chatBox.appendChild(botMessageElement);

        // Scroll ke bawah chat-box untuk melihat respons terbaru
        chatBox.scrollTop = chatBox.scrollHeight;

        // Aktifkan kembali textarea dan tombol Kirim setelah menerima respons
        userInputElement.disabled = false;
        sendButton.disabled = false;

        // Kosongkan textarea setelah mengirim pesan
        userInputElement.value = '';

        // Scroll ke bawah chat-box untuk melihat pesan terbaru
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Gagal menghubungi server. Coba lagi nanti.');

        // Aktifkan kembali textarea dan tombol Kirim setelah menerima respons
        userInputElement.disabled = false;
        sendButton.disabled = false;
    });
}
