import React, {Component} from 'react'

type WeatherProps = {
    lat: number,
    lng: number
}

class OpenWeather extends Component <WeatherProps, {}> {
    constructor(props: WeatherProps){
        super(props)
    }

    async componentDidMount(){
       let res = await fetch ("api.openweathermap.org/data/2.5/weather?lat="+ this.props.lat + "&lon=" + this.props.lng + "&appid=cf6181dc5bec9f976cc33d0907c33708")

    //    let json = await res.json()

       console.log(res)
       
    }

    render() {
        return (
            <div>
                Open Weather Testing
            </div>
        )
    }
}

export default OpenWeather