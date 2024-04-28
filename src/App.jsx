import { useEffect, useState } from "react";
import Dashboard from "./component/Dashboard"
import Header from "./component/header"
import MovieList from "./component/movieList";
import axios from "axios";
import "./app.css"

function App() {

const [data , setData] = useState(null);


useEffect(()=>{
  const fetechData = async()=>{
    try {
      const response = await axios.get("http://localhost:8000/");
      const sortedData = response.data.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      console.log(sortedData);
      setData(sortedData);
    } catch (error) {
      console.log(error);
    }
  };
  fetechData()
},[])


  return (
    <>
    <Header searchData={data} />
    <div style={{ margin: "20px" }}>
        <h2>Data Table</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Language</th>
              <th>Release Date</th>
              <th>Rating</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.movieName}</td>
                  <td>{movie.language}</td>
                  <td>{movie.releaseDate}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.genre}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Dashboard data={data} set={setData}/>
      <MovieList data={data} setData={setData}/>
    </>
  )
}

export default App
