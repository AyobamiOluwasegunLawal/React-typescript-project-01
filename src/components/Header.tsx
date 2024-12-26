import images from '../constants/images';

const Header = (): JSX.Element => {
  return (
    <div className="text-center ">
      <img src={images.reactCoreConcepts} alt="" className="h-[12rem] w-[12rem] mx-auto" />
      <h1 className="text-clip bg-gradient-to-r from-purple-500 from-40% to-blue-500 to-60%  text-5xl font-quicksandBold">
        React Essentials
      </h1>
      <p className="mt-3 text-purple-300 text-2xl">
        A fundamental concepts every react developer must understand
      </p>
    </div>
  );
};

export default Header;
