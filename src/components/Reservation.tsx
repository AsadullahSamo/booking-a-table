import React from "react";
import { Datepicker, DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { Link, useNavigate } from "react-router-dom/dist";
import MetaTags from "./MetaTags";

const Reservation = () => {
	const navigate = useNavigate();
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

	const handleClick = (e) => {
		e.preventDefault();
		if (!selectedTimeSlot || !selectedPeopleSlot) {
			alert('Please select a time and number of people');
		} else {
			alert('Thanks for reserving a table! See you at the restaurant!ion');
			navigate('/home');
		}

	}

	const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<HTMLElement | null>(null);
	const [selectedPeopleSlot, setSelectedPeopleSlot] = React.useState<HTMLElement | null>(null);

	const handleSlotsClick = (e, selectedSlot, setSelectedSlot) => {
		if (selectedSlot) {
			selectedSlot.style.backgroundColor = '';
			selectedSlot.style.color = '';
		}

		// Apply styles to the clicked element
		e.target.style.backgroundColor = '#f4ce14';
		e.target.style.color = 'white';

		// Update the currently selected element
		setSelectedSlot(e.target);
	} // end of handleSlotsClick

	const peopleSlots = ['1 - 2', '3 - 4', '5', '6', '7'];
	const timeSlots = ['5 pm', '6 pm', '7 pm', '8 pm'];


	return (
		<>
			<section className='pt-24 w-96 h-[100vh] bg-gray-100 m-auto'>
				<MetaTags title="Little Lemon Reservation" />
				<header>
					<h2 className="font-bold text-xl pl-10"> Date </h2>
					<Datepicker
						onChange={handleChange}
						locale={enUS}
						startValue={date.startValue}
						endValue={date.endValue}
					/>
				</header>

				<section className="mt-5 mb-2 pl-10">
					<h2 className="font-bold text-xl"> Time </h2>
					<ul className="flex gap-5 justify-center">
						{timeSlots.map((slot, index) => (
							<li
								key={index}
								onClick={(e) => handleSlotsClick(e, selectedTimeSlot, setSelectedTimeSlot)}
								className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"
							>
								{slot}
							</li>
						))}
					</ul>
				</section>

				<section className="mt-14 mb-2 pl-10">
					<h2 className="font-bold text-xl"> Number of People </h2>
					<ul className="flex gap-5 justify-center mb-10">
						{peopleSlots.map((slot, index) => (
							<li
								key={index}
								onClick={(e) => handleSlotsClick(e, selectedPeopleSlot, setSelectedPeopleSlot)}
								className="font-semibold text-[18px] hover:bg-[#e0e0e0] hover:transition-all duration-500 hover:cursor-pointer hover:border hover:border-[#f4ce14] hover:rounded-full px-3"
							>
								{slot}
							</li>
						))}
					</ul>
				</section>

				<footer className="ml-[30%]">
					<button
						onClick={handleClick}
						className="bg-[#f4ce14] w-36 h-10 font-bold rounded-lg hover:cursor-pointer hover:transition-all duration-800 hover:bg-[#495e57] hover:text-white px-5 py-2"
					>
						Confirm
					</button>
				</footer>
			</section>
		</>
	);
};

export default Reservation;