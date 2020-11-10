import buttonIcon from '../images/botao.png';
import '../styles/navbar.css';

function NavBar() {
  return (
    <div className="navbar">
      <h3>GAME</h3>
      <button type="button">
      <img src={buttonIcon} alt="Turn on/off symbol" width="16" height="16" />
      </button>
    </div>
  );
}

export default NavBar;