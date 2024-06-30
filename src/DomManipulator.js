export default function pageFill(data){
    if(data)
    {
        const city = document.querySelector(".location_name");
        const weather_icon_img = document.querySelector(".weather_icon_img");
        const temp = document.querySelector(".temp");
        const weather_txt = document.querySelector(".weather_txt");
        const last_updated = document.querySelector(".last_updated");
        const co_value = document.querySelector(".co_value");
        const no2_value = document.querySelector(".no2_value");
        const regionval = document.querySelector(".regionval");
        const localval = document.querySelector(".localval");
        const countrysval = document.querySelector(".countrysval");

        city.innerText = data.name;
        weather_icon_img.src="https:"+data.weather_icon
        temp.innerText = data.temp+"°C";
        weather_txt.innerText = data.weather_text;
        last_updated.innerText = data.last_update;
        co_value.innerText = data.co;
        no2_value.innerText = data.no2;
        regionval.innerText = data.region;
        localval.innerText = data.local_time;
        countrysval.innerText = data.country;

    }
} 