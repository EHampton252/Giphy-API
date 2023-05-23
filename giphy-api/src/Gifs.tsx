import { useState, useEffect } from 'react';
import axios from 'axios';


// Define an interface to represent the structure of a Gif object that we expect to receive from the API 
interface Gif { 
    title: string; 
    images: { 
        downsized_medium: { url: string; }; 
    }; 
}

function Gifs() {
    // Define the state of the gifs with object type Gif[]
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [error, setError] = useState<boolean>(false);

    const apiKey = "Diz3BCTlmjU0h5WRhycLVoEZtmsdc9Gp";
    useEffect( () => {
        axios
        // Fetches the trending gifs from the Giphy API using API key
        .get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`)
        // Then: converts the response to JSON if using React FETCH API
        // .then((response) => response.json())
        // Then: takes the data and sets the gifs state to the data received from the API
        .then((data) => {
            setGifs(data.data);
        })
        // Catch: if there is an error, set the error state to true
        .catch(() => setError(true));
    }, [apiKey]); 
    //    ^ The apiKey is added as a dependency to the useEffect hook 
    //      so that the hook is only called when the apiKey changes

    return ( 
     <div>
        {gifs.map((gif) => (
        // For each gif in the gifs array (from the hook), display the gif via a map function
        // The line '(gif) => (' instantiates an anonymous function that takes a gif as a parameter
            (error) ? <p>{error}</p> :
            // If there is an error, display the error message
            <img src={gif.images.downsized_medium.url} alt={gif.title} />
            // src is set to the downsized_medium url of the gif from Gif interface
        ))}
     </div> 
     ); 
} 
 
export default Gifs;
