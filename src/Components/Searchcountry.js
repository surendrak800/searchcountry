import React from "react";
import '../App.css';
import { useState, useEffect} from "react";
import countries from "./Countryname";

 const Searchcountry = () => {
    const [ searchItem, setSearchItem] = useState("");
    const [countryData] = useState(countries);
    const [ searchedcountries, setSearchedcountries] = useState([]);

const handlechange = (e) =>{
    e.preventDefault();
    setSearchItem(e.target.value);
};

useEffect(() =>{
    const delayFn = setTimeout(() => {
        const data = 
        searchItem !== ""
        ? countryData.filter((d) =>
        d.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())    
        )
        : [];
        setSearchedcountries(data);

        
    }, 1000);   
    return() => clearTimeout(delayFn);
},[searchItem]);

return(
    <>
    <div className="content">
        <div className="inputData">
            <input type="search"
            placeholder="Searching..."
            onChange={handlechange}
            value={searchItem}
            />
            {searchedcountries.map((d,i) => (
                <li key={i}>{d}</li>
            ))}
        </div>
    </div>
    </>

);





 };

 export default Searchcountry;