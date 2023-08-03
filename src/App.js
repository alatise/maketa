import React, { useState } from "react";
import { Products } from "./components/productData";
import { LightboxGallery } from "./components/lightbox";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { CartModal } from "./components/cartModal";

function AppMaketa() {
  const [isActiveNav, setIsActiveNav] = useState("women");

  const toggleNav = (value) => {
    setIsActiveNav(value);
  };

  const [isCartModal, setIsCartModal] = useState(false);

  const openCartModal = () => {
    setIsCartModal(true);
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

  return (
    <div className="w-full px-36 py-8 mt-">
      <CartModal />
      <div className="flex justify-between items-center relative">
        <div className="flex items-center relative">
          <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt="Logo" />
          <nav className="flex ml-14 text-[#BABCC4] gap-7 relative z-10">
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
        </div>
        <div className="flex gap-10 items-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/icon-cart.svg"}
            alt="Cart"
            className={isCartModal}
            onClick={() => openCartModal()}
          />
          <div className="rounded-full border border-[#CE651B] relative z-1">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/image-avatar.png"}
              alt="Avatar"
              className="w-11 h-11 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="border border-b-[#E8E5E0] mt-8"></div>

      <main className="px-8 mt-20 flex ">
        {isActiveNav === "collections" && <>coming soon</>}
        {isActiveNav === "men" && <>coming soon</>}
        {isActiveNav === "women" && (
          <>
            <section className="flex w-1/2 flex-col ">
              <div className="w-4/5">
                <div className="cursor-pointer" onClick={() => openLightbox(0)}>
                  <img
                    src={Products[0].original}
                    alt="Product 1"
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-6">
                  <LightboxGallery
                    images={Products}
                    currentIndex={0}
                    onCloseRequest={closeLightbox}
                    // openLightbox={openLightbox}
                    className=""
                  />
                </div>
              </div>
            </section>

            <section className="w-1/2">
              <div className=" py-16">
                <p className="text-[#f5953b] text-xs font-semibold">
                  SNEAKER COMPANY
                </p>
                <p className="text-4xl  font-bold mt-6 mb-8">
                  Fall Limited Edition <br /> Sneakers
                </p>
                <article className="text-sm text-[#9EA0A1] font-medium mb-6">
                  These low-profile sneakers are your perfect casual wear <br />{" "}
                  companion. Featuring a durable rubber outer sole, they’ll{" "}
                  <br /> withstand everything the weather can offer.
                </article>
                <div className="flex gap-6 items-center">
                  <p className="text-xl font-bold flex items-center">$125.00</p>
                  <span className="bg-[#f0dec0] px-2 py-0.5 rounded-md flex justify-center items-center">
                    <p className="text-[#f5953b] text-center text-xs font-semibold">
                      50%
                    </p>
                  </span>
                </div>

                <p className="relative mt-3 mb-6 text-[#9EA0A1] text-sm font-semibold">
                  $250.00
                  <span className="absolute left-0 right-0 h-px w-12 bg-[#9EA0A1] bottom-1/2 block after:block content"></span>
                </p>

                <div className="flex gap-4">
                  <div className="bg-[#f2f8f8] flex gap-8 rounded-lg py-3 px-4 justify-center items-center">
                    <FaMinus className="text-[#f08119]" />
                    <p className="font-semibold">0</p>
                    <FaPlus className="text-[#f08119]" />
                  </div>
                  <button className="text-white text-sm font-semibold bg-[#f08119] btn-cart py-3 flex gap-4 rounded-xl">
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
        {isActiveNav === "about" && <>About Us</>}
        {isActiveNav === "contacts" && <>Contact Us</>}
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
