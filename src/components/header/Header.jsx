const Header = () => {
  return (
    <div className='flex flex-col items-center mt-8 text-center font-arvo text-chocolate-100'>
      <h1 className='text-4xl'>{`eric's`} <span className='font-pacifico text-chocolate-100 uppercase text-3xl'>food</span> blog</h1>
      <h2 className='my-2'>delicious recipes and stories</h2>
      <p className='text-chocolate-50 mx-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <span className='mt-6'>find your new favorite recipe!</span>
    </div>
  )
};

export default Header;