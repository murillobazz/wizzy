import Card from './Card';
import Welcome from './Welcome';
import Loading from './Loading';
import NewCampaignButton from './NewCampaignButton';
import CampaignsList from './CampaignsList';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [campaignToDelete, setCampaignToDelete] = useState({});
  const token = Cookies.get('token');
  const navigate = useNavigate();
  const modal = document.getElementById('modal');
  
  async function getCampaigns() {
    setLoadingState(prevState => !prevState);
    await fetchData()
    setLoadingState(prevState => !prevState);
  }

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    getCampaigns();
  }, [])

  const toggleModal = () => modal.open ? modal.close() : modal.showModal(); 

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_WIZZY_API}/api/campaigns`, { headers: {'Authorization': `Bearer ${token}`} })
      setCampaigns(response.data);
    } catch(error) {
      console.log(error);
    }
  }

  const deleteCampaign = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_WIZZY_API}/api/campaigns/${id}`, { headers: {'Authorization': `Bearer ${token}`} });
      console.log(response)
    } catch(error) {
      console.log(error);
    }
  }

  const handleDeleteModal = (id) => {
    let campaign = campaigns.find(campaign => campaign.id === id); 
    setCampaignToDelete({...campaign});
    toggleModal();
  }
  
  const handleDeleteCampaign = async (id) => {
    await deleteCampaign(id);
    toggleModal();
    await getCampaigns();
  }

  return (
    <div>
      {/* TODO -> Finish modal styling */}
      <dialog id="modal" className="py-3 px-5 max-w-md h-48 border border-amber-950 bg-[#F0DED3] rounded-lg">
        <h3 className="text-center mb-5">Are you sure you want to delete the <b>{`${campaignToDelete.title}`}</b> campaign?</h3>
        <div className="flex justify-between">
          <button onClick={() => handleDeleteCampaign(campaignToDelete.id)}>
            <p className="text-red-600 font-bold">Delete</p>
          </button>
          <button onClick={toggleModal}>
            <p className="font-bold">Cancel</p>
          </button>
        </div>
      </dialog>
      <div className="mx-auto p-3 max-w-screen-md flex flex-col justify-center fade-in">
        <Welcome username={loadingState ? "..." : campaigns[0]?.user.username} greetings={'Got your spellbook ready?'}/>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 items-center sm:items-start">
          { loadingState ? <Loading /> : campaigns.length > 0 && <Card className="grow" campaign={campaigns[campaigns.length - 1]} /> }
          <NewCampaignButton></NewCampaignButton>
        </div>
        { loadingState ? <Loading /> : campaigns.length > 0 && <CampaignsList campaigns={campaigns} onClick={(id) => handleDeleteModal(id)}></CampaignsList> }
      </div>
    </div>
  )
}

export default Home;