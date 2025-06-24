let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
let list = document.getElementById("savedQuotesList");

savedQuotes.forEach(function (quote) {
  let li = document.createElement("li");
  li.textContent = `${quote.text} ${quote.author}`;
  list.appendChild(li);
});
