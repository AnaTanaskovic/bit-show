import ShowsData from "../models/ShowsData";
import ShowInfo from "../models/ShowInfo";

const FetchShows = () =>
  fetch("http://api.tvmaze.com/shows")
    .then(res => {
      return res.json();
    })
    .then(data => {
      const allShows = data
        .map(
          shows =>
            new ShowsData(
              shows.id,
              shows.url,
              shows.name,
              shows.genres,
              shows.status,
              shows.rating,
              shows.image.medium,
              shows.summary
            )
        )
        .filter(shows => shows.rating > 8)
        .splice(0, 51);
      return allShows;
    });

const FetchSingleShow = id => {
  return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(response => response.json())
    .then(
      singleShow =>
        new ShowInfo(
          singleShow.id,
          singleShow.name,
          singleShow.genres,
          singleShow.image.original,
          singleShow.summary,
          singleShow._embedded
        )
    );
};

export { FetchShows, FetchSingleShow };
