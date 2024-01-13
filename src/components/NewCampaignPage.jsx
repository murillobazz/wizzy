import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CharacterInput from './CharacterInput';

const NewCampaignPage = () => {
  const [numberOfInputs, setNumberOfInputs] = useState([1]);
  const [numberOfCharacters, setNumberOfCharacters] = useState(1);
  const [submitStatus, setSubmitStatus] = useState("");
  const [loading, setLoading] = useState(false);

  let url = `${import.meta.env.VITE_WIZZY_API}/api/campaigns`;
  const token = Cookies.get('token');
  const navigate = useNavigate();

  const handleNumberOfInputs = (value) => {
    if (value === 1) {
      setNumberOfInputs(() => [1]);
      return;
    }

    setNumberOfInputs([]);
    
    for (let i = 0; i < value; i++) {
      setNumberOfInputs((prevNumber) => [...prevNumber, i + 1]);
    }

    console.log(numberOfInputs);
  }

  const handleNumberOfCharacters = (event) => {
    setNumberOfCharacters(Number(event.target.value))
  }

  useEffect(() => {
    if (submitStatus === 'Campaign created!') {
      navigate('/');
    }

    handleNumberOfInputs(numberOfCharacters);
  }, [submitStatus, numberOfCharacters])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    let { title, category, characters } = data;

    characters.forEach(character => character.level = 1);
    // TODO -> Understand why characters array acquires a null character at index zero.
    // The line below exists because the first element on the array is null/empty and I don't know where it is coming from.
    characters.shift();
    console.log(characters);

    await axios.post(url, { title, category, characters }, { headers: {'Authorization': `Bearer ${token}`} })
      .then(response => {
        console.log(response);
        setSubmitStatus("Campaign created!")
      })
      .catch(error => {
        console.log(error);
        setSubmitStatus("Something went wrong!")
      })

    setLoading(false);
  };

  return (
    <div className="mx-auto p-3 max-w-screen-sm flex flex-col justify-center">
      <h1 className="font-bold">New Campaign</h1>
      {/* TODO -> Export form to a component (?) */}
      <form className="flex flex-col justify-start" id="campaignForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-3 flex flex-col">
          <p className="text-xl mb-1 font-semibold">
            Title
          </p>
          <input className="form-input p-2 rounded" type="text" name="title" id="title" {...register("title", { required: 'This field is required' })} />
          <p className="text-red-500">{errors.title?.message}</p>
        </label>
        <label className="mb-3 flex flex-col">
          <p className="text-xl mb-1 font-semibold">
            Category
          </p>
          <select
            type="text"
            name="category"
            id="category"
            placeholder="Select a category for your adventure"
            className="form-input p-2 rounded"
            {...register("category", { required: 'This field is required' })}
          >
            <option value="Dungeons & Dragons">Dungeons & Dragons</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Wild West">Wild West</option>
            <option value="Zombie Apocalypse">Zombie Apocalypse</option>
            <option value="Superhero">Superhero</option>
          </select>
          <p className="text-red-500">{errors.category?.message}</p>
        </label>
        <p className="text-xl mb-1 font-semibold">Characters</p>
        <hr className='mb-2' />
        <label className="mb-3 flex flex-col">
          <p className="text-lg mb-1">
            Quantity
          </p>
          <select
            type="text"
            name="charactersNum"
            id="charactersNum"
            placeholder="Select the number of characters for your adventure"
            className="form-input p-2 rounded w-24"
            onChange={handleNumberOfCharacters}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <p className="text-red-500">{errors.charactersNum?.message}</p>
        </label>
        <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 mb-3">
          { numberOfInputs.length > 0 && numberOfInputs.map((index) => 
            <CharacterInput key={index} characterNumber={index} register={register} errors={errors}></CharacterInput>
          ) }
        </div>
        <input className="px-3 py-2 border rounded submit-btn border-amber-950" type="submit" value={loading ? 'Loading...' : 'Create'} disabled={loading} />
      </form>
      {submitStatus.length > 0 && <p className="text-lg">{submitStatus}</p>}
    </div>
  )
}

export default NewCampaignPage;