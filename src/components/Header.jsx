import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="bg-base-100 shadow-sm">
            <div className="flex flex-1 flex-row justify-around">
            <h1 className="text-[#4bbea5] text-xl font-bold">My Diary</h1>
            <Navigation />
            </div>
        </header>
    );
};

export default Header;