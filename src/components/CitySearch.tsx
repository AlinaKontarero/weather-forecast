import * as React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CircularProgress, TextField } from "@material-ui/core";
import styled from "styled-components";
import { Coordinates, Location } from "../types";
import { baseUrl } from "../utils/api-config";

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

interface State {
  open: boolean
  options: Location[]
  query: string | undefined
}

class CitySearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { 
      open: false,
      options: [],
      query: undefined
     }
  }

  private setSearchQuery = (v: string) => {
    this.setState({ query: v}, async () => {
      
      if(!!this.state.query) {
        const response = await fetch(`${baseUrl}/?query=${this.state.query}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }        
        });
        const places = await response.json();
      
        if (places.length > 0) {
          this.setState({ options: places });
        }
      }
    })
  }

  public render() {
    return (
      <SearchWrapper>
        <Autocomplete
          style={{ minWidth: 250 }}
          fullWidth={true}
          noOptionsText="Please add city to search"
          open={this.state.open}
          onOpen={() => {
            this.setState({open: true});
          }}
          onClose={() => {
            this.setState({open: false});
          }}
          getOptionSelected={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          options={this.state.options}
          loading={this.state.options.length < 1}
          includeInputInList
          onChange={(event, value)=> this.props.onSelect(value as Location)}
          renderInput={(params) => (
            <TextField
              {...params}
              color="secondary"
              label="Select place"
              variant="outlined"
              onChange={(event) => this.setSearchQuery(event.target.value)}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {this.state.options.length < 1 && !!this.state.query ? (
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
  }
}

export default CitySearch;
