const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  px-4 md:px-10 py-12 gap-10">
{/* flex flex-wrap px-4 md:px-10 py-12 justify-around overflow-hidden gap-10 */}
        <div className="flex flex-col gap-5">
          <ul className="font-bold text-md  hover:underline">Company</ul>
          <div className="flex flex-col text-sm gap-1.5">
            <a href="" className="hover:underline">About us</a>
            <a href="" className="hover:underline">Reviews</a>
            <a href="" className="hover:underline">Privacy Policy</a>
            <a href="" className="hover:underline">Cookies Policy</a>
            <a href="" className="hover:underline">Term & Conditions</a>
            <a href="" className="hover:underline">Aceeptable use policy</a>
            <a href="" className="hover:underline">Sitemap</a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <ul className="font-bold text-md  hover:underline">Shop</ul>
          <div className="flex flex-col text-sm gap-1.5">
            <a href="" className="hover:underline">New Arrivals</a>
            <a href="" className="hover:underline">Collectives</a>
            <a href="" className="hover:underline">Inspiration</a>
            <a href="" className="hover:underline">Brands</a>
          </div>
          
        </div>
        <div className="flex flex-col gap-5">
          <ul className="font-bold text-md  hover:underline">Shipping services</ul>
          <div className="flex flex-col text-sm gap-1.5">
            <a href="" className="hover:underline">Ship a package</a>
            <a href="" className="hover:underline">Track a package</a>
            <a href="" className="hover:underline">Domestic Shipping</a>
            <a href="" className="hover:underline">International Shipping</a>
            <a href="" className="hover:underline">Bulk shipping</a>
            <a href="" className="hover:underline">Couriers</a>
            <a href="" className="hover:underline">Delivery services</a>
          </div>
        </div>

        
        <div className="flex flex-col gap-5">
          <ul className="font-bold hover:underline">Customers</ul>
          <div className="flex flex-col text-sm gap-1.5 ">
            <a href="" className="hover:underline">Register</a>
            <a href="" className="hover:underline">Contact us</a>
            <a href="" className="hover:underline">Support hub</a>
            <a href="" className="hover:underline">Preferences</a>
          </div>
          
        </div>
        
      </div>
      <p className="text-center pb-4">
        © 2026 React Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
