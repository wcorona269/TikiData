import './news-timeline.scss';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../actions/news_actions';
import response from './response';
import SubArticlesTimeline from './sub-articles-timeline';
import NewsTimelineFrontpage from './news-timeline-frontpage';
import LoadingMessage from '../util/loading/loading-screen';

const NewsTimeline = () => {
	const dispatch = useDispatch();

	const news = useSelector(state => state.news?.news);
	const isLoading = useSelector(state => state.news?.isLoading);
	
	useEffect(() => {
		dispatch(fetchNews())
	}, [])

	useEffect(() => {

	}, [isLoading])

	const printArticles = (subArticles, side = false) => {
		const articles = [];
		let i = side === true ? 1 : 0

		while (i < subArticles.length) {
			let article = subArticles[i];
			const media = article['media'];
			const title = article['title'];
			const date = article['date'];
			const img = article['img'];
			const link = `https://${article['link']}`;
			
			articles.push(
				<article key={i} className='sub-article-container' id={side === true ? `side-story-container-${i}` : ''}>
					<a className='sub-article-hyperlink' href={link} id={side === true ? `side-story-${i}` : ''} target='_blank'>
					<span id='media'>{media}</span>
					<h3 id='title'>{title}</h3>
					<span id='date'>{date}</span>
						<img src={img}/>
					</a>
				</article>
			)

			i += 1;
		}

		return articles;
	}

	const subArticles = news?.slice(6);
	const leaders = news?.slice(0, 6);

	if (isLoading === true || news === undefined) {
		return <LoadingMessage />
	}

	return (
		<div className='news-timeline'>
			<h1>Leaders</h1>
			<NewsTimelineFrontpage leaders={leaders}/>
			<SubArticlesTimeline subArticles={subArticles} printArticles={printArticles}/>
		</div>
	)
}

export default NewsTimeline;