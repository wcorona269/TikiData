import React from 'react'

const NewsTimelineFrontpage = ({leaders, printSubArticles}) => {
	let leadStory = leaders[0];
	let urlParams = new URLSearchParams(leadStory['link']);
	let actualLink = urlParams.get('url');

	const title = leadStory['title'];
	const media = leadStory['media'];
	const date = leadStory['date'];
	const img = leadStory['img']; 

	return (
		<div className='news-timeline-frontpage'>
			<article className='lead-story'>
				<a target='_blank' href={actualLink}>
					<div>
						<img src={img} />
						<h3>
							{title}
						</h3>
					</div>
					<span>
						<p>{media}</p>
						<p>{date}</p>
					</span>
				</a>
			</article>
			{printSubArticles(leaders, true)}
		</div>
	)
}

export default NewsTimelineFrontpage