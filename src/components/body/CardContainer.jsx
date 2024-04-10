import Card from "./Card.jsx";

const CardContainer = () => {
  return (
    <div className='flex flex-col gap-4 items-start mt-8 mx-4 max-w-md h-72 overflow-y-auto border-2 border-black md:mx-20 md:max-w-4xl md:h-1/2 md:gap-12 md:items-center'>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
};

export default CardContainer;