import PropTypes from 'prop-types';

const Modal = ({ title, ingredients, instructions, servings }) => {
  return (
    <div className='border border-solid border-black max-w-md'>
      <div className='flex flex-col'>
        <span>{title}</span>
        <span>{ingredients}</span>
        <span>{instructions}</span>
        <span>{servings}</span>
      </div>
    </div>
  )
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
}

export default Modal;