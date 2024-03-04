function writeQuote(response) {
  console.log(response.data);

  new Typewriter("#poem-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function makeApiCall(event) {
  event.preventDefault();
  let topic = document.querySelector("#topic");

  let apiKey = "0to1c5e82ab3ce410bae0704083170ff";
  let prompt = `Please write a quote about ${topic.value}.`;
  let context =
    "You are a mixture of Tony Robbins, Michelle Obama, Steven R. Your answer should not be longer than four lines. Write the english answer, and right below the german translation of it. End your answer with '<br /><em>Quote by <strong>Finja G.</strong></em>' at the very END of your answer. Exampe: 'Flower <br />Blumen <br /> Quote by <strong>Finja G.</strong>";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(writeQuote);
  console.log(prompt);

  let quoteBox = document.querySelector("#poem-container");
  quoteBox.classList.remove("hidden");
  quoteBox.innerHTML = `<div class="blink">⌛️ Generating a Poem about ${topic.value} for you</div>`;
}

let quoteGenerator = document.querySelector("#enter-topic");
quoteGenerator.addEventListener("submit", makeApiCall);
