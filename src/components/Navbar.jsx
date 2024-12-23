import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";
const NAVBAR_DATA = {
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
};

function Navbar({ handleClickHamburger, click }) {
  return (
    <div className="w-full h-26 absolute top-0 py-2 text-white z-20 flex justify-around max-lg:justify-between">
      <div className="w-auto flex justify-start items-center">
        <img
          src="/photos/new-logo1.png"
          className="w-18 h-14"
          alt="SharkCodes Logo"
        />
        <span className="flex font-bold text-2xl">
          <p className="text-cyan-500">Shark</p>
          <p>Codes</p>
        </span>
      </div>
      <div className="flex z-10 w-auto justify-center max-lg:hidden">
        <ul className="flex gap-12 items-center">
          {NAVBAR_DATA.links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-white font-bold text-xl justify-center hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center max-lg:hidden">
        <Button className="bg-black text-cyan-500 border-2 font-bold border-cyan-600">
          White mode
        </Button>
      </div>
      <div className="hidden max-lg:flex white items-center px-4">
        <button
          onClick={handleClickHamburger}
          className="focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <img src="icons/hamburger.png" alt="Menu" width={25} height={25} />
        </button>
      </div>
      <MobileMenu isOpen={click} onClose={handleClickHamburger} />
    </div>
  );
}

export default Navbar;
