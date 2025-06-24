let quotes = [
  { text: "Believe in yourself.", author: "Unknown" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" }
];

let colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF"];

let authorText = document.getElementById("author");
let quoteText = document.getElementById("quote");
let newQuoteBtn = document.getElementById("new-quote");
let quoteBox = document.getElementById("quote-box");
let saveBtn = document.getElementById("saveBtn")

newQuoteBtn.addEventListener("click", function () {

    quoteText.classList.add("fade");
    authorText.classList.add("fade");

    setTimeout(() => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomBoxColor = colors[Math.floor(Math.random() * colors.length)];

    quoteText.textContent= quotes[randomIndex].text;
    quoteText.textContent = quotes[randomIndex].text;
    authorText.textContent = `— ${quotes[randomIndex].author}`;
    document.body.style.backgroundColor = randomColor;
    quoteBox.style.backgroundColor = randomBoxColor;

    quoteText.classList.remove("fade");
    authorText.classList.remove("fade");
    }, 300);
});

saveBtn.addEventListener("click", function () {
    let currentQuote = quoteText.textContent;
    let currentAuthor = authorText.textContent;

    let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    savedQuotes.push({ text: currentQuote, author: currentAuthor});
    localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));

    alert("Quote saved!");
});