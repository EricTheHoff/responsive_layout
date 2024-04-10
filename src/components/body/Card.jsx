import PropTypes from 'prop-types'

const Card = ({ image, title, subtitle, date, type }) => {
  return (
    <div className='flex flex-shrink-0 justify-between gap-4 bg-light-pink-100 w-full h-52 rounded-lg shadow-lg overflow-hidden relative cursor-pointer transition-transform hover:scale-90 md:h-64'>
      <div>
        <img className='object-cover h-full rounded-l-lg' src={image} alt='food'/>
      </div>
      <div className='flex flex-col items-end w-72 mr-2 font-arvo relative'>
        <span className='text-chocolate-100 mt-2 md:text-2xl'>{title}</span>
        <span className='text-sm text-chocolate-50 text-right mt-4 md:text-lg'>{subtitle}</span>
        <span className='absolute bottom-0 text-xs mb-2 md:text-base'>{date}</span>
      </div>
      <div className='absolute flex justify-center items-center bg-chocolate-100 rounded-full w-16 h-6 top-2 left-2 md:w-20 md:h-8'>
        <span className='text-2xs text-yellow-400 md:text-sm'>{type}</span>
      </div>
    </div>
  )
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;