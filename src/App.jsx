// git commit -m "first commit"
// git branch -M main
// git add .
// git push -u origin main

// App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Header from "./component/header";
import MovieList from "./component/movieList";
import Category from "./component/category";
import axios from "axios";
import "./app.css";
import LanguageCAT from "./component/LanguageCAT";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        const sortedData = response.data.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        setData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Header searchData={data} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/movie/:id" element={<Category />} />
        <Route path="/language/:language" element={<LanguageCAT data={data}/>} />
        {/* <Route path="/" */}
      </Routes>
    </Router>
  );
}

// Home component to render Dashboard and MovieList
function Home({ data }) {
  return (
    <div>
      <div style={{ margin: "20px" }}>

      </div>
      <Dashboard data={data} />
      <MovieList data={data} />
      {/* <TopTamil data={data}/> */}
    </div>
  );
}

export default App;
