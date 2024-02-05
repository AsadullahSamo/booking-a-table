import React from 'react'
import LittleLemon from '../assets/little-lemon.png'
import { Link } from 'react-router-dom'
export default function Login() {

	const handleSubmit = (e) => {
		e.preventDefault()
		alert(`Thanks for reserving a table! See you at the restaurant!`)
	}

	const [inputs, setInputs] = React.useState({
		firstName: '',
		lastName: '',
		phone: '',
		password: ''
	})

	const [firstName, setFirstName] = React.useState('')
	const [lastName, setLastName] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const [password, setPassword] = React.useState('')

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value)
	}
	const handleLastNameChange = (e) => {
		setLastName(e.target.value)
	}
	const handlePhoneChange = (e) => {
		setPhone(e.target.value)
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleChange = (e) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			[e.target.name]: e.target.value
		}));
	}

	return (
		<div className='w-96 h-[100%] bg-gray-100 m-auto'>
			<Link to='/' className='text-6xl pt-16 hover:cursor-pointer'> &larr; </Link>

			<img src={LittleLemon} alt="Little Lemon Logo" className='m-auto w-48 h-48 object-contain' />
			<p className='text-[14px] m-auto text-center w-48 -mt-14 font-semibold text-[#495e57]'> BEFORE TABLE RESERVATION CREATE A ACCOUNT </p>
			<p className='text-center font-bold mt-5 text-2xl mb-10'> Create New Account </p>

			<form action="">

				<label className='mt-10 ml-5 font-semibold' htmlFor="first-name">
					FIRST NAME <br />
					<input onChange={handleFirstNameChange} value={firstName} type="text" name="first-name" id="first-name" className='mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2' />
				</label>

				<label className='mt-10 ml-5 font-semibold' htmlFor="last-name">
					LAST NAME <br />
					<input onChange={handleLastNameChange} value={lastName} type="text" name="last-name" id="last-name" className='mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2' />
				</label>

				<label className='mt-10 ml-5 font-semibold' htmlFor="phone">
					PHONE <br />
					<input onChange={handlePhoneChange} value={phone} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9+]{3}" placeholder="123-45-678" name="phone" id="phone" className='mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2' />
				</label>

				<label className='mt-10 ml-5 font-semibold' htmlFor="password">
					PASSWORD <br />
					<input onChange={handlePasswordChange} value={password} type="password" name="password" id="password" className='mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2' />
				</label>

				<label className='font-semibold' htmlFor="submit">
					<input onClick={handleSubmit} type='submit' name="submit" id="submit" className='mt-2 mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white hover:bg-white hover:text-black pl-2 hover:cursor-pointer transition-all duration-500 hover:border-solid hover:border border-black' />
				</label>

				<p className='text-center text-[13px] text-[#495e57]'> Already have an account? <span className='text-[#f4ce14] hover:cursor-pointer'>Login</span> </p>

			</form>


		</div>
	)

}