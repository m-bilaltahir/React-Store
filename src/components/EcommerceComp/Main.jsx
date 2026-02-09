import React from "react";

const Main = () => {
  const products = [
    {
      id: 10,
      name: "Sneakers",
      price: "Rs 6700",
      image: "/Images/box10_img.jpeg",
    },
    {
      id: 1,
      name: "Hair cerum",
      price: "Rs 1300",
      image: "/Images/box1_img.jpeg",
    },
    {
      id: 5,
      name: "Iphone 17 pro max",
      price: "Rs 6,76000",
      image: "/Images/box5_img.jpeg",
    },
    {
      id: 2,
      name: "Brown Jacket",
      price: "Rs 7000",
      image: "/Images/box2_img.jpeg",
    },
    {
      id: 12,
      name: "Pet Care",
      price: "Rs 190",
      image: "/Images/box12_img.jpg",
    },
    {
      id: 4,
      name: "Motorolla Edge 70",
      price: "Rs 75,000",
      image: "/Images/box4_img.jpeg",
    },
    {
      id: 8,
      name: "Omega 13",
      price: "Rs 44,000",
      image: "/Images/box8_img.jpeg",
    },
    {
      id: 6,
      name: "Oppo reno 15",
      price: "Rs 92,000",
      image: "/Images/box6_img.jpeg",
    },
    {
      id: 3,
      name: "Dark brown Jacket",
      price: "Rs 9200",
      image: "/Images/box3_img.jpeg",
    },
    {
      id: 7,
      name: "Patek Philippe nova edition",
      price: "Rs 7,00000",
      image: "/Images/box7_img.jpeg",
    },
    {
      id: 11,
      name: "Samsung Galaxy S24 Ultre",
      price: "Rs 4,65,000",
      image: "/Images/box11_img.jpg",
    },
    {
      id: 9,
      name: "Nike 11 air",
      price: "Rs 17,000",
      image: "/Images/box9_img.jpeg",
    },
  ];
  return (
    <main className="bg-linear-to-b from-blue-500 to-blue-100 ">
      <div className="w-full h-30 sm:h-50 md:h-70 bg-cover bg-top bg-[url('/Images/hero_image.jpg')]"></div>


      <div className=" max-w-7xl mx-auto px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            
            <div
              key={product.id}
              className="  border-black border-3 rounded-xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="border-b-2 w-full h-65 object-cover rounded-t-xl"
              />
              <div className="bg-blue-100 pt-1 px-3 flex flex-col justify-between flex-1">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <p className="text-gray-600">{product.price}</p>
                <button className=" bg-black  hover:bg-gray-500  text-white w-50 mt-4 mb-7 px-2 py-2 border-2 rounded-2xl self-center mx-auto">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
