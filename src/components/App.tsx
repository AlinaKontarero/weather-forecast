import * as React from "react";
import CitySearch from "./CitySearch";
import ForecastLayout from "./ForecastsLayout";
import Footer from "./Footer";
import { Location, Coordinates } from "../types";
import { baseUrl } from "../utils/api-config";
import "../styles/App.css";

interface State {
  coords?: Coordinates
  locationWoeid?: number
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { 
      coords: undefined, 
      locationWoeid: undefined
    }
  }

  public componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>  {
        this.setState({coords: position.coords}, async () => {
          if(!!this.state.coords) {
            const response = await fetch(`${baseUrl}/?lattlong=${this.state.coords.latitude},${this.state.coords.longitude}`)
            const possiblePlace = await response.json()
            if (possiblePlace.length > 0) {
              this.setState({ locationWoeid: possiblePlace[0].woeid });
              alert('Forecast is based on your browser geolocation data')
            }
          }
        })
      });
    } else {
      alert("Browser geolocation is not available");
    }
  }

  private  onSelectLocation = (value?: Location) => {
    this.setState({locationWoeid: value ? value.woeid : undefined });
  };

  public render() {
    return (
      <div className="App">
        <CitySearch onSelect={this.onSelectLocation} />
        {!!this.state.locationWoeid
          ? (<ForecastLayout 
              woeid={this.state.locationWoeid}
            />
          )
          : <div />
        }
        <Footer />
      </div>
  );
  }

};

export default App;
