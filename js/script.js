const dropList = $("form select"),
  fromCurrency = $("#fromCurrency"),
  toCurrency = $("#toCurrency"),
  getButton = $("form button");

console.log(fromCurrency.find(":selected"));
for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    // selecting USD by default as FROM currency and NPR as TO currency
    let selected =
      i === 0
        ? currency_code == "USD"
          ? "selected"
          : ""
        : currency_code == "NPR"
        ? "selected"
        : "";
    // creating option tag with passing currency code as a text and value
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    // inserting options tag inside select tag
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList.on("change", (e) => {
    loadFlag(e.target); // calling loadFlag with passing target element as an argument
  });
}

function loadFlag(element) {
  console.log(element.value);
  for (let code in country_list) {
    if (code == element.value) {
      // if currency code of country list is equal to option value
      let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
      // passing country code of a selected currency code in a img url
      imgTag.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.on("click", (e) => {
  e.preventDefault(); //preventing form from submitting
  getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");

exchangeIcon.addEventListener("click", () => {
  // Swap value
  let tempCode = fromCurrency.find(":selected").val();
  fromCurrency.find(":selected").val(toCurrency.find(":selected").val());
  toCurrency.find(":selected").val(tempCode);

  //Swap text
  let tempText = fromCurrency.find(":selected").text();
  fromCurrency.find(":selected").text(toCurrency.find(":selected").text());
  toCurrency.find(":selected").text(tempText);

  loadFlag(fromCurrency.children(":selected"));
  loadFlag(toCurrency.find(":selected").val());
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector("form input");

  let amountVal = +amount.value;
  // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  $("form .exchange-rate").text("Getting exchange rate...");
  let url = `https://v6.exchangerate-api.com/v6/64aa816c0f61933f4018903a/latest/${fromCurrency
    .find(":selected")
    .val()}`;
  console.log(url);
  // fetching api response and returning it with parsing into js obj and in another then method receiving that obj
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.conversion_rates[toCurrency.find(":selected").val()]);
      let exchangeRate =
        result.conversion_rates[toCurrency.find(":selected").val()]; // getting user selected TO currency rate
      let totalExRate = (amountVal * exchangeRate).toFixed(2); // multiplying user entered value with selected TO currency rate

      $("form .exchange-rate").html(
        `${amountVal} ${fromCurrency
          .find(":selected")
          .val()} = ${totalExRate} ${toCurrency.find(":selected").val()}`
      );
    })
    .catch(() => {
      // if user is offline or any other error occured while fetching data then catch function will run
      $("form .exchange-rate").html("Something went wrong");
    });
}
