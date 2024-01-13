import propTypes from 'prop-types';

const Card = ({campaign}) => {

  return (
    <div className="py-3 px-5 mb-5 border border-amber-950 rounded-3xl max-w-lg shadow-[4px_4px_0_0_rgba(66,23,10,1)]">
      <p className="text-xs font-bold text-neutral-500 mb-1">Most recent campaign</p>
      <div className="mb-3">
        <h1 className="font-bold mb-1 leading-none">{campaign.title}</h1>
        <p className="text-sm">A <b>{campaign.category}</b> adventure starring:</p>
      </div>
      <div className="mb-3">
        {campaign.characters.map(character => (
          <p className="text-justify" key={character.name}><b>{character.name}</b> - Level {character.level} - {character.race} <b>{character.class}</b></p>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs font-bold text-neutral-500">Started {campaign.createdAt}</p>
        {/* TODO */}
        <a className="text-xs" href="#">Jump right back into it!</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  campaign: propTypes.object,
  character: propTypes.object,
}

export default Card;