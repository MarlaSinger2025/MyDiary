import Navigation from "./Navigation";

const Header = ({ openModal }) => {
    return (
        <header
    className="sticky top-0 z-50 bg-white/50 backdrop-blur border-b"
    style={{
        borderBottomWidth: "2px",
        borderImage: "linear-gradient(to right, #b827fc, #2c90fc, #b8fd33, #fec837, #fd1892) 1",
          }} 
          >
            <div className="flex flex-1 flex-row justify-around">
            <h1 className="text-[#4bbea5] text-xl font-bold">My Diary</h1>
            <Navigation  openModal={openModal} />
            </div>
        </header>
    );
};

export default Header;