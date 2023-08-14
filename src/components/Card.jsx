const Card = () => {
  return (
    <div className="py-3 px-5 mb-3 border border-amber-950 rounded-3xl max-w-md shadow-[4px_4px_0_0_rgba(66,23,10,1)]">
      <p className="text-xs font-bold text-neutral-500">Most recent campaign</p>
      <div className="mb-3">
        <h1 className="font-bold mb-0 leading-none">Campaign Name</h1>
        <p className="text-sm">A <b>Campaign Category</b> adventure starring:</p>
      </div>
      <div className="mb-3">
        <p>
          <b>Character name</b> - Lvl. X - Race <b>Class</b>
        </p>
        <p>
          <b>Character name</b> - Lvl. X - Race <b>Class</b>
        </p>
        <p>
          <b>Character name</b> - Lvl. X - Race <b>Class</b>
        </p>
        <p>
          <b>Character name</b> - Lvl. X - Race <b>Class</b>
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs font-bold text-neutral-500">X days ago</p>
        <a className="text-xs" href="#">Jump right back into it!</a>
      </div>
    </div>
  )
}

export default Card;