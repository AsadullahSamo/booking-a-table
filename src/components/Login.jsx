import React, { useState } from 'react';
import LittleLemon from '../assets/little-lemon.png';
import { Link, useNavigate } from 'react-router-dom';
import MetaTags from './MetaTags';
import ReactAlert from './ReactAlert';

const Login = () => {
	const [alert, setAlert] = useState(false);
	const [msg, setMsg] = useState('Please fill in all fields');
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

		setAlert(true);
		setTimeout(() => {
			setAlert(false);
		}, 1500);

		const user = JSON.parse(localStorage.getItem('user'));
		e.preventDefault();
		const { firstName, lastName, phone, password } = inputs;

		if (firstName === '' || lastName === '' || phone === '' || password === '') {
			<ReactAlert msg="Please fill in all fields" />
			return;
		}

		if (user.firstName !== firstName) {
			setMsg('Firstname is incorrect');
			return;
		}
		else if (user.lastName !== lastName) {
			setMsg('Lastname is incorrect');
			return;
		}
		else if (user.phone !== phone) {
			setMsg('Phone is incorrect');
			return;
		}
		else if (user.password !== password) {
			setMsg('Password is incorrect');

			return;
		} else {
			navigate('/home');
		}
	}

	return (

		<section className="w-[500px] h-full bg-gray-100 m-auto">
			<MetaTags title="Little Lemon Login Page" />

			<Link to="/" className="text-6xl">
				&larr;
			</Link>

			{alert &&
				<ReactAlert msg={msg} />
			}

			<img src={LittleLemon} alt="Little Lemon Logo" className="m-auto -mt-10 w-48 h-48 object-contain" />
			<form action="">
				<label className="mt-10 ml-5 font-semibold" htmlFor="first-name">
					FIRST NAME <span className='text-red-600'>*</span> <br />
					<input
						required={true}
						onChange={handleChange}
						value={inputs.firstName}
						type="text"
						name="firstName"
						id="first-name"
						className="mb-5 border border-solid rounded-md ml-5 w-[28rem] bg-black text-white focus:bg-white focus:text-black pl-2"
					/>
				</label>

				<label className="mt-10 ml-5 font-semibold" htmlFor="last-name">
					LAST NAME <span className='text-red-600'>*</span> <br />
					<input
						required={true}
						onChange={handleChange}
						value={inputs.lastName}
						type="text"
						name="lastName"
						id="last-name"
						className="mb-5 border border-solid rounded-md ml-5 w-[28rem] bg-black text-white focus:bg-white focus:text-black pl-2"
					/>
				</label>

				<label className="mt-10 ml-5 font-semibold" htmlFor="phone">
					PHONE <span className='text-red-600'>*</span> <br />
					<input
						required={true}
						onChange={handleChange}
						value={inputs.phone}
						type="number"
						pattern="[0-9]{3}-[0-9]{2}-[0-9+]{3}"
						placeholder="123-45-678"
						name="phone"
						id="phone"
						className="mb-5 border border-solid rounded-md ml-5 w-[28rem] bg-black text-white focus:bg-white focus:text-black pl-2"
					/>
				</label>

				<label className="mt-10 ml-5 font-semibold" htmlFor="password">
					PASSWORD <span className='text-red-600'>*</span> <br />
					<input
						required={true}
						onChange={handleChange}
						value={inputs.password}
						type="password"
						name="password"
						id="password"
						className="mb-5 border border-solid rounded-md ml-5 w-[28rem] bg-black text-white focus:bg-white focus:text-black pl-2"
					/>
				</label>

				<label className="font-semibold" htmlFor="submit">
					<input
						onClick={handleSubmit}
						type="submit"
						name="submit"
						id="submit"
						className="mt-2 mb-5 border border-solid rounded-md ml-5 w-[28rem] bg-black text-white hover:bg-white hover:text-black pl-2 hover:cursor-pointer transition-all duration-500 hover:border-solid hover:border border-black"
					/>
				</label>

				<p className="text-center text-[13px] text-[#495e57]">
					Don't have an account?{' '}
					<Link to="/" className="text-[#f4ce14] hover:cursor-pointer">
						Sign Up
					</Link>
				</p>
			</form>
		</section>
	);
};

export default Login;
