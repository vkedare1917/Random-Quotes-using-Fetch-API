const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const writer = document.getElementById("writer");
const url = "https://api.quotable.io/random";


// Function to fetch values from the url using Fetch API
let generateQuotes = () => {
   fetch(url)
      .then(data => data.json())
      .then(item => {
         quote.textContent = item.content;
         writer.textContent = item.author;
   });
};

// Generate a quote when the page loads
window.addEventListener('load', generateQuotes);

// Generate a quote when the button is clicked
btn.addEventListener('click', generateQuotes);
