const COLLECTION = 'blog'

import React from 'react'

import Article from '../../components/Article'

import { getAllSlugs, getPostByFilename, getWebPathFromSlug } from '../../api'
import { formatDate } from '../../utils'

export default function Blog(props) {
	return <Article {...props} />
}

export async function getStaticProps({ params: { slug } }) {
	const post = getPostByFilename(slug, COLLECTION)

	post.frontmatter.date = formatDate(
		post.frontmatter.date,
		post.frontmatter.lang
	)

	return {
		props: {
			...post,
			path: getWebPathFromSlug(slug, COLLECTION)
		}
	}
}

export async function getStaticPaths() {
	const paths = getAllSlugs(COLLECTION)
		.filter(path => !path.endsWith('external'))
		.map(slug => ({
			params: {
				slug
			}
		}))

	return {
		paths,
		fallback: false
	}
}