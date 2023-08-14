import propTypes from 'prop-types';

const Welcome = ({username, greetings}) => {
  return (
    <>
      <h1 className="text-3xl mb-3">
        Hey, <b>{username}</b>! <br />
        {greetings}
      </h1>
    </>
  )
}

Welcome.propTypes = {
  username: propTypes.string,
  greetings: propTypes.string
}

export default Welcome;