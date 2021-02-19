import * as React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {  CircularProgress, TextField } from '@material-ui/core';
import styled from 'styled-components';
// import fetch from 'cross-fetch';


const SearchWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const CitySearch = () => {
    const locations = [
      { title: 'Moscow', value: 'moscow'},
      { title: 'Sydney', value: 'sydney'}
    ]
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<CountryType[]>([]);
    const loading = open && options.length === 0;
  
    React.useEffect(() => {
      let active = true;
  
      if (!loading) {
        return undefined;
      }

      (async () => {
        try {
          const res = await fetch('https://www.metaweather.com/api/location/search/?query=san', {
            mode: 'no-cors'
          });
      
          if (res.status >= 400) {
            throw new Error("Bad response from server");
          }
      
          const user = await res.json();
      
          console.log(user);
        } catch (err) {
          console.error(err);
        }
      })();
  
      // (async () => {
      //   const response = await fetch('https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?query=san', {
      //     headers: { 
      //       'Content-Type': 'application/json',
      //       'Access-Control-Allow-Origin': '*'
      //     }
      //   });

      //   await sleep(1e3); // For demo purposes.
      //   const city = await response.json();

      //   console.log('city:::: ', city)
  
      //   if (active) {
      //     setOptions(Object.keys(city).map((key) => city[key].item[0]) as CountryType[]);
      //   }
      // })();
  
      return () => {
        active = false;
      };
    }, [loading]);
  
    React.useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);
  
    return (
      <SearchWrapper>
      <Autocomplete
        id="asynchronous-demo"
        style={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Asynchronous"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      </SearchWrapper>
    );


    // return <SearchWrapper>
    //   <Autocomplete
    //     options={locations}
    //     getOptionLabel={(option) => option.title}
    //     style={{ width: 300 }}
    //     renderInput={(params) => 
    //       <TextField 
    //         {...params} 
    //         label="Select location" 
    //         variant="outlined" 
    //       />}
        
    //   />
    // </SearchWrapper>
  }

export default CitySearch

// *https://www.registers.service.gov.uk/registers/country/use-the-api*
// https://startjs.net/2016/11/04/file-metadata-microservice-node-js/



interface CountryType {
  name: string;
}

const sleep = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
