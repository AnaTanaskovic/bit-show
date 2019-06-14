import React, { Component } from "react";
import { FetchSingleShow } from "./../services/FetchShows";
import Preloader from "../components/Preloader/Preloader";

class SingleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    FetchSingleShow(id).then(singleShow => {
      this.setState({
        show: singleShow
      });
      console.log(singleShow);
    });
  }
  castImages() {
    return !this.state.show.seasons ? (
      <Preloader />
    ) : (
      this.state.show.cast.map(single => (
        <img
          key={single.person.id}
          alt={single.person.name}
          title={single.person.name}
          src={single.person.image.medium}
        />
      ))
    );
  }

  seasonsList() {
    return !this.state.show.seasons ? (
      <Preloader />
    ) : (
      this.state.show.seasons.map(season => (
        <a key={season.id} href={season.url}>
          {season.number}
        </a>
      ))
    );
  }

  render() {
    const { show } = this.state;
    if (!show) {
      return null;
    }
    return show.length === 0 ? (
      <Preloader />
    ) : (
      <div className="row bg grey lighten-3">
        <div className="row">
          <div className="col s6 m6">
            <div className="card">
              <div class="card-image">
                <img src={this.state.show.image} />
              </div>
            </div>
          </div>
          <div className="col s6 m6">
            <h1 className="center">{this.state.show.name}</h1>
            <p className="">{this.state.show.summary}</p>
          </div>
        </div>
        <div className="row">
          <h3 className="center">Cast</h3>
          <p className="center">{this.castImages()}</p>
        </div>
        <div className="row">
          <h3 className="center">Seasons</h3>
          <h4 className="center black-text">{this.seasonsList()}</h4>
        </div>
      </div>
    );
  }
}

export default SingleShow;
