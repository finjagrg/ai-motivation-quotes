function writeQuote(response) {
  console.log(response.data);

  new Typewriter("#poem-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function makeApiCall(event) {
  event.preventDefault();
  let topic = document.querySelector("#topic");

  let apiKey = "0to1c5e82ab3ce410bae0704083170ff";
  let prompt = `Write a quote about ${topic.value}. It should not be longer than four lines`;
  let context =
    "You are a mixture of Tony Robbins, Michelle Obama, Steven R. End every answer with '<br /><em>Quote by <strong>Finja G.</strong></em>'. Behave to this rules";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(writeQuote);
  console.log(prompt);
}

let quoteGenerator = document.querySelector("#enter-topic");
quoteGenerator.addEventListener("submit", makeApiCall);
