import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import './Movies.css';
class Movies extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="movies">
                {this.props.movies.map((movieobject) =>{
                   return <Movie  key={movieobject.id} movie={movieobject}></Movie>
                })
                }
            </div>
         );
    }
}
 
export default Movies;