import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

const Nations = () => {
	
	const nations = {
		'Europe': ['England', 'France', 'Spain', 'Germany'],
		'Africa': ['Egypt', 'Senegal', 'Ghana', 'Nigeria'],
		'North America': ['United States', 'Canada', 'Mexico'],
		'South America': ['Brazil', 'Argentina', 'Chile', 'Peru']
	}

	const listNations = (nations) => {
		return (
			<div>
				{Object.entries(nations).map(([continent, countries]) => (
					<div key={continent}>
						<h3>{continent}</h3>
						<ul>
							{countries.map(country => (
								<li key={country}>{country}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		)
	}

	return (
		<div className='nations'>
			{listNations(nations)}
		</div>
	)
}

export default Nations