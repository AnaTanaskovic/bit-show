export default class ShowInfo {
  constructor(id, name, genres, image, summary, embedded) {
    this.id = id;
    this.name = name;
    this.genres = genres;
    this.image = image;
    this.summary = summary;
    this.seasons = embedded.seasons;
    this.cast = embedded.cast;
  }
}
