import './loading-screen.scss';
import React from 'react'
import loadingGif from '../../../images/loading_gif.gif';

const LoadingMessage = () => {
	return (
		<div className='loading-screen'>
			<h1>Loading...</h1>
			<img src={loadingGif}/>
		</div>
	)
}

export default LoadingMessage;