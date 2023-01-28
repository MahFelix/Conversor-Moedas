const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 117924.18
const ethereum = 8159.14
const libra = 6.33

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value

    const realvalue = document.getElementById('real-value')

    const dolarValue = document.getElementById('dolar-value')

    

    dolarValue.innerHTML= inputReais / dolar
   

    realvalue.innerHTML = inputReais

    dolarValue.innerHTML= inputReais / dolar






  realvalue.innerHTML =  Intl.NumberFormat('pt-br',
{ style: 'currency', 
currency: 'BRL' }
).format(inputReais); // '$100.00'


if(select.value === "US$ Dólar americano"){ 
    dolarValue.innerHTML=  Intl.NumberFormat('en-US',
  { style: 'currency', 
  currency: 'USD' }
).format(inputReais / dolar); // '$100.00'
}

if(select.value === '€ Euro'){
dolarValue.innerHTML =  Intl.NumberFormat('de-DE',
{ style: 'currency', 
currency: 'EUR' }
).format(inputReais / euro); // '$100.00'
}

if(select.value === '₿ Bitcoin'){
  dolarValue.innerHTML =  Intl.NumberFormat('en-US',
  { style: 'currency', 
  currency: 'BTC' }
  ).format(inputReais / bitcoin); // '$100.00'
  }

  if(select.value === '⬨ Ethereum'){
   dolarValue.innerHTML =  Intl.NumberFormat('en-US',
    { style: 'currency', 
    currency: 'ETC' }
    ).format(inputReais / ethereum); // '$100.00'
    }

    if(select.value === '£ Libra'){
      dolarValue.innerHTML =  Intl.NumberFormat('en-US',
       { style: 'currency', 
       currency: 'GBP' }
       ).format(inputReais / libra); // '$100.00'
       }

}

ChangeCurrency = () => {
  const moedaName = document.getElementById('moeda-name')
  const currencyImg = document.getElementById('currency-img')

  if (select.value === 'US$ Dólar americano' ){
    moedaName.innerHTML = "Dólar Americano"
    currencyImg.src = "./assests/estados-unidos (1) 1.png"
  }
  
  if (select.value === '€ Euro' ){
    moedaName.innerHTML = "Euro"
    currencyImg.src = "./assests/Euro.png"
  }

  if (select.value === '₿ Bitcoin' ){
    moedaName.innerHTML = "Bitcoin"
    currencyImg.src = "./assests/Bitcoin.png"
  }

  if (select.value === '⬨ Ethereum' ){
    moedaName.innerHTML = "Ehereum"
    currencyImg.src = "./assests/Ethereum.png"
  }

  
  if (select.value === '£ Libra' ){
    moedaName.innerHTML = "Libra"
    currencyImg.src = "./assests/Libra.png"
  }
}

button.addEventListener('click', convertValues)

select.addEventListener("change", ChangeCurrency)