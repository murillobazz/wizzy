import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const New = () => {
  // const [numberOfCharacters, setNumberOfCharacters] = useState(1);
  const [submitStatus, setSubmitStatus] = useState("");
  const [loading, setLoading] = useState(false);

  let url = `${import.meta.env.VITE_WIZZY_API}/api/campaigns`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);

    data.characters.forEach(character => character.level = 1)

    await axios.post(url, data)
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
      <h1>New Campaign</h1>
      {/* TODO -> Export form to a component (?) */}
      <form className="flex flex-col justify-start" id="campaignForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-3 flex flex-col">
          <p className="text-xl mb-1">
            Title
          </p>
          <input className="form-input p-2 rounded" type="text" name="title" id="title" {...register("title", { required: 'This field is required' })} />
          <p className="text-red-500">{errors.title?.message}</p>
        </label>
        <label className="mb-3 flex flex-col">
          <p className="text-xl mb-1">
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
        {/* TODO -> Number of characters to limit the amount that goes with the form */}
        {/* <label className="mb-3 flex flex-col">
          <p className="text-lg mb-1">
            Number of characters
          </p>
          <select
            type="text"
            name="charactersNum"
            id="charactersNum"
            placeholder="Select the number of characters for your adventure"
            className="form-input p-2 rounded"
            onChange={setNumberOfCharacters}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <p className="text-red-500">{errors.charactersNum?.message}</p>
        </label> */}
        <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 mb-3">
          <details className="flex flex-col">
            <summary className="mb-1">
              Character 1
            </summary>
            <p className="text-red-500">{errors.characters && `${errors.characters[0].name?.message}`}</p>
            <input
              placeholder="Name"
              className="form-input p-2 rounded"
              type="text" name="character1"
              id="character1"
              {...register("characters.0.name", { required: 'Your campaign needs at least one character' })}
            />
            <p className="text-red-500">{errors.characters && `${errors.characters[0].class?.message}`}</p>
            <input placeholder="Class" className="form-input p-2 rounded" type="text" name="class1" id="class1" {...register("characters.0.class", { required: 'This field is required' })} />
            <p className="text-red-500">{errors.characters && `${errors.characters[0].race?.message}`}</p>
            <input placeholder="Race" className="form-input p-2 rounded" type="text" name="race1" id="race1" {...register("characters.0.race", { required: 'This field is required' })} />
          </details>
          <details className="flex flex-col">
            <summary className="mb-1">
              Character 2
            </summary>
            <input placeholder="Name" className="form-input p-2 rounded" type="text" name="character2" id="character2" {...register("characters.1.name")} />
            <input placeholder="Class" className="form-input p-2 rounded" type="text" name="class2" id="class2" {...register("characters.1.class")} />
            <input placeholder="Race" className="form-input p-2 rounded" type="text" name="race2" id="race2" {...register("characters.1.race")} />
          </details>
          <details className="flex flex-col">
            <summary className="mb-1">
              Character 3
            </summary>
            <input placeholder="Name" className="form-input p-2 rounded" type="text" name="character3" id="character3" {...register("characters.2.name")} />
            <input placeholder="Class" className="form-input p-2 rounded" type="text" name="class3" id="class3" {...register("characters.2.class")} />
            <input placeholder="Race" className="form-input p-2 rounded" type="text" name="race3" id="race3" {...register("characters.2.race")} />
          </details>
          <details className="flex flex-col">
            <summary className="mb-1">
              Character 4
            </summary>
            <input placeholder="Name" className="form-input p-2 rounded" type="text" name="character4" id="character4" {...register("characters.3.name")} />
            <input placeholder="Class" className="form-input p-2 rounded" type="text" name="class4" id="class4" {...register("characters.3.class")} />
            <input placeholder="Race" className="form-input p-2 rounded" type="text" name="race4" id="race4" {...register("characters.3.race")} />
          </details>

        </div>
        <input className="px-3 py-2 border rounded submit-btn border-amber-950" type="submit" value={loading ? 'Loading...' : 'Create'} disabled={loading} />
      </form>
      {submitStatus.length > 0 && <p className="text-lg">{submitStatus}</p>}
    </div>
  )
}

export default New;