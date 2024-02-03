import React from 'react'
import LittleLemon from '../assets/little-lemon.png'

export default function Login() {

	return (
		<div className='w-96 h-[100%] bg-gray-100 m-auto'>
			<img src={LittleLemon} alt="Little Lemon Logo" className='m-auto w-48 h-48 object-contain' />
			<p className='text-[14px] m-auto text-center w-48 -mt-14 font-semibold text-[#495e57]'> BEFORE TABLE RESERVATION CREATE A ACCOUNT </p>
			<p className='text-center font-bold mt-5 text-2xl mb-10'> Create New Account </p>

			<form action="">

				<label className='mt-10 ml-5 font-semibold' htmlFor="first-name">
					FIRST NAME <br />
					<input type="text" name="first-name" id="first-name" className='mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2' />
				</label>

				<label className='mt-10 ml-5 font-semibold' htmlFor="first-name">
					LAST NAME <br />
					<input type="text" name="first-name" id="first-name" className='mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2' />
				</label>

				<label className='mt-10 ml-5 font-semibold' htmlFor="first-name">
					PHONE <br />
					<input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9+]{3}" placeholder="123-45-678" name="first-name" id="first-name" className='mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2' />
				</label>

				<label className='mt-10 ml-5 font-semibold' htmlFor="first-name">
					PASSWORD <br />
					<input type="password" name="first-name" id="first-name" className='mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2' />
				</label>

				<label className='font-semibold' htmlFor="first-name">
					<input type='submit' name="first-name" id="first-name" className='mt-2 mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white hover:bg-white hover:text-black pl-2 hover:cursor-pointer transition-all duration-500 hover:border-solid hover:border border-black' />
				</label>

				<p className='text-center text-[13px] text-[#495e57]'> Already have an account? <span className='text-[#f4ce14] hover:cursor-pointer'>Login</span> </p>

			</form>


		</div>
	)

}
