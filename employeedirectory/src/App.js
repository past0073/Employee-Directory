import React, {useState, useMemo, useEffect} from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios"

function App() {

    const [data, setData] = useState({
        image: "",
        name: "Amy",
        phone: "6122690708",
        email: "",
        DOB: "",
    });

  
    // const [data, setData] = useState([]);
  
    useEffect(() => {
      async function getData() {
        await axios
          .get("https://randomuser.me/api/?results=200&nat=us")
          .then((response) => {
            // check if the data is populated
            console.log(response.data.results);
            setData(response.data);
            // you tell it that you had the result
            setData(false);
          });
      }
      if (data) {
        // if the result is not ready so you make the axios call
        getData();
      }
    }, []);
  

    return (
        <div>
        <Header />
        <Search />
        <Table />


       
        </div>
    );
  } 
  
export default App;