import React from 'react'

import SEO from '../../components/SEO'

import { PostList } from '../../components/PostList'
import { getAllPosts } from '../../api'

export default function Blog({ posts }) {
	return (
		<>
            <SEO title='Blog' path='blog' />
			<h1>All my thought in techincal field</h1>
			<hr />
			<PostList posts={posts} />
		</>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts('blog')

	return {
		props: {
			posts
		}
	}
}
