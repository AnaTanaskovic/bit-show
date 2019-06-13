import React from 'react'

const Search = (props) => {
    return (
        <form className="col s12">
        <div className="input-field col s12">
            <i className="material-icons prefix"></i>
            <input onChange={props.searchAllShows} id="search" type="search" className="validate" placeholder="Search shows" />
        </div>
    </form>

    )
}

export default Search