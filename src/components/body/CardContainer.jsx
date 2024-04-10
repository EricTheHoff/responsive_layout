import Card from "./Card.jsx";

const CardContainer = () => {
  return (
    <div className='flex flex-col gap-4 items-start mt-8 mx-4 max-w-md w-92 h-72 overflow-y-auto'>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
};

export default CardContainer;