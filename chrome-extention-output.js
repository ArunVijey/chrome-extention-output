// Select the output element in the extension's UI
var output = document.getElementById("output");

// Use chrome.runtime.sendMessage to send a message to the background script
chrome.runtime.sendMessage({
    action: "ocr",
    file: "document.pdf"
}, function(response) {
    // Handle the response from the background script
    if (response.status === "success") {
        // Display the output of the OCR program
        output.innerHTML = response.text;
    } else {
        output.innerHTML = "An error occurred: " + response.error;
    }
});
