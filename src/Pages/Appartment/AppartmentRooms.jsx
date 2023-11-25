import "./area.css";
const AppartmentRooms = ({ item }) => {
  const { floor_no, block_name, apartment_no, rent, image } = item;

  return (
    <div className="mt-10 w-[92%] mx-auto mb-10">
      <div>
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#b9eb69] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
          <img className="rounded-full w-64 h-64 mb-1" src={image} />

          <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
            Floor No : {floor_no}
          </p>
          <div className="flex text-gray-500 font-semibold text-xl gap-5">
            <h1>Appartment No: ({apartment_no})</h1>
            <h1>Block No: {block_name}</h1>
          </div>
          <div className="ordernow flex flex-row justify-between items-center w-full">
            <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
              $ {rent}
            </p>
            <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
              Agreement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppartmentRooms;
