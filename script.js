const sendBtn = document.getElementById('sendBtn');
const promptInput = document.getElementById('prompt');
const responseBox = document.getElementById('responseBox');

sendBtn.addEventListener('click', async () => {
    const prompt = promptInput.value.trim();
    if (!prompt) {
        alert("Please enter a prompt.");
        return;
    }

    responseBox.textContent = "Thinking...";

    try {
        const res = await fetch("http://192.168.1.104:8000/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        responseBox.textContent = data.response.trim(); // Clean output
    } catch (err) {
        responseBox.textContent = "Error connecting to MCP server.";
        console.error(err);
    }
});
