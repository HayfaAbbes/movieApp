import { useState } from 'react';
import {moviesData} from './data';
import MovieList from './componets/MovieList';
import "./App.css";
import Search from './componets/Search';
import AddMovie from './componets/AddMovie';

function App(){
    const [movies,setMovies]=useState(moviesData);
    const [text,setText]=useState('');
    const [rating,setRating]=useState(1)
    /*adding movies*/
    const handleAdd =(newMovie) => setMovies([...movies,newMovie]);
    //handletext
    const handletext=(e) => setText(e.target.value)
    // handle rating
    const handleRating =(x) =>setRating(x)

return(
    
    <div className='App'>
        <Search rating ={rating} 
        text={text} 
        handletext={handletext}
        handleRating={handleRating}
        />
        <MovieList 
        movies={movies.filter((el) =>
        el.name.toLowerCase().includes(text.toLowerCase())&&
        el.rating >= rating
        )}
        />
        <AddMovie add={handleAdd}/>
    </div>
)
}
export default App;