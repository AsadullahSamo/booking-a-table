import React from 'react'
import Chef from '../assets/Chef.png'
import GreekSalad from '../assets/salad.png'
import Brushette from '../assets/brushette.png'
import { Link } from 'react-router-dom'
import { set } from 'date-fns'
export default function Home() {

	const [greekSelected, setGreekSelected] = React.useState(false)
	const [brushetteSelected, setBrushetteSelected] = React.useState(false)
	const handleItemSelection = (itemName, setSelected) => {
		if (itemName === 'greek') {
			setSelected(!greekSelected)
		} else {
			setSelected(!brushetteSelected)
		}
	};

	const handleClick = (e) => {
		if (!greekSelected && !brushetteSelected) {
			alert('Please select an item to add to your cart')
			return
		}
	}

	return (

		<>
			<>
				<section className='flex w-[100%] h-96 bg-[#01150f] m-auto'>
					<img src={Chef} className='p-10 float-right object-contain w-96 h-96' alt="Chef bringing food" />
					<article>
						<p className='ml-5 pt-10 text-[#f4ce14] text-3xl'> Little Lemon </p> <br />
						<p className='text-white pl-5 text-3xl -mt-4'> California </p>
						<p className='pl-5 text-white text-[20px] mt-5 w-72 mb-10'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
						<Link onClick={handleClick} to={`${brushetteSelected || greekSelected ? '/reservation' : '#'}`} className='ml-5 bg-[#f4ce14] w-36 h-10 font-bold rounded-lg hover:cursor-pointer hover:transition-all duration-800 hover:bg-[#495e57] hover:text-white px-5 py-2'> Reserve a table </Link>
					</article>
				</section>

				<p className='m-5 font-bold text-left md:text-center'> ORDER FOR DELIVERY </p>

				<ul className='ml-5 flex gap-5 justify-start md:justify-center'>
					<li className='bg-[#edefee] px-5 rounded-full py-1'> Lunch </li>
					<li className='bg-[#edefee] px-5 rounded-full py-1'> Mains </li>
					<li className='bg-[#edefee] px-5 rounded-full py-1'> Desserts </li>
					<li className='bg-[#edefee] px-5 rounded-full py-1'> A La Carte </li>
				</ul>

				<section className='flex md:gap-16 justify-center md:flex-row flex-col items-center'>
					<article onClick={() => handleItemSelection('greek', setGreekSelected)} className={`flex w-[420px] border-solid border hover:cursor-pointer mt-10 ${greekSelected ? 'bg-slate-100' : 'border-none'}`}>
						<figure className='my-10 mx-5'>
							<img src={GreekSalad} alt="Greek Salad" />
							<figcaption className='ml-8'> Greek Salad </figcaption>
						</figure>
						<p className='mt-10 w-56'>The famous greek salad of crispy lettuce, peppers, olives. </p>
						<p className='mt-24 -ml-56 text-[#495e57]'> $12.99 </p>
					</article>

					<article onClick={() => handleItemSelection('brushette', setBrushetteSelected)} className={`flex w-[420px] border-solid border hover:cursor-pointer mt-10 ${brushetteSelected ? 'bg-slate-100' : 'border-none'}`}>
						<figure className='my-10 mx-5'>
							<img src={Brushette} alt="Brushette" />
							<figcaption className='ml-12'> Brushette </figcaption>
						</figure>
						<p className='mt-10 w-56'>Our Brushette is made from grilled bread. </p>
						<p className='mt-24 -ml-56 text-[#495e57]'> $7.99 </p>
					</article>
				</section>
			</>

		</>
	)

}
