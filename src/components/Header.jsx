import wizzyLogo from '../assets/wizzy-logo.svg';

const Header = () => {

  return (
    <div className="mx-6 my-3 flex justify-between items-center">
      <img src={wizzyLogo} alt="Wizzy logo" />
      <a href="#" className="">Sign out</a>
    </div>
  )
}

export default Header;
