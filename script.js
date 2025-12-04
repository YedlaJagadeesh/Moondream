document.getElementById("sendBtn").addEventListener("click", async function() {
    const prompt = document.getElementById("prompt").value;
    try {
        const res = await fetch("http://192.168.1.104:8000/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        const data = await res.json();
        document.getElementById("response").innerText = data.response;
    } catch (err) {
        document.getElementById("response").innerText = "Error: " + err;
    }
});
