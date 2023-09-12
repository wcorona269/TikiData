import React from 'react'

const NewsTimelineFrontpage = ({leaders, printSubArticles}) => {

	let urlParams = new URLSearchParams(leaders[0]['link']);
	let actualLink = urlParams.get('url');

	return (
		<div className='news-timeline-frontpage'>
			<article className='lead-story'>
				<a target='_blank' href={actualLink}>
					<div>
						<img src='https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM=' />
						<h3>
							{leaders[0]['title']}
						</h3>
					</div>
					<span>
						<p>{leaders[0]['media']}</p>
						<p>{leaders[0]['date']}</p>
					</span>
				</a>
			</article>
			{printSubArticles(leaders, true)}
		</div>
	)
}

export default NewsTimelineFrontpage