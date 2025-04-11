document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-btn");
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");

    // Function to send message
    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    // Send message on pressing Enter
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        let messageText = messageInput.value.trim();
        if (messageText === "") return;

        // Create message element
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "sent");
        messageDiv.innerHTML = `<p>${messageText}</p><span class="timestamp">${getTime()}</span>`;

        chatBox.appendChild(messageDiv);
        messageInput.value = "";

        // Auto-scroll to latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getTime() {
        let now = new Date();
        return now.getHours() + ":" + (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
    }
});