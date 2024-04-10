import stew from '../../assets/stew.jpg'

const Card = () => {
  return (
    <div className='flex flex-shrink-0 gap-4 bg-light-pink-100 w-full h-52 rounded-lg shadow-lg overflow-hidden relative'>
      <div>
        <img className='object-cover h-full rounded-l-lg' src={stew} alt='stew'/>
      </div>
      <div className='flex flex-col items-end w-72 mr-2 font-arvo relative'>
        <span className='text-chocolate-100 mt-2'>Beef Stew</span>
        <span className='text-sm text-chocolate-50 text-right mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</span>
        <span className='absolute bottom-0 text-xs mb-2'>04/09/2024</span>
      </div>
      <div className='absolute flex justify-center items-center bg-chocolate-100 rounded-full w-16 h-6 top-2 left-2'>
        <span className='text-2xs text-yellow-400'>Healthy</span>
      </div>
    </div>
  )
};

export default Card;