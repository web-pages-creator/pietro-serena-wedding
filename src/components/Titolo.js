import './style/Titolo.css';
/* IMAGES */
import singleFlower from '../static/images/flower1.png'
import flower from '../static/images/flower2.png'

function Titolo() {

  return (
    <div className="Titolo flex flex-col items-center justify-start">
      <div className="logo-main">PIETRO<br/>SERENA</div>
      <div className="logo-conjunction">and</div>
      <div className='logo-subtitle'>❊ 26 APRILE 2025 ❊</div>
      <img src={flower} className='flower-left'></img>
      <img src={flower} className='flower-right'></img>
    </div>
  );
}

export default Titolo;
