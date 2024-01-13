import { Link } from 'react-router-dom';

const NewCampaignButton = () => {
  return (
    <Link
      to="/new"
      className="flex custom-btn py-3 px-5 mb-5 border border-amber-950 rounded-3xl sm:w-2/5 shadow-[4px_4px_0_0_rgba(66,23,10,1)] w-full"
    >
      <div className="mb-3 text-left">
        <p className="text-xs font-bold text-neutral-500 mb-1">Looking for a fresh start? Click here!</p>
        <h1 className="font-bold mb-1 leading-none">New Campaign</h1>
      </div>
    </Link>
  )
}

export default NewCampaignButton;