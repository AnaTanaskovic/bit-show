import  React, {Component} from 'react'
import {FetchSingleShow} from './../services/FetchShows'

class SingleShow extends Component {
    constructor (props) {
        super (props)
        this.state= {
            show: null
                }
    }
componentDidMount () {
    const id = this.props.match.params.id
    FetchSingleShow(id).then(singleShow => {
        this.setState({
          show:singleShow
        });
        console.log(singleShow)
      });
    }


    render () {
        const {show} =this.state
        if (!show) {
            return null
        }
        return (
            <>
            <p>{this.state.show.name}</p>
            <img src={this.state.show.image.medium}/>
            </>
        )
    }

}

export default SingleShow