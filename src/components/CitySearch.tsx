import * as React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {  CircularProgress, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { Location } from '../types'

const SearchWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  padding: 20px 20px 0 20px;
`

const CitySearch = () => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<Location[]>([]);
    const loading = open && options.length === 0;
  
    React.useEffect(() => {
      let active = true;
  
      if (!loading) {
        return undefined;
      }
  
      (async () => {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.metaweather.com/api/location/search";
        const response = await fetch(`${proxyUrl + url}/?query=san`);
        const places = await response.json();  

        if (active && places.length > 0 ) {
          setOptions(places as Location[])
        }
      })();
  
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
        getOptionSelected={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            color='secondary'
            label="Select place"
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
  }

export default CitySearch

