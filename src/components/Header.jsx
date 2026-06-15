import Navigation from "./Navigation";

const Header = ({ openModal }) => {
    return (
        <header
    className="sticky top-0 z-50 bg-white/50 backdrop-blur border rounded-full w-[80%] h-20 border-gray-200 shadow-xl mx-auto"
          >
            <div className="flex flex-1 flex-row justify-around items-center h-full">
            <h1 className="tracking-widest font-heading text-[#4bbea5] text-[2.5rem]">My Diary</h1>
            <Navigation  openModal={openModal} />
            </div>
        </header>
    );
};

export default Header;

// className="sticky top-0 z-50 bg-white/50 backdrop-blur border-b w-[80%]"
//     style={{
//         borderBottomWidth: "2px",
//         borderImage: "linear-gradient(to right, #b827fc, #2c90fc, #b8fd33, #fec837, #fd1892) 1",
//           }} 
//           >