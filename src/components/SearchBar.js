import { useState } from "react";
import './SearchBar.css';
import logo from '../assest/pngwing.com.png';

const SearchBar = ({ onSubmit }) => {
    const [term,setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault(); //her submitte sayfayı yenilememesi için yapılır.
        onSubmit(term); //props olarak yollanacak değer
    };

    const handleChange = (event) => {
        setTerm(event.target.value); //input içerisinde ki değeri alma
    };

  return (
    <div className="search-bar">
        <img className="logo" alt="logo" src={logo} />
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Search" value={term} onChange={handleChange}/>
        </form>
    </div>
    )
}

export default SearchBar