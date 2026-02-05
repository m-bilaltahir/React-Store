const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  px-4 md:px-10 py-12 gap-10">
{/* flex flex-wrap px-4 md:px-10 py-12 justify-around overflow-hidden gap-10 */}
        <div className="flex flex-col gap-5">
          <ul className="font-bold text-md  hover:underline">Company</ul>
          <div className="flex flex-col text-sm gap-1.5">
            <a href="">About us</a>
            <a href="">Reviews</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookies Policy</a>
            <a href="">Term & Conditions</a>
            <a href="">Aceeptable use policy</a>
            <a href="">Sitemap</a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <ul className="font-bold text-md  hover:underline">Shop</ul>
          <div className="flex flex-col text-sm gap-1.5">
            <a href="">New Arrivals</a>
            <a href="">Collectives</a>
            <a href="">Inspiration</a>
            <a href="">Brands</a>
          </div>
          
        </div>
        <div className="flex flex-col gap-5">
          <ul className="font-bold text-md  hover:underline">Shipping services</ul>
          <div className="flex flex-col text-sm gap-1.5">
            <a href="">Ship a package</a>
            <a href="">Track a package</a>
            <a href="">Domestic Shipping</a>
            <a href="">International Shipping</a>
            <a href="">Bulk shipping</a>
            <a href="">Couriers</a>
            <a href="">Delivery services</a>
          </div>
        </div>

        
        <div className="flex flex-col gap-5">
          <ul className="font-bold hover:underline">Customers</ul>
          <div className="flex flex-col text-sm gap-1.5 ">
            <a href="">Register</a>
            <a href="">Contact us</a>
            <a href="">Support hub</a>
            <a href="">Preferences</a>
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
