import React from 'react'

const NewsTimelineFrontpage = ({leaders}) => {

	const printArticles = (articles) => {
		const result = [];
		let i = 0

		while (i < articles.length) {
			let article = articles[i];
			const media = article['media'];
			const title = article['title'];
			const date = article['date'];
			const img = article['img'];
			const link = `https://${article['link']}`;

			result.push(
				<article key={i} className='sub-article-container'>
					<a className='sub-article-hyperlink' id='leader' href={link} target='_blank'>
						<span id='media'>{media}</span>
						<h3 id='title'>{title}</h3>
						<span id='date'>{date}</span>
						<img src={img} alt=''/>
					</a>
				</article>
			)

			i += 1;
		}

		return result;
	}


	return (
		<div className='news-timeline-frontpage'>
			{printArticles(leaders)}
		</div>
	)
}

export default NewsTimelineFrontpage