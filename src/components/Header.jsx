import { GiHamburgerMenu } from 'react-icons/gi'

const Header = ({ toggleNav }) => {
  return (
    <header className="bg-[#fff] top-0 sticky md:hidden p-4 w-full flex gap-2 items-center">
      <button type="button" onClick={toggleNav}><GiHamburgerMenu /></button>
      <h1>Aisensy</h1>
    </header>
  );
}

export default Header
