import * as React from "react";
import CircularProgress from '@material-ui/core/CircularProgress'
import "../styles/App.css";
import CitySearch from "./CitySearch";
// import { DayForecast } from "../types";
import ForecastLayout from "./ForecastsLayout";
import Footer from "./Footer";
import { Location, Coordinates } from "../types";

const App = () => {
  const [location, setLocation] = React.useState<Location>();
  const [coords, setCoords] = React.useState<Coordinates>();
  
  
  const onSelectLocation = React.useCallback((value?: Location) => {
    setLocation(value);
  }, []);

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      console.log(navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position) =>  {
        setCoords(position.coords)
      });
    } else {
      console.log("Browser geolocation is not available");
    }
  }, []);
  
  console.log('coords:::: ', coords)

  return (
    // <AppWrapper>

    <div className="App">
      <CitySearch onSelect={onSelectLocation} browserCoordinates={coords} />
      {
        location 
        ? (<ForecastLayout location={location} />
        )
        : <div />
        // <CircularProgress color="secondary" style={{ marginLeft: '45%', marginTop: '15px'}} />
      }
      
      <Footer />
    </div>
    // </AppWrapper>
  );
};

export default App;
