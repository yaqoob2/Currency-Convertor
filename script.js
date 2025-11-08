const BASE_URL = "https://api.frankfurter.app/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn       = document.querySelector("form button");
const fromCurr  = document.querySelector(".from select");
const toCurr    = document.querySelector(".to select");
const msg       = document.querySelector(".msg");
const swapBtn   = document.querySelector(".fa-arrow-right-arrow-left");


for (const select of dropdowns) {
  for (const currCode in countryList) {
    const opt = document.createElement("option");
    opt.value = currCode;
    opt.textContent = currCode;

    if (select.name === "from" && currCode === "USD") opt.selected = true;
    if (select.name === "to"   && currCode === "INR") opt.selected = true;

    select.append(opt);
  }

  select.addEventListener("change", (e) => updateFlag(e.target));
}


function updateFlag(selectEl) {
  const curr = selectEl.value;                    
  const country = countryList[curr];              
  const img = selectEl.parentElement.querySelector("img");
  if (img && country) img.src = `https://flagsapi.com/${country}/flat/64.png`;
}


async function updateExchangeRate() {
  const amountEl = document.querySelector(".amount input");
  let amtVal = parseFloat(amountEl.value);

  if (!amtVal || amtVal < 1) {
    amtVal = 1;
    amountEl.value = "1";
  }

  const from = fromCurr.value; 
  const to   = toCurr.value;

  const url = `${BASE_URL}?amount=${encodeURIComponent(amtVal)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;


  msg.classList.remove("error");
  msg.textContent = "Fetching rate…";

  try {
    const res = await fetch(url);
    const data = await res.json();


    if (!res.ok || data.message) {
      throw new Error(data.message || "Endpoint error");
    }

    const rate = data.rates?.[to];
    if (!rate) throw new Error("Rate not available");

    const finalAmount = (amtVal * rate).toFixed(2);
    msg.textContent = `${amtVal} ${from} = ${finalAmount} ${to}  •  1 ${from} = ${rate} ${to}`;
  } catch (err) {
    msg.classList.add("error");

    msg.textContent = (err.message && /not found/i.test(err.message))
      ? `This currency pair is not supported by Frankfurter. Try a different pair or use exchangerate.host.`
      : `Could not fetch exchange rate. Please try again.`;
  }
}


swapBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});


btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {

  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});
