import React from 'react';
import './search.css';
/* function Search (props) {
    return(
        <div></div>
    )
} */

const Search = (props) => (
    <form 
        action="" className="Search"
        onSubmit={props.handleSubmit}
    >
        <input 
            ref={props.setRef}
            type="text"
            className="Search-input"
            placeholder="Search item"
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search