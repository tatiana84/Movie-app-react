import React, { useState } from 'react';

//import { getMovies } from '../App';

const searchAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const Search = (props) => {
    const [searchItem, setSearchItem] = useState('');
    /*const [movies, setMovies] = useState('');*/

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(searchItem){
            props.getMovies(searchAPI + searchItem);
        }
        fetch(searchAPI + searchItem)
            .then((resp) => resp.json())
            .then((data) => {
                props.setMovies(data.results);
            }
        );
    };

    const handleOnChange = (e) => {
        setSearchItem(e.target.value);
    };
    return (      
        <form onSubmit={handleOnSubmit}>
            <input 
                className="search" 
                type="text" 
                placeholder="search..."
                value={searchItem}
                onChange = {handleOnChange}
            />
        </form>
      
    )
}

export default Search;