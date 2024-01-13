import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link
      to="/new"
      className="flex custom-btn py-3 px-5 mb-5 border border-amber-950 rounded-3xl max-w-xs shadow-[4px_4px_0_0_rgba(66,23,10,1)]"
    >
      <div className="mb-3 text-left">
        <p className="text-xs font-bold text-neutral-500 mb-1">Looking for a fresh start? Click here!</p>
        <h1 className="font-bold mb-1 leading-none">New Campaign</h1>
      </div>
    </Link>
  )
}

export default Button;