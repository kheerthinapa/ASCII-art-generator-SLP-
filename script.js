// Ensure figlet is configured correctly
figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });

function generateArt() {
    let text = document.getElementById("textInput").value;
    let font = document.getElementById("fontSelect").value;   // Assigning font style

    // Check if text is empty before generating
    if (!text.trim()) {
        alert("Please enter some text!");
        return;
    }

    figlet.text(text, font, function (err, result) {
        if (err) {
            console.error("Figlet Error:", err);
            document.getElementById("asciiOutput").innerText = "Error generating ASCII art. Please try again!";
            return;
        }
        document.getElementById("asciiOutput").innerText = result; // Display in HTML
    });
}

function clearArt() {
    document.getElementById("asciiOutput").innerText = "";
    document.getElementById("textInput").value = "";
}

function copyToClipboard() {
    let asciiArt = document.getElementById("asciiOutput").innerText;

    // Check if ASCII art is generated
    if (!asciiArt.trim()) {
        alert("No ASCII art to copy!");
        return;
    }

    // Use Clipboard API to copy text to clipboard
    navigator.clipboard.writeText(asciiArt)
        .then(() => {
            alert("Copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy:", err);
            alert("Failed to copy to clipboard. Please try again.");
        });
}
