function displayQuote(event) {
  event.preventDefault();

  new Typewriter("#poem-container", {
    strings:
      "This is a wonderful motivation quoteGenerator, and thsi is a test sentence",
    autoStart: true,
    deplay: 60,
  });
}

let quoteGenerator = document.querySelector("#enter-topic");
quoteGenerator.addEventListener("submit", displayQuote);
