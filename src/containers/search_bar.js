import React, {Component} from "react";

export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {searchTerm: ""};

    this.onInputChange= this.onInputChange.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    //searchTerm += event.target.value;
    this.setState({searchTerm: event.target.value});
  }

  //Don't submit the form
  onFormSubmit(event){
    event.preventDefault();

    // We need to go and fetch weather data
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast for your favourite cities"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-warning">Submit</button>
        </span>
      </form>
    );
  }
}
