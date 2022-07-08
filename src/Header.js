import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

  const handleAuthentication = async function () {
    if (user) {
      await auth.signOut();
    }
  };

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png'></img>

      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type="text" ></input>
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        {/* ONLY REDIRECT WHEN THERE'S NO USER */}
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>{`Sign ${user ? 'Out' : 'In'}`}</span>
          </div>
        </Link>
        <Link to='/orders' >
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'> & Orders</span>
          </div>

        </Link>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'> Prime</span>
        </div>

        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>

        </Link>
      </div>
    </div >


  );
}

export default Header;