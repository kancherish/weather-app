import getWeatherInfo from "./getWeatherInfo"
import pageFill from "./DomManipulator";
import LoadingScreen from "./elementCreator";

export default function searchClickListen(){
    const button = document.querySelector(".search_btn");
    const queryBox = document.querySelector(".query");
    let Ls= LoadingScreen()

    button.addEventListener("click", (e) => {
        let query = queryBox.value.trim()
        if (query) {
            document.querySelector(".main").appendChild(Ls)
            getWeatherInfo(query)
                .then((data) => {
                    Ls.remove();
                    pageFill(data)
                })
                .catch((data) => {
                    Ls.remove();
                    window.alert("please check if the name is valid and your connection coz we failed to fetch data")
                })
        }
        else
        {
            Ls.remove();
            window.alert("please enter a Valid state ,city or country name")
        }
    })
}