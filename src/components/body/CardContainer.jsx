import Card from "./Card.jsx";
import { meals } from './index.js';

const CardContainer = () => {
  return (
    <div className='flex flex-col gap-4 items-start mt-8 mx-4 max-w-md h-72 overflow-y-auto md:mx-20 md:max-w-4xl md:h-72 md:gap-12 md:items-center lg:gap-4 lg:h-[34rem] lg:mx-0 lg:mr-12 xl:mt-16'>
      {meals.map((el, idx) => {
        return (
          <Card
            key={idx}
            image={el.image}
            title={el.title}
            subtitle={el.subtitle}
            date={el.date}
            type={el.type}
          />
        )
      })}
    </div>
  )
};

export default CardContainer;