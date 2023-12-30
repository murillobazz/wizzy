import Welcome from './Welcome';
import Card from './Card';
import Button from './Button';
import CampaignsList from './CampaignsList';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${import.meta.env.VITE_WIZZY_API}/api/campaigns`)
      .then(response => {
        setCampaigns(response.data);
        // console.log(campaigns);
        // console.log(response.data)
      })
      .catch(error => console.log(error))
    }
  
    async function getCampaigns() {
      await fetchData()
    }
    getCampaigns();
  }, [])
  
  return (
    <div>
      <div className="mx-auto p-3 max-w-screen-md flex flex-col justify-center">
        <Welcome username={'User'} greetings={'Got your spellbook ready?'}/>
        <div className="flex gap-6 items-start">
          {campaigns.length > 0 && <Card className="grow" campaign={campaigns[campaigns.length - 1]}/>}
          <Button></Button>
        </div>
        {campaigns.length > 0 && <CampaignsList campaigns={campaigns}></CampaignsList>}
      </div>
    </div>
  )
}

export default Home;