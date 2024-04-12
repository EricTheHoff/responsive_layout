import { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [searchString, setSearchString] = useState('');

  const handleSubmit = async () => {
    await axios.post(`/api/find-recipe`, { search: searchString, })
    .then((res) => {
      const recipes = res.data.recipes;

      console.log(recipes[Math.floor(Math.random() * recipes.length)]);
    })
    .catch((error) => {
      console.error(error);
    })
    return;
  };

  return (
    <div className='flex flex-col items-center mt-8 text-center font-arvo text-chocolate-100 lg:items-start lg:text-left lg:ml-12 xl:mt-16'>
      <h1 className='text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl'>{`eric's`} <span className='font-pacifico text-chocolate-100 uppercase text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl'>food</span> blog</h1>
      <h2 className='my-2 md:my-6 md:text-2xl xl:text-3xl 2xl:text-4xl'>delicious recipes and stories</h2>
      <p className='text-chocolate-50 mx-4 text-sm max-w-md md:mx-0 md:text-xl md:max-w-lg lg:max-w-xl xl:max-w-2xl xl:text-2xl 2xl:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <span className='mt-6 md:mt-12 md:text-2xl xl:mt-16 xl:text-3xl 2xl:text-4xl'>find your new favorite recipe!</span>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <input type='search' onChange={(e) => setSearchString(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  ) 
};

export default Header;