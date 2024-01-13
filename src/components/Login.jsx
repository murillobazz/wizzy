import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus) {
      navigate('/');
    }
  }, [loginStatus])

  let url = `${import.meta.env.VITE_WIZZY_API}/api/login`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setLoadingState(true);

    try {
      const response = await axios.post(url, data);
      Cookies.set('token', response.data.token, { expires: 7 });
      setLoginStatus(true);
    } catch(error) {
      console.log(error);
    }

    setLoadingState(false);
  }

  return (
    <div className="mx-auto p-3 max-w-screen-md flex flex-col justify-center">
      <form className="flex flex-col justify-start" id="campaignForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-3 flex flex-col">
          <p className="text-xl mb-1">
            Username
          </p>
          <input className="form-input p-2 rounded" type="text" name="username" id="username" {...register("username", { required: 'This field is required' })} />
          <p className="text-red-500">{errors.username?.message}</p>
        </label>
        <label className="mb-3 flex flex-col">
          <p className="text-xl mb-1">
            Password
          </p>
          <input className="form-input p-2 rounded" type="password" name="password" id="password" {...register("password", { required: 'This field is required' })} />
          <p className="text-red-500">{errors.password?.message}</p>
        </label>
        <input className="px-3 py-2 border rounded submit-btn border-amber-950" type="submit" value={loadingState ? 'Loading...' : 'Login'} disabled={loadingState} />
      </form>
    </div>
  )
}

export default Login;