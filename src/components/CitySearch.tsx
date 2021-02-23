import * as React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CircularProgress, TextField } from "@material-ui/core";
import styled from "styled-components";
import { Coordinates, Location } from "../types";

const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 0 20px;
`;

interface Props {
  onSelect: (value?: Location) => void;
  browserCoordinates?: Coordinates
}

// https://www.youtube.com/watch?v=n2OL8BXJyZI&ab_channel=GrokProgramming
const CitySearch = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<Location[]>([]);
  const loading = open && options.length === 0;
  const [query, setQuery] = React.useState('s');

  console.log('broser ', props.browserCoordinates)

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if(!!props.browserCoordinates) {
      console.log('hello')
    }

    (async () => {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://www.metaweather.com/api/location/search";
      if(!!props.browserCoordinates) {
       
        const response = await fetch(`${proxyUrl + url}/?lattlong=(${props.browserCoordinates.latitude}),(${props.browserCoordinates.longitude})`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }        
        });
        const br = await response.json()
        console.log('brrrrr::: ', br)
      }
      const response = await fetch(`${proxyUrl + url}/?query=${query}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }        
      });
      const places = await response.json();
      // console.log(props.getLoc())
      console.log('query::::: ', query)

      if (active && places.length > 0) {
        setOptions(places as Location[]);
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

  const onChangeFn = (value: Location | null) => {
    console.log('value')
    if(!!value) {
      props.onSelect(value)
    } else setQuery('s')
    // else setQuery to current point for the browser
  }

  return (
    <SearchWrapper>
      <Autocomplete
        id="asynchronous-demo"
        style={{ minWidth: 250 }}
        fullWidth={true}
        noOptionsText="Cannot find that place. Please try again."
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
        includeInputInList
        onChange={(event, value)=> onChangeFn(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            color="secondary"
            label="Select place"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </SearchWrapper>
  );
};

export default CitySearch;
