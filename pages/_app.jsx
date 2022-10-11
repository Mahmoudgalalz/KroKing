import '../styles/globals.css'
import {MDXProvider} from '@mdx-js/react'
import Navbar from '../components/Navbar'
import React from 'react'
import SEO from '../components/SEO'

const CustomLink = ({ href, ...props }) => {
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props} />
			</Link>
		)
	}

	return <a href={href} {...props} />
}

const CustomImg = ({ src, ...props }) => {
	return (
		<a href={src}>
			<img
				src={src}
				{...props}
				loading='lazy'
				className='text-center mx-auto'
			/>
		</a>
	)
}

const components = {
	a: CustomLink,
	img: CustomImg
}

function App({ Component, pageProps }) {
	return (
		<>
		<SEO/>
        <div className='bg-secondary font-display p-4 py-8 lg:p-8 lg:p-12 min-h-screen'>
				<Navbar />
				<div className='lg:w-3/6 mx-auto mt-24'>
					<MDXProvider components={components}>
						<Component {...pageProps} />
					</MDXProvider>
				</div>
                </div>
		</>

	)
}

export default App