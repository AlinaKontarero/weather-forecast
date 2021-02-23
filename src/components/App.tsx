import * as React from "react";
import CircularProgress from '@material-ui/core/CircularProgress'
import "../styles/App.css";
import CitySearch from "./CitySearch";
// import { DayForecast } from "../types";
import ForecastLayout from "./ForecastsLayout";
import Footer from "./Footer";
import { Location, DayForecast } from "../types";

const App = () => {
  const [location, setLocation] = React.useState<Location>();
  
  
  const onSelectLocation = React.useCallback((value?: Location) => {
    setLocation(value);
  }, []);
  

  return (
    // <AppWrapper>

    <div className="App">
      <CitySearch onSelect={onSelectLocation} />
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
