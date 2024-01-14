import propTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <div className="flex justify-between items-center py-2 px-8 mb-2 border border-amber-950 rounded-full max-w-xl shadow-[1px_2px_0_0_rgba(66,23,10,1)]">
      <div className="flex flex-col">
        <p className="text-lg"><b>{props.title}</b></p>
        <p className="text-xs">A <b>{props.category}</b> adventure</p>
      </div>
      <button><p onClick={props.onClick} className="font-bold text-red-700">x</p></button>
    </div>
  )
}


ListItem.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  category: propTypes.string,
  onClick: propTypes.func
}

export default ListItem;
