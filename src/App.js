import React from "react";
import { Products } from "./components/productData";

function AppMaketa() {
  return (
    <div className="px-36 py-8">
      <div className=" flex justify-between items-center">
        <div className="flex items-center">
          <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt="Logo" />
          <nav className="flex ml-12 text-[#BABCC4] gap-6">
            <p className="">Collections</p>
            <p className="">Men</p>
            <p className="">Women</p>
            <p className="">About</p>
            <p>Contacts</p>
          </nav>
        </div>
        <div className="flex gap-10 items-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/icon-cart.svg"}
            alt="Cart"
            className=""
          />
          <div className="rounded-full border border-[#CE651B]">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/image-avatar.png"}
              alt="Avatar"
              className="w-11 h-11 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="border border-b-[#BABCC4] mt-8"></div>
      <main className="px-8 mt-20 flex gap-10">
        <section className="flex w-1/2 ">
          {Products.map((product, index) => (
            <div key={index}>
              <div>
                <img src={product.original} alt={`Product ${index + 1}`} />
              </div>
              <div>
                <img src={product.thumbnail} alt={`Product ${index + 1}`} />
              </div>
            </div>
          ))}
        </section>
        <section>
          <p>Sneaker Company</p>
          <p className="text-xl">Fall Limited Edition Sneakers</p>
          <article className="text-sm">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </article>
          <div className="flex">
            <p>$125.00</p>
            <p>50%</p>
          </div>
          <p>$250.00</p>
          <div className="flex">
            <button className="">Add to cart</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AppMaketa;

// Your users should be able to:

// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Open a lightbox gallery by clicking on the large product image
// - Switch the large product image by clicking on the small thumbnail images
// - Add items to the cart
// - View the cart and remove items from it
