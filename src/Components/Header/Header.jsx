import Favourite from "./Favourite/Favourite";
import FavouriteModal from "./FavouriteModal/FavouriteModal";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container mx-auto flex items-center justify-between py-6">
        {/* Logo */}
        <Logo />

        <div className="flex items-center gap-4 relative">
          {/* search */}
          <Search />

          {/* favorite */}
          <Favourite />

          {/* favorite modal */}
          <FavouriteModal />
        </div>
      </nav>
    </header>
  );
};

export default Header;
