
const Project = ({ title, person, date, status }) => {
  return (
    <div className={`grid grid-cols-6 bg-white text-black p-5 drop-shadow-xl rounded-sm border-b-2 ${status}`}>
      <div className="xs:col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3">
        <div className="text-gray-400 font-black">Project Title</div>
        <div>{title}</div>
      </div>
      <div className="xs:col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1 mt-2">
        <div className="text-gray-400 font-black">Person</div>
        <div>{person}</div>
      </div>
      <div className="xs:col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1 mt-2">
        <div className="text-gray-400 font-black">Due Date</div>
        <div>{date}</div>
      </div>
      <div className=" xs:col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-1 md:ml-auto mt-2">
        {/* <div className="text-gray-400 font-black">Status</div> */}
        <div className={`
        chip text-center p-1.5 my-1
        text-white font-bold 
        w-28 rounded-3xl ${status}
        `}>{status}</div>
      </div>
    </div>
  );
};

export default Project;
