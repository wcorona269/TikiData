import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../actions/news_actions';

const NewsTimeline = () => {
	const dispatch = useDispatch();
	const news = useSelector(state => state.news.news);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!news) {
			dispatch(fetchNews())
		} else {
			setIsLoading(false)
		}
	},[news])


	if (isLoading) {
		return (
			<h2>
				Loading...
			</h2>
		)
	}

	
	const printArticles = () => {
		const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porta eros.';
		const articles = []

		for (let i = 0; i < 10; i++) {
			articles.push(
				<article className='sub-article'>
					<a>
						<h3>{loremIpsum}</h3>
						<span>
							<p>Source</p>
							<p>Time</p>
						</span>
					</a>
				</article>
			)
		}

		return articles;
	}

	return (
		<div className='news-timeline'>
			<div className='news-timeline-frontpage'>
				<article className='lead-story'>
					<a>
						<h3>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</h3>
						<img src='https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM='/>
						<span>
							<p>source</p>
							<p>time</p>
						</span>
					</a>
				</article>
				<article className='side-story-1'>
					<a>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porta eros.</h3>
						<span>
							<p>Source</p>
							<p>Time</p>
						</span>
					</a>
				</article>
				<article className='side-story-2'>
					<a>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porta eros.</h3>
						<span>
							<p>Source</p>
							<p>Time</p>
						</span>
					</a>
				</article>
				<article className='side-story-3'>
					<a>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porta eros.</h3>
						<span>
							<p>Source</p>
							<p>Time</p>
						</span>
					</a>
				</article>
			</div>
			<div className='sub-articles'>
				{printArticles()}
			</div>
		</div>
	)
}

export default NewsTimeline;