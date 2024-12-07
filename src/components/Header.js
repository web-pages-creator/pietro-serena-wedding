import './style/Header.css';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
/* IMAGES */

function Header() {
  return (
    <div className="Header w-full box-border flex flex-row items-center justify-between">
      <Link to='/'><div className='titolo'>Pietro e Serena</div></Link>
      <Drawer />
    </div>
  );
}

export default Header;
