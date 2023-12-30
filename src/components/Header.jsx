import wizzyLogo from '../assets/wizzy-logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className="px-3 pt-3 flex justify-between items-center">
      <Link to="/">
        <img width="90" src={wizzyLogo} alt="Wizzy logo" />
      </Link>
      <a href="#" className="">Sign out</a>
    </div>
  )
}

export default Header;
