import React, { Component } from "react"
import OpenWeather from './OpenWeather'

type GeoState = {
    lat: number,
    lng: number
}

class Geolocation extends Component <{}, GeoState> {
    constructor(props: string){
        super(props)
        this.state = {
            lat: 0,
            lng: 0
        }
    }

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            
            let lat = (position.coords.latitude);
            let lon = (position.coords.longitude);

            this.setState({
                lat: lat, 
                lng: lon
            })

        });    
        
        
    }

    render() {
        return (
            <div>
                 {!this.state.lat && this.state.lng === 0  
                  ? "Loading..."
                  : <OpenWeather lat={this.state.lat} lng={this.state.lng}/>
                }
            </div>
        )
    }
}

export default Geolocation