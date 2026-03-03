document.getElementById("summarizeBtn").addEventListener("click", async () => {

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getSelectedText
  }, async (results) => {

    const selectedText = results[0].result;

    if (!selectedText || selectedText.trim().length === 0) {
      document.getElementById("summaryText").innerText =
        "⚠ Please select a paragraph to summarize.";
      return;
    }

    loader.classList.remove("hidden");
    summaryBox.value = "";    
    try {
      const response = await fetch("http://localhost:3000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: selectedText })
      });

      const data = await response.json();

      loader.classList.add("hidden");
      summaryBox.value = data.summary || "Error occurred.";
      charCount.innerText = summaryBox.value.length + " chars";

    } catch (error) {
      document.getElementById("summaryText").innerText =
        "Server connection failed.";
    }

  });
});
const summaryBox = document.getElementById("summaryText");
const charCount = document.getElementById("charCount");
const loader = document.getElementById("loader");

document.getElementById("copyBtn").addEventListener("click", () => {
  summaryBox.select();
  document.execCommand("copy");
});

document.getElementById("clearBtn").addEventListener("click", () => {
  summaryBox.value = "";
  charCount.innerText = "0 chars";
});

summaryBox.addEventListener("input", () => {
  charCount.innerText = summaryBox.value.length + " chars";
});
function getSelectedText() {
  return window.getSelection().toString();
}