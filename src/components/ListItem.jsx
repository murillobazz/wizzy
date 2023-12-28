import propTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <div className='py-3 px-5 mb-2 border border-amber-950 rounded-3xl max-w-xl shadow-[1px_2px_0_0_rgba(66,23,10,1)]'>
      <p className='text-lg'>{props.title}</p>
      <p className='text-xs'>A <b>{props.category}</b> adventure</p>
    </div>
  )
}


ListItem.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  category: propTypes.string,
}

export default ListItem;
