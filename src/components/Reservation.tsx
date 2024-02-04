import React from "react";
import { Datepicker, DatepickerEvent} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { Link } from 'react-router-dom';

const Reservation = () => {
  const [date, setDate] = React.useState<{
    endValue: Date | null;
    startValue: Date | null;
    rangeDates: Date[] | null;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<HTMLElement | null>(null);
  const handleClick = (e) => {
    if (selectedTimeSlot) {
      selectedTimeSlot.style.backgroundColor = '';
      selectedTimeSlot.style.color = '';
    }

    // Apply styles to the clicked element
    e.target.style.backgroundColor = '#f4ce14';
    e.target.style.color = 'white';

    // Update the currently selected element
    setSelectedTimeSlot(e.target);
  }

  return (
    <>
      <div className='pt-24 w-96 h-[100%] bg-gray-100 m-auto'>
        <p className="font-bold text-xl pl-10"> Date </p>
        <Datepicker
          onChange={handleChange}
          locale={enUS}
          startValue={date.startValue}
          endValue={date.endValue}
        />

        <p className="mt-5 mb-2 pl-10 font-bold text-xl"> Time </p>
        <ul className="flex gap-5 justify-center">
          <li onClick={handleClick} className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 5 pm </li>
          <li onClick={handleClick} className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 6 pm </li>
          <li onClick={handleClick} className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 7 pm </li>
          <li onClick={handleClick} className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 8 pm </li>
        </ul>

        <p className="mt-14 mb-2 pl-10 font-bold text-xl"> Number of people </p>
        <ul className="flex gap-5 justify-center mb-10">
          <li className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 1 - 2 </li>
          <li className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 3 - 4 </li>
          <li className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 5 </li>
          <li className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 6 </li>
          <li className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"> 7 </li>
        </ul>


      <Link to='/login' className="ml-[30%] bg-[#f4ce14] w-36 h-10 font-bold rounded-lg hover:cursor-pointer hover:transition-all duration-800 hover:bg-[#495e57] hover:text-white px-5 py-2"> Confirm </Link>  
      </div>

      
    </>
  );
};

export default Reservation;