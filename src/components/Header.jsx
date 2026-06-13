import Navigation from "./Navigation";

const Header = ({ openModal }) => {
    return (
        <header className=" bg-white/50 backdrop-blur sticky top-0 z-50 transition-shadow duration-300 border-b border-gray-200">
            <div className="flex flex-1 flex-row justify-around">
            <h1 className="text-[#4bbea5] text-xl font-bold">My Diary</h1>
            <Navigation  openModal={openModal} />
            </div>
        </header>
    );
};

export default Header;