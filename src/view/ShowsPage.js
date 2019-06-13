import React, { Component } from "react";
import {FetchShows}  from "./../services/FetchShows";
import ShowsGrid from "./ShowsGrid";
import Search from "./../components/Search";
import Preloader from '../components/Preloader/Preloader'

class ShowsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: [],
      searchShows: [],
      searchQuery: ""
    };
    this.searchAllShows = this.searchAllShows.bind(this);
  }

  componentDidMount() {
    FetchShows().then(allShows => {
      this.setState({
        shows: allShows,
        searchShows: allShows
      });
    });
  }

  searchAllShows = event => {
    let searchQuery = event.target.value;
    const result = this.state.shows.filter(show => {
      return (
        show.name.toUpperCase().includes(searchQuery.toUpperCase()) ||
        show.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    this.setState({
      searchShows: result
    });
  };

  render() {
    const { searchShows } = this.state;
  

    return (
      <>
        <Search searchAllShows={this.searchAllShows} />
        {!this.state.shows.length?
        <Preloader/>:<ShowsGrid shows={searchShows} />}
        
      </>
    );
  }
}

export default ShowsPage;
