import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../actions/news_actions';

const NewsTimeline = () => {
	const dispatch = useDispatch();
	const news = useSelector(state => state.news)

	
	useEffect(() => {
		dispatch(fetchNews())
	},[])

	const fetchTailoredNews = () => {
		// fetch news tailored to user's favorite clubs
	}

	const fetchTransferNews = () => {
		// fetch transfers
	}


	useEffect(() => {
	}, [])

	return (
		<div>
			<h2>News</h2>
		</div>
	)
}

export default NewsTimeline;