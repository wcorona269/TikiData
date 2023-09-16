import React, { useState, useEffect } from 'react'

const SubArticlesTimeline = ({subArticles, printSubArticles}) => {
	const [currentPage, setCurrentpage] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);
	const splitArticleIntoPages = (subArticles, articlesPerPage = 4) => {
		const result = [];
		for (let i = 0; i < subArticles.length; i+= articlesPerPage) {
			result.push(subArticles.slice(i, i + articlesPerPage))
		}
		return result;
	}
	
	const articlesByPage = splitArticleIntoPages(subArticles);
	
	const displayButtons = () => {
		console.log(scrollPosition)
		let buttons = []
		for (let i = scrollPosition; i < scrollPosition + 5; i++) {
			buttons.push(
				<button className={currentPage === i ? 'current-page' : 'other-page'} key={i} onClick={() => setCurrentpage(i)}>
					{i + 1}
				</button>
			)
		}
		return buttons;
	}

	return (
		<>
			<div className='sub-articles'>
				<h1>More News</h1>
				{printSubArticles(articlesByPage[currentPage])}
			</div>
			<p id='page-selector'>
				Page
			</p>
			<div className='news-timeline-page-buttons'>
				{scrollPosition >= 2 && <button className='news-scroll-button' onClick={() => setScrollPosition(scrollPosition - 2)}><i class="fa-solid fa-caret-left"></i></button>}
				<div id='news-timeline-pages'>
					{displayButtons(scrollPosition)}
				</div>
				{scrollPosition <= articlesByPage.length - 2 && <button className='news-scroll-button' onClick={() => setScrollPosition(scrollPosition + 2)}><i class="fa-solid fa-caret-right"></i></button>}
			</div>
		</>
	)
} 

export default SubArticlesTimeline;