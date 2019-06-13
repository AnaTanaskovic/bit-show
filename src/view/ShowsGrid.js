import React from "react";
import { Link } from "react-router-dom";

const ShowsGrid = props => {
  return (
    <div key="grid" className="row">
      {props.shows.map(show => (
        <div key="card" className="col s12 m3 z-depth-5">
          <div className="card card-panel hoverable ">
            <div className="card-image">
              <img alt=" " src={show.image} />
              <a
                href=""
                className="btn-floating halfway-fab waves-effect waves-light red "
              >
                <i className="material-icons">{show.rating}</i>
              </a>
            </div>
            <div className="card-content">
              <span className="card-title center">{show.name}</span>
              <a class="waves-effect  red lighten-1 btn">
                <Link to={`/singleshow/${show.id}`}>See more...</Link>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowsGrid;
