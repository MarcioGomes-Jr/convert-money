const button = document.getElementById('convert-button')
const select1 = document.getElementById('currency-select1')
const select2 = document.getElementById('currency-select2')
const menuItems = document.querySelectorAll('.menu a')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId)
})

function scrollToId(event) {
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id)

    window.scroll({
        top: to - 80,
        behavior: "smooth",
    })

    console.log(id)

}

const convertValues = () => {

    const inputCurrency = document.getElementById('input-currency').value
    const primaryCurrencyValue = document.getElementById('currency-value-input')
    const secondCurrencyResult = document.getElementById('seconde-currency-result')




    if (select1.value === 'BRL') {
        const url = `https://economia.awesomeapi.com.br/last/${select2.value}-BRL`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const toRate = data[`${select2.value}BRL`]?.bid

                if (select2.value === "USD") {

                    const resultValue = (inputCurrency / toRate)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD' }
                    ).format(resultValue)
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
                        { style: 'currency', currency: 'BRL' }
                    ).format(inputCurrency)
                }
                if (select2.value === "EUR") {

                    const resultValue = (inputCurrency / toRate)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'EUR' }
                    ).format(resultValue)
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
                        { style: 'currency', currency: 'BRL' }
                    ).format(inputCurrency)
                }
                if (select2.value === "BTC") {

                    const resultValue = (inputCurrency / toRate)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'BTC' }
                    ).format(resultValue)
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
                        { style: 'currency', currency: 'BRL' }
                    ).format(inputCurrency)
                }
                if (select1.value && select2.value === "BRL") {
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('pt-BR',
                        { style: 'currency', currency: 'BRL' }
                    ).format(inputCurrency)
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
                        { style: 'currency', currency: 'BRL' }
                    ).format(inputCurrency)
                }


            })

            .catch(error => {
                console.error(error)
                secondCurrencyResult.innerHTML = 'Ocorreu um erro ao converter as moedas.'
            })
    }
    if (select2.value === 'BRL') {
        const url = `https://economia.awesomeapi.com.br/last/${select1.value}-BRL`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const fromRate = data[`${select1.value}BRL`]?.bid

                if (select1.value === "USD") {

                    const resultValue = (inputCurrency * fromRate)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('pt-BR',
                        { style: 'currency', currency: 'BRL' }
                    ).format(resultValue)
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD' }
                    ).format(inputCurrency)
                }
                if (select1.value === "EUR") {

                    const resultValue = (inputCurrency * fromRate)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('pt-BR',
                        { style: 'currency', currency: 'BRL' }
                    ).format(resultValue)
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'EUR' }
                    ).format(inputCurrency)
                }
                if (select1.value === "BTC") {

                    const resultValue = (inputCurrency * fromRate)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('pt-BR',
                        { style: 'currency', currency: 'BRL' }
                    ).format(resultValue)
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'BTC' }
                    ).format(inputCurrency)
                }



            })

            .catch(error => {
                console.error(error)
                secondCurrencyResult.innerHTML = 'Ocorreu um erro ao converter as moedas.'
            })
    }

    if (select1.value !== "BRL" && select2.value !== "BRL") {

        const url = `https://economia.awesomeapi.com.br/last/${select1.value}-BRL,${select2.value}-BRL`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const fromRate = data[`${select1.value}BRL`]?.bid
                const toRate = data[`${select2.value}BRL`]?.bid
                const resultValue = (fromRate / toRate * inputCurrency)


                if (select1.value === "USD" && select2.value !== "USD") {
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD' }
                    ).format(inputCurrency)
                }
                else if (select2.value === "USD" && select1.value !== "USD") {
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD' }
                    ).format(resultValue)
                }
                else if (select1.value && select2.value === "USD") {
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD' }
                    ).format(inputCurrency)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD' }
                    ).format(inputCurrency)
                }
                if (select1.value === "EUR" && select2.value !== "EUR") {
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'EUR' }
                    ).format(inputCurrency)
                }
                else if (select2.value === "EUR" && select1.value !== "EUR") {
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'EUR' }
                    ).format(resultValue)
                }
                else if (select1.value && select2.value === "EUR") {
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'EUR' }
                    ).format(inputCurrency)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'EUR' }
                    ).format(inputCurrency)
                }
                if (select1.value === "BTC" && select2.value !== "BTC") {
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'BTC' }
                    ).format(inputCurrency)
                }
                else if (select2.value === "BTC" && select1.value !== "BTC") {
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'BTC' }
                    ).format(resultValue)
                }
                else if (select1.value && select2.value === "BTC") {
                    primaryCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'BTC' }
                    ).format(inputCurrency)
                    secondCurrencyResult.innerHTML = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'BTC' }
                    ).format(inputCurrency)
                }


            })

            .catch(error => {
                console.error(error)
                secondCurrencyResult.innerHTML = 'Ocorreu um erro ao converter as moedas.'
            })
    }
}

const changeCurrency = () => {
    const currencyName1 = document.getElementById("currency-name1")
    const currencyName2 = document.getElementById("currency-name2")
    const currencyImg1 = document.getElementById("currency-img1")
    const currencyImg2 = document.getElementById("currency-img2")


    if (select1.value === 'USD') {
        currencyName1.innerHTML = "Dólar americano (USD)"
        currencyImg1.src = "./assets/eua.png"

    }

    if (select2.value === 'USD') {
        currencyName2.innerHTML = "Dólar americano (USD)"
        currencyImg2.src = "./assets/eua.png"
    }

    if (select1.value === 'BRL') {
        currencyName1.innerHTML = "Real (BRL)"
        currencyImg1.src = "./assets/brasil.png"
    }

    if (select2.value === 'BRL') {
        currencyName2.innerHTML = "Real (BRL)"
        currencyImg2.src = "./assets/brasil.png"
    }

    if (select1.value === 'EUR') {
        currencyName1.innerHTML = "Euro (EUR)"
        currencyImg1.src = "./assets/euro.png"
    }

    if (select2.value === 'EUR') {
        currencyName2.innerHTML = "Euro (EUR)"
        currencyImg2.src = "./assets/euro.png"
    }

    if (select1.value === 'BTC') {
        currencyName1.innerHTML = "Bitcoin"
        currencyImg1.src = "./assets/bitcoin.png"
    }

    if (select2.value === 'BTC') {
        currencyName2.innerHTML = "Bitcoin"
        currencyImg2.src = "./assets/bitcoin.png"
    }

    convertValues()
}

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu (event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


button.addEventListener("click", convertValues)
select1.addEventListener("change", changeCurrency, convertValues)
select2.addEventListener("change", changeCurrency, convertValues)