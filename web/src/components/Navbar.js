import buttonIcon from '../images/botao.png';
import '../styles/navbar.css';

function NavBar({ action }) {
  return (
    <div className="navbar">
      <h3>GAME</h3>
      <button type="button" onClick={() => action()}>
        <img src={buttonIcon} alt="Turn on/off symbol" />
      </button>
    </div>
  );
}

export default NavBar;