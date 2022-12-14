import React from 'react'
import Head from 'next/head'

const hostname = 'https://kro.vercel.app'

const defaultTitle = 'Mahmoud Galal'
const defaultDescription = 'Backend Software Engineer, Blogger, Mentor'
const defaultOGImagePath = '/og.png'
const defaultPath = ''

function SEO({
	title,
	lang,
	description = defaultDescription,
	path = defaultPath,
	cover
}) {
	const ogImageUrl = cover || `${hostname}${defaultOGImagePath}`
	const url = `${hostname}/${path}`
	const finalTitle = title
		? title + (lang === 'ar' ? ' |  محمود جلال' : ' | Mahmoud Galal')
		: defaultTitle

	return (
		<Head>
			<title>{finalTitle}</title>
			<meta
				name='google-site-verification'
				content='Jwd5WF70ZzZgB0muYxnSlHsVh3allc411SZx25cGYTo'
			/>
			<meta content={finalTitle} property='og:title' />
			<meta content='website' property='og:type' />
			<meta content={description} name='description' />
			<meta content={description} property='og:description' />
			<meta content={url} property='og:url' />
			<meta content='Mahmoud Galal' property='og:site_name' />
			<meta content={ogImageUrl} property='og:image' />
			<meta content={'image/jpeg'} property='og:image:type' />
			<meta content={ogImageUrl} property='og:image:url' />
			<meta content={ogImageUrl} property='og:image:secure_url' />
			<meta content='summary_large_image' name='twitter:card'></meta>
			<meta content={finalTitle} property='twitter:title' />
			<meta content={description} property='twitter:description' />
			<meta content='@eitmg' property='twitter:creator' />
			<meta content='@eitmg' property='twitter:site' />
			<meta content={ogImageUrl} property='twitter:image' />
			<html lang='en-GB' />

			{/* ICONS */}

			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/icons/favicon-180x180.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/icons/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/icons/favicon0.png'
			/>
			<link rel='manifest' href='/icons/site.webmanifest' />
			<link
				rel='mask-icon'
				href='/icons/safari-pinned-tab.svg'
				color='#5bbad5'
			/>
			<link rel='shortcut icon' href='/icons/favicon.ico' />
			<meta name='msapplication-TileColor' content='#f3f7f9' />
			<meta
				name='msapplication-TileImage'
				content='/icons/mstile-144x144.png'
			/>
			<meta name='msapplication-config' content='/icons/browserconfig.xml' />
			<meta name='theme-color' content='#ffffff' />
		</Head>
	)
}

export default SEO