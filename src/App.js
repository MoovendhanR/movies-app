import { useEffect, useState } from "react";
import "./app.css"
import MovieCard from "./MovieCard";


const API_URL="http://www.omdbapi.com/?apikey=c949d8c7"
function App() {
 
  const [movies,setMovies]=useState([])
  const [searchItem,setSearchItem]=useState('')

  const searchMovie = async(title)=>{
    const res = await fetch(`${API_URL}&s=${title}`)
    const data =await res.json()
    setMovies(data.Search)
  }
  console.log(movies) 

   useEffect(() => {
   searchMovie("hello")
   },[])
   

  return (
    <div className="app">
      <h1>Movies World</h1>
      <div className="search">
           <input 
           placeholder="Search movie here.."
           value={searchItem}
           onChange={(e)=>setSearchItem(e.target.value)}
           />
           <img
           src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
           alt="search"
           onClick={()=>{searchMovie(searchItem)}}
           />
      </div>
      {
        movies?.length > 0 ?(
          <div className="container">
            {
              movies.map((movie)=>(
                <MovieCard movie={movie}/>
              ))

            }
           </div>
        ):(
          <div className="empty">
          
            <h2 > NO MOVIES FOUND  🙅 🚫</h2>
            <br/>
          </div>
        )
      }
     
    </div>
  );
}

export default App;
