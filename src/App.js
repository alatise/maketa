import React, { useState } from "react";
import { Products } from "./components/productData";
import { LightboxGallery } from "./components/lightbox";
import { FaBars, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import CartModal from "./components/cartModal";

function AppMaketa() {
  const [isNavModal, setIsNavModal] = useState(false);
  const [isActiveNav, setIsActiveNav] = useState("women");

  const toggleNav = (value) => {
    setIsActiveNav(value);
    setIsNavModal(false);
  };

  const [cartModal, setCartModal] = useState(false);
  const [showItemCount, setShowItemCount] = useState(false);

  const toggleCartModal = () => {
    setCartModal(!cartModal);
    setShowItemCount(true);
  };

  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);

    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    setShowItemCount(true);
  };

  return (
    <div className="w-full md:px-36 md:py-8 ">
      <div className="flex justify-between items-center px-7 mt-6 md:px-0 md:mt-0 ">
        <div className="flex items-center  ">
          <div className="flex  gap-4">
            <FaBars
              size={20}
              className="text-[#838282]  md:hidden"
              onClick={() => setIsNavModal(true)}
            />
            <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt="Logo" />
          </div>

          <nav className="hidden md:flex ml-14 text-[#BABCC4] gap-7 ">
            <button
              className={`${
                isActiveNav === "collections" ? "active" : "hover:not-active"
              }`}
              onClick={() => toggleNav("collections")}
            >
              Collections
            </button>
            <button
              className={`${
                isActiveNav === "men" ? "active" : "hover:not-active"
              }`}
              onClick={() => toggleNav("men")}
            >
              Men
            </button>
            <button
              className={`${
                isActiveNav === "women" ? "active" : "hover:not-active"
              }`}
              onClick={() => toggleNav("women")}
            >
              Women
            </button>
            <button
              className={`${
                isActiveNav === "about" ? "active" : "hover:not-active"
              }`}
              onClick={() => toggleNav("about")}
            >
              About
            </button>
            <button
              className={`${
                isActiveNav === "contacts" ? "active" : "hover:not-active"
              }`}
              onClick={() => toggleNav("contacts")}
            >
              Contacts
            </button>
          </nav>

          {isNavModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex ">
              <div className="bg-white w-2/3 h-full pt-24 relative">
                <FaTimes
                  size={20}
                  className="absolute top-6 left-8  cursor-pointer text-[#818288c5]"
                  onClick={() => setIsNavModal(false)}
                />
                <nav className="flex flex-col gap-5 items-start px-8 font-bold text-lg ">
                  <button
                    className={`${isActiveNav === "collections" ? "" : ""}`}
                    onClick={() => toggleNav("collections")}
                  >
                    Collections
                  </button>
                  <button
                    className={`${isActiveNav === "men" ? "" : ""}`}
                    onClick={() => toggleNav("men")}
                  >
                    Men
                  </button>
                  <button
                    className={`${isActiveNav === "women" ? "" : ""}`}
                    onClick={() => toggleNav("women")}
                  >
                    Women
                  </button>
                  <button
                    className={`${isActiveNav === "about" ? "" : ""}`}
                    onClick={() => toggleNav("about")}
                  >
                    About
                  </button>
                  <button
                    className={`${isActiveNav === "contacts" ? "" : ""}`}
                    onClick={() => toggleNav("contacts")}
                  >
                    Contacts
                  </button>
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-5 md:gap-10 items-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/icon-cart.svg"}
            alt="Cart"
            className="cursor-pointer"
            onClick={toggleCartModal}
          />
          {showItemCount && (
            <div className="absolute mobile-count  md:top-9 md:right-56 bg-[#f08119] text-white rounded-lg flex justify-center items-center text-xs px-2">
              {count}
            </div>
          )}
          {cartModal && (
            <CartModal onClose={() => setCartModal(false)} className="" />
          )}
          <div className="rounded-full border hover:border-[#CE651B] relative">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/image-avatar.png"}
              alt="Avatar"
              className="w-7 h-7 md:w-11 md:h-11 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
      <hr className="border border-b-[#E8E5E0] mt-8 hidden md:block"></hr>

      <main className="px-0 md:px-8 mt-20 flex flex-col md:flex-row ">
        {isActiveNav === "collections" && <>Collections coming soon</>}
        {isActiveNav === "men" && <>Men coming soon</>}
        {isActiveNav === "women" && (
          <>
            <section className="flex w-full md:w-1/2 flex-col ">
              <div className="w-full md:w-4/5">
                <div className="cursor-pointer" onClick={() => openLightbox(0)}>
                  <img
                    src={Products[0].original}
                    alt="Product 1"
                    className="rounded-lg"
                    openLightbox={openLightbox}
                  />
                </div>
                <div className="mt-6 hidden md:block">
                  <LightboxGallery
                    images={Products}
                    currentIndex={0}
                    onCloseRequest={closeLightbox}
                    openLightbox={openLightbox}
                    className=""
                  />
                </div>
              </div>
            </section>

            <section className="w-full px-8 md:px-0 md:w-1/2">
              <div className=" py-16">
                <p className="text-[#f5953b] text-xs font-semibold">
                  SNEAKER COMPANY
                </p>
                <p className="text-3xl md:text-4xl  font-bold mt-6 mb-8">
                  Fall Limited Edition <br className="hidden md:block" />{" "}
                  Sneakers
                </p>
                <article className="text-sm text-[#9EA0A1] font-medium mb-6">
                  These low-profile sneakers are your perfect casual wear{" "}
                  <br className="hidden md:block" /> companion. Featuring a
                  durable rubber outer sole, they’ll{" "}
                  <br className="hidden md:block" /> withstand everything the
                  weather can offer.
                </article>
                <div className="flex md:flex-col justify-between md:mb-0">
                  <div className="flex gap-6 items-center">
                    <p className="text-xl font-bold flex items-center">
                      $125.00
                    </p>
                    <span className="bg-[#f0dec0] px-2 py-0.5 rounded-md flex justify-center items-center">
                      <p className="text-[#f5953b] text-center text-xs font-semibold">
                        50%
                      </p>
                    </span>
                  </div>
                  <div className=" ">
                    <p className="relative md:mt-3 md:mb-6 text-[#9EA0A1] text-sm font-semibold ">
                      $250.00
                      <span className="absolute left-0 right-0 h-px w-12 bg-[#9EA0A1] bottom-1/2 block after:block content"></span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-[#f2f8f8] flex gap-8 rounded-lg py-4 md:py-3 px-4 justify-between my-4 md:my-0 md:justify-center items-center">
                    <FaMinus
                      className="text-[#f08119] cursor-pointer"
                      onClick={decreaseCount}
                    />
                    <p className="font-semibold text-align w-1">{count}</p>
                    <FaPlus
                      className="text-[#f08119] cursor-pointer"
                      onClick={increaseCount}
                    />
                  </div>
                  <button className="text-white text-sm font-semibold bg-[#f08119] md:btn-cart px-24 py-5 md:py-3 flex gap-4 rounded-lg">
                    {" "}
                    <span>
                      <BsCart2 size={18} className="text-white" />
                    </span>
                    <p>Add to cart</p>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
        {isActiveNav === "about" && <>About Us comming soon</>}
        {isActiveNav === "contacts" && <>Contact Us coming soon</>}
      </main>
    </div>
  );
}

export default AppMaketa;

// {/* // Your users should be able to:

// // - View the optimal layout for the site depending on their device's screen size
// // - See hover states for all interactive elements on the page
// // - Open a lightbox gallery by clicking on the large product image
// // - Switch the large product image by clicking on the small thumbnail images
// // - Add items to the cart
// // - View the cart and remove items from it */}
