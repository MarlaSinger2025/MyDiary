export default function Footer() {
    return (
        <div className="p-5 border-t"
        style={{
            borderTopWidth: "2px",
            borderImage: "linear-gradient(to right, #FFF433, #FFFFFF, #9B59D0, #2D2D2D) 1",
              }} 
        >
            {/* <div className="mt-3 h-0.5 bg-linear-to-r from-[#332b2f] via-[#ffd800] to-[#21b1ff]" /> */}
            <p className="text-[#4bbea5]">© 2026 <span className="font-heading">TONI</span> // All rights reserved </p>
        </div>
    )
};