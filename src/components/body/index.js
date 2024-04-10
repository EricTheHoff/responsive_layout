import stew from '../../assets/stew.jpg';
import noodles from '../../assets/noodles.jpg';
import curry from '../../assets/curry.jpg';

const meals = [
  {
    image: stew,
    title: 'Beef Stew',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    date: '04/09/2024',
    type: 'Easy'
  },
  {
    image: noodles,
    title: 'Noodles',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    date: '04/03/2024',
    type: 'Healthy',
  },
  {
    image: curry,
    title: 'Curry',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    date: '03/29/2024',
    type: 'Quick'
  },
]

export { meals }