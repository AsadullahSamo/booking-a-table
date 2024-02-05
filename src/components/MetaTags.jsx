import React from 'react'
import { Helmet } from 'react-helmet'
import LittleLemon from '../assets/little-lemon.png';
export default function MetaTags({ title }) {

	return (

		<Helmet>
			<link rel="icon" href={LittleLemon} type="image/x-icon" />
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="author" content="AsadullahSamo" />
			<meta name="keywords" content="react, tailwindcss, little-lemon, restaurant" />
			<meta property="og:title" content={title} />
			<title> {title} </title>
		</Helmet>

	)

}
