import React, { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

interface SearchProps {
  onSearch: (city: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchedCity, setSearchedCity] = useState('');

  const handleSearch = () => {
    if (searchedCity) {
      onSearch(searchedCity);
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.code === "Enter") {
    handleSearch();
    }
  };

  return (
    <div className='maxWidth mb-20 flex mx-auto'>
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={searchedCity}
        onChange={(e) => setSearchedCity(e.target.value)}        
        onKeyDown={handleKeyDown}
        className="w-full bg-zinc-200 text-zinc-700 h-10 px-5 pr-10 rounded-md text-sm md:text-base focus:outline-none"
      />
      <button 
        onClick={handleSearch}
        className="ml-2 text-2xl bg-zinc-200 text-zinc-500 px-2.5 h-10 rounded-md transition-all duration-150 sm:hover:pr-5 sm:hover:text-zinc-700"><RiSearch2Line /></button>
    </div>
  );
}

export default Search;
