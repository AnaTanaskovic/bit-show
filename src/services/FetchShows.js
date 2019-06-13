import ShowsData from "../models/ShowsData";
import ShowInfo from '../models/ShowInfo'



const FetchShows = () =>
  fetch("http://api.tvmaze.com/shows")
    .then(res => {
      return res.json();
    }).then(data => {
      const allShows = data.map( shows =>
            new ShowsData(
               shows.id,
               shows.url, 
               shows.name,
                shows.genres,
                shows.status,
                shows.rating,
                shows.image.medium,
                shows.summary))
        .filter(shows => shows.rating > 8)
        .splice(0, 51);
      return allShows;
    });

  let FetchSingleShow =(id) => 
   fetch ("http://api.tvmaze.com/shows" + "/" + id + "?embed=cast")
   .then(res=>{
     return res.json()
   }).then((singleShow) => {
    console.log(singleShow)
    return singleShow
})

    

   
export   {FetchShows,
          FetchSingleShow
}
        

