import React, { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { AiOutlineLoading } from 'react-icons/ai'

interface SearchProps {
  onSearch: (city: string) => Promise<void>;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchedCity, setSearchedCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (searchedCity) {
      setIsLoading(true);
      
      onSearch(searchedCity)
        .then(() => {
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Ocorreu um erro:", error);
          setIsLoading(false);
        });
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
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
        className="ml-2 text-2xl bg-zinc-200 text-zinc-500 px-2.5 h-10 rounded-md transition-all duration-150 sm:hover:pr-5 sm:hover:text-zinc-700">
          {isLoading ? (
          <AiOutlineLoading className="animate-spin" />
        ) : (
          <RiSearch2Line />
        )}
        </button>
    </div>
  );
}

export default Search;
