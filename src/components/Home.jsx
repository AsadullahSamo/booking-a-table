import React from 'react'
import Chef from '../assets/Chef.png'
import GreekSalad from '../assets/salad.png'
import Brushette from '../assets/brushette.png'

export default function Home() {

	return (

		<>
			<div className='flex w-[100%] h-96 bg-[#01150f] m-auto '>
				<img src={Chef} className='p-10 float-right object-contain w-96 h-96' alt="Chef bringing food" />
				<div>
					<p className='ml-5 pt-10 text-[#f4ce14] text-3xl'> Little Lemon </p> <br />
					<p className='text-white pl-5 text-3xl -mt-4'> California </p>
					<p className='pl-5 text-white text-[20px] mt-5 w-72'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
					<button className='bg-[#f4ce14] w-36 h-10 mt-5 ml-5 rounded-lg hover:cursor-pointer hover:transition-all duration-800 hover:bg-[#495e57] hover:text-white'> Reserve a table </button>
				</div>
			</div>

			<p className='m-5 font-bold text-left md:text-center'> ORDER FOR DELIVERY </p>

			<ul className='ml-5 flex gap-5 justify-start md:justify-center'>
				<li className='bg-[#edefee] px-5 rounded-full py-1'> Lunch </li>
				<li className='bg-[#edefee] px-5 rounded-full py-1'> Mains </li>
				<li className='bg-[#edefee] px-5 rounded-full py-1'> Desserts </li>
				<li className='bg-[#edefee] px-5 rounded-full py-1'> A La Carte </li>
			</ul>

			<div className='flex md:gap-16 justify-center md:flex-row flex-col items-center'>
				<div className='flex w-96'>
					<figure className='my-10 mx-5'>
						<img src={GreekSalad} alt="Greek Salad" />
						<figcaption className='ml-8'> Greek Salad </figcaption>
					</figure>
					<p className='mt-10 w-56'>The famous greek salad of crispy lettuce, peppers, olives. </p>
					<p className='mt-24 -ml-56 text-[#495e57]'> $12.99 </p>
				</div>

				<div className='flex w-96'>
					<figure className='my-10 mx-5'>
						<img src={Brushette} alt="Brushette" />
						<figcaption className='ml-12'> Brushette </figcaption>
					</figure>
					<p className='mt-10 w-56'>Our Brushette is made from grilled bread. </p>
					<p className='mt-24 -ml-56 text-[#495e57]'> $7.99 </p>
				</div>
			</div>

		</>
	)

}