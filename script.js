const sendBtn = document.getElementById("sendBtn");
const promptInput = document.getElementById("prompt");
const responseDiv = document.getElementById("response");

sendBtn.addEventListener("click", async () => {
    const prompt = promptInput.value.trim();
    if (!prompt) return;

    responseDiv.textContent = "Loading...";

    try {
        const res = await fetch("http://192.168.1.104:8000/ask", {  // your local MCP IP
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        if (!res.ok) throw new Error("Server error");

        const data = await res.json();
        responseDiv.textContent = data.response;
    } catch (err) {
        responseDiv.textContent = "Error connecting to MCP server.";
        console.error(err);
    }
});
