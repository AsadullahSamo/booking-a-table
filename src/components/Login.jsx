import React, { useState } from 'react';
import LittleLemon from '../assets/little-lemon.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const [inputs, setInputs] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
	};

	const handleSubmit = (e) => {
		const user = JSON.parse(localStorage.getItem('user'));
		e.preventDefault();
		const { firstName, lastName, phone, password } = inputs;

		if (firstName === '' || lastName === '' || phone === '' || password === '') {
			alert('Please fill in all fields');
			return;
		}

		if (user.firstName !== firstName) {
			alert('Firstname not found, please create an account first');
			return;
		}
		else if (user.phone !== phone) {
			alert('Phone number not found, please create an account first');
			return;
		}
		else if (user.password !== password) {
			alert('Password is incorrect, please create an account first');
			return;
		} else {
			alert('Thanks for reserving a table! See you at the restaurant!');
			navigate('/');
		}
	}

	return (
		<section className="w-96 h-full bg-gray-100 m-auto">
			<Link to="/" className="text-6xl">
				&larr;
			</Link>
			<img src={LittleLemon} alt="Little Lemon Logo" className="m-auto w-48 h-48 object-contain" />
			<form action="">
				<label className="mt-10 ml-5 font-semibold" htmlFor="first-name">
					FIRST NAME <br />
					<input
						required={true}
						onChange={handleChange}
						value={inputs.firstName}
						type="text"
						name="firstName"
						id="first-name"
						className="mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2"
					/>
				</label>

				<label className="mt-10 ml-5 font-semibold" htmlFor="last-name">
					LAST NAME <br />
					<input
						required={true}
						onChange={handleChange}
						value={inputs.lastName}
						type="text"
						name="lastName"
						id="last-name"
						className="mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2"
					/>
				</label>

				<label className="mt-10 ml-5 font-semibold" htmlFor="phone">
					PHONE <br />
					<input
						required={true}
						onChange={handleChange}
						value={inputs.phone}
						type="number"
						pattern="[0-9]{3}-[0-9]{2}-[0-9+]{3}"
						placeholder="123-45-678"
						name="phone"
						id="phone"
						className="mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2"
					/>
				</label>

				<label className="mt-10 ml-5 font-semibold" htmlFor="password">
					PASSWORD <br />
					<input
						required={true}
						onChange={handleChange}
						value={inputs.password}
						type="password"
						name="password"
						id="password"
						className="mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2"
					/>
				</label>

				<label className="font-semibold" htmlFor="submit">
					<input
						onClick={handleSubmit}
						type="submit"
						name="submit"
						id="submit"
						className="mt-2 mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white hover:bg-white hover:text-black pl-2 hover:cursor-pointer transition-all duration-500 hover:border-solid hover:border border-black"
					/>
				</label>
			</form>
		</section>
	);
};

export default Login;
