import Welcome from './Welcome';
import Card from './Card';
import Button from './Button';
import CampaignsList from './CampaignsList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loading from './Loading';


const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const token = Cookies.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_WIZZY_API}/api/campaigns`, { headers: {'Authorization': `Bearer ${token}`} })
        setCampaigns(response.data);
      } catch(error) {
        console.log(error);
      }
    }

    async function getCampaigns() {
      setLoadingState(true);
      await fetchData()
      setLoadingState(false);
    }

    getCampaigns();
  }, [])
  
  return (
    <div>
      <div className="mx-auto p-3 max-w-screen-md flex flex-col justify-center">
        <Welcome username={loadingState ? "..." : campaigns[0]?.user.username} greetings={'Got your spellbook ready?'}/>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 items-center sm:items-start">
          { loadingState ? <Loading /> : campaigns.length > 0 && <Card className="grow" campaign={campaigns[campaigns.length - 1]} /> }
          <Button></Button>
        </div>
        { loadingState ? <Loading /> : campaigns.length > 0 && <CampaignsList campaigns={campaigns}></CampaignsList> }
      </div>
    </div>
  )
}

export default Home;