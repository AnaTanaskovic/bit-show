
export default class ShowsData {
    constructor(id, url, name, genres,status, rating, image, summary) {
        this.id = id
        this.url = url
        this.name= name
        this.genres= genres
        this.status= status
        this.rating=rating.average
        this.image=image
        this.summary = summary
    }
}
