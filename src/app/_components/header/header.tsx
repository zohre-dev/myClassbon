import Image from "next/image";
import Logo from "../../../../public/images/logo.svg";
import TopNavigation from "./top-navigation";

const Header = () => {
  return (
    <header className="border-b dark:border-base-content ">
      <div className="container flex items-center justify-between">
        <div>
          <Image src={Logo} width={100} height={36} alt="logo" />
        </div>
        <div>
          <TopNavigation />
        </div>
        <div>3</div>
      </div>
    </header>
  );
};
export default Header;
