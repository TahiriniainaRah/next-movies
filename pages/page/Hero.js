import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-no-repeat relative bg-[url('https://thumbs.dreamstime.com/b/calgary-alberta-canada-june-ipad-netflix-logo-screen-red-background-popcorn-headphones-185083955.jpg')]">
      <div className="text-center pt-[12rem]">
        <h1 className="text-2xl text-gray-100 uppercase font-bold py-4">
          Welcome to Movies
        </h1>
        <p className="text-gray-300">Produce FILM feature</p>
        <Link href="/page/contact">
          <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4 hover:bg-gray-600">
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
