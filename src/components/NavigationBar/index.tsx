import Logo from "@components/Logo";
import { Link } from "react-router-dom";
import "./navigation.css";
import { BiSearch, BiBasket, BiUser } from "react-icons/bi";
import { useCallback, useContext, useEffect, useState } from "react";
import { ProductsCtx } from "@contexts/ProductsContext";
import Button from "@components/Button";
import { AuthCtx } from "@contexts/AuthContext";

interface Props {
  children: React.ReactNode;
}
const NavigationBar = ({ children }: Props) => {
  const {cart} = useContext(ProductsCtx);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const Authentication = useContext(AuthCtx)
  const toggleSearch = useCallback(() => {
    setSearchActive(prev => !prev);
  }, []);
  
  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-12 flex justify-around items-center bg-white ${!searchActive && 'bg-opacity-80'} transition-all z-50`}>
        <Logo />
        {!searchActive ? <ul className="flex gap-10 text-sm menu items-center">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/womens">WOMENS</Link>
          </li>
          <li>
            <Link to="/mens">MENS</Link>
          </li>
        </ul> :
        <div className="w-1/4 select-none flex relative rounded-3xl overflow-hidden">
          <input className="bg-gray-50 w-full outline-none px-6 text-sm py-2" placeholder="Shop For Men & Women" autoFocus />
          <Button className="absolute top-0 right-0 h-9 p-0 w-12 flex items-center justify-center">
            <BiSearch />
          </Button>
        </div>}
        <ul className="flex gap-5 items-center">
          <li>
            <span className="cursor-pointer block pr-0" onClick={toggleSearch} tabIndex={5}>
              <BiSearch color={searchActive ? '#e47070' : '#000'} />
            </span>
          </li>
          <li className="relative">
            <Link to="/cart">
              <BiBasket />
              {cart.length !== 0 ? <span className="absolute text-xs w-4 h-4 top-[-12px] right-[-10px] bg-[#e47070] rounded-full text-white flex items-center justify-center text-[8px]">{cart.length}</span> : null}
            </Link>
          </li>
          <li>
            <Link to={Authentication?.state === "authenticated" ? '/profile' : '/login'}>
              <BiUser />
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-12">{children}</div>
    </>
  );
};

export default NavigationBar;
