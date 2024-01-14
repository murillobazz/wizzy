import propTypes from 'prop-types';
import ListItem from './ListItem';


const CampaignsList = ({campaigns, onClick}) => {
  if (campaigns && campaigns.length > 0) {
    return (
      <>
        <p className="text-2xl mb-2">Your adventures</p>
        {campaigns.map(campaign => (
          <ListItem
            key={campaign.id}
            title={campaign.title}
            category={campaign.category}
            onClick={() => onClick(campaign.id)}
          >
          </ListItem>
        ))}
      </>
    )
  } else {
    return (
      <>
        <p className="text-2xl mb-2">Your adventures</p>
        <p>No campaigns yet...</p>
      </>
    )
  }
}

CampaignsList.propTypes = {
  campaigns: propTypes.array,
  onClick: propTypes.func,
}

export default CampaignsList;