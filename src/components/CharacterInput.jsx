import propTypes from 'prop-types';

const CharacterInput = ({ characterNumber, register, errors }) => {


  return (
    <details className="flex flex-col">
      <summary className="mb-1">
        Character { characterNumber }
      </summary>
      <p className="text-red-500">{errors.characters && `${errors.characters[characterNumber].name?.message}`}</p>
      <input
        placeholder="Name"
        className="form-input p-2 rounded"
        type="text" name={`character${characterNumber}`}
        id={`character${characterNumber}`}
        {...register(`characters.${characterNumber}.name`, { required: 'This field is required' })}
      />
      <p className="text-red-500">{errors.characters && `${errors.characters[characterNumber].class?.message}`}</p>
      <input
        placeholder="Class" className="form-input p-2 rounded" type="text"
        name={`class${characterNumber}`}
        id={`class${characterNumber}`}
        {...register(`characters.${characterNumber}.class`, { required: 'This field is required' })}
      />
      <p className="text-red-500">{errors.characters && `${errors.characters[characterNumber].race?.message}`}</p>
      <input
        placeholder="Race" className="form-input p-2 rounded" type="text"
        name={`race${characterNumber}`}
        id={`race${characterNumber}`}
        {...register(`characters.${characterNumber}.race`, { required: 'This field is required' })}
      />
    </details>
  )
}

CharacterInput.propTypes = {
  characterNumber: propTypes.number,
  register: propTypes.func,
  errors: propTypes.object
}

export default CharacterInput;