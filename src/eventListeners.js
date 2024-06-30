import getWeatherInfo from "./getWeatherInfo"
import pageFill, { updateDatalist } from "./DomManipulator";
import LoadingScreen from "./elementCreator";


function roundTo(num, precision) {
    const factor = Math.pow(10, precision)
    return Math.round(num * factor) / factor
  }

const fahrenheitToCelsius = (fahrenheit) => roundTo((fahrenheit - 32) * 5 / 9,2);

const celsiusToFahrenheit = (celsius) => roundTo((celsius * 9 / 5) + 32,2);

export default function searchClickListen() {
    const button = document.querySelector(".search_btn");
    const queryBox = document.querySelector(".query");
    let Ls = LoadingScreen()

    button.addEventListener("click", (e) => {
        let query = queryBox.value.trim()
        if (query) {
            document.querySelector(".main").appendChild(Ls)
            getWeatherInfo(query)
                .then((data) => {
                    if(!data){
                        window.alert("data");
                    }
                    Ls.remove();
                    pageFill(data)
                    queryBox.value = ""
                })
                .catch(() => {
                    Ls.remove();
                    window.alert("please check if the name is valid and your connection coz we failed to fetch data")
                })
        }
        else {
            Ls.remove();
            window.alert("please enter a Valid state ,city or country name")
        }
    })
}

export function ConverterListen() {
    const button = document.querySelector(".convert");

    button.addEventListener("click", (e) => {
        const temp = document.querySelector(".temp")
        const text = temp.textContent.trim()
        if (text[0] === "-")
        {
            return;
        }
        else if(text[text.length-1]==="C"){
            const curr_temp = text.replace(/°C/g,"")
            const f=celsiusToFahrenheit(curr_temp);
            temp.innerText = `${f}°F`
            e.target.textContent = "CONVERT TO C"

        }
        else if(text[text.length-1]==="F"){
            const curr_temp = text.replace(/°F/g,"")
            const c=fahrenheitToCelsius(curr_temp);
            temp.innerText = `${c}°C`
            e.target.textContent = "CONVERT TO F"
        }
        
    })

}