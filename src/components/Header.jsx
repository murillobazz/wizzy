import wizzyLogo from '../assets/wizzy-logo.svg';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  // TODO - Review this function... seems wrong.
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  }

  return (
    <div className="px-3 pt-3 flex justify-between items-center">
      <Link to="/">
        <img width="90" src={wizzyLogo} alt="Wizzy logo" />
      </Link>
      {
        currentPath !== '/login' && 
        <Link to="login">
          <button onClick={() => handleLogout()}>Sign out</button>
        </Link>
      }
    </div>
  )
}

export default Header;
