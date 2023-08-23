import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../actions/news_actions';
import response from './response';

const NewsTimeline = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	// const news = response;
	const news = useSelector(state => state.news.news);
	const leaders = news?.slice(0, 4);
	const subArticles = news?.slice(4);


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

	const printSubArticles = (subArticles, side = false) => {
		const articles = [];
		let i = side === true ? 1 : 0

		while (i < subArticles.length) {
			let article = subArticles[i];
			let urlParams = new URLSearchParams(article['link']);
			let actualLink = urlParams.get('url');
			
			articles.push(
				<article className='sub-article-container' id={side === true ? `side-story-container-${i}` : ''}>
					<a className='sub-article-hyperlink' id={side === true ? `side-story-${i}` : ''} target='_blank' href={actualLink}>
					<span id='media'>{article['media']}</span>
					<h3 id='title'>{article['title']}</h3>
					<span id='date'>{article['date']}</span>
						<img src='https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM='/>
					</a>
				</article>
			)

			i += 1;
		}

		return articles;
	}

	return (
		<div className='news-timeline'>
			<div className='news-timeline-frontpage'>
				<article className='lead-story'>
					<a>
						<img src='https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM='/>
						<h3>
							{leaders[0]['title']}
						</h3>
						<span>
							<p>{leaders[0]['media']}</p>
							<p>{leaders[0]['date']}</p>
						</span>
					</a>
				</article>
				{printSubArticles(leaders, true)}
			</div>
			<div className='sub-articles'>
				{printSubArticles(subArticles)}
			</div>
		</div>
	)
}

export default NewsTimeline;