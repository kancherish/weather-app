export default function getWeatherInfo(location){
    const api_key="00ddd4d1296a4b6c8c171338242506";

    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}&aqi=yes`
    
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }
            else
            {
                reject(false)
            }
        })
        .then((resJson)=>{
            resolve({
                temp:resJson.current.temp_c,
                co:resJson.current.air_quality.co,
                no2:resJson.current.air_quality.no2,
                last_update:resJson.current.last_updated,
                weather_text:resJson.current.condition.text,
                weather_icon:resJson.current.condition.icon,
                name:resJson.location.name,
                region:resJson.location.region,
                local_time:resJson.location.localtime,
                country:resJson.location.country
            })
        })
        .catch(()=>{
            reject(false)
        })

    })

    
}