// import { FaShoppingCart } from "react-icons/fa";

function AppMaketa() {
  return (
    <>
      <div className="px-16 py-8">
        <nav className="flex flex-row">
          <div className="flex ">
            <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt="Logo" />
          </div>
          <div className="flex gap-8">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contacts</p>
          </div>
          <div className="flex gap-8">
            <img
              src={process.env.PUBLIC_URL + "/assets/icon-cart.svg"}
              alt=""
              className=""
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/images/image-avatar.png"}
              alt=""
              className="w-8 h-8"
            />
          </div>
        </nav>
      </div>
    </>
  );
}

export default AppMaketa;
