import React, {Component} from 'react'

type WeatherProps = {
    lat: number,
    lng: number
}

type WeatherState = {
    result: number
}


class OpenWeather extends Component <WeatherProps, WeatherState> {
    constructor(props: WeatherProps){
        super(props)

        this.state = {
            result: 0
        }
    }

    async componentDidMount(){
       let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lng}&appid=cf6181dc5bec9f976cc33d0907c33708`)

       let json = await res.json()
       console.log(json)

       console.log(json.main.temp)

       this.setState({
           result: json.main.temp
       })
       
    }

    render() {
        return (
            <div>
                <h1>Open Weather Testing</h1>
              <p>{this.state.result} degrees kelvin</p>
            </div>
        )
    }
}

export default OpenWeather