import React from 'react'

const SeasonSelect = ({season, showSeason, setShowSeason, handleSeasonChange}) => {
	return (
		<div id='league-profile-season-select'>
			<div id='dropdown-wrapper'>
				<div id='selected-season' onClick={() => setShowSeason(!showSeason)}>
					Season: {season}
				</div>
				{showSeason &&
					<ul id='season-select-options' onMouseLeave={() => setShowSeason(false)}>
						<li value='2023/24' onClick={handleSeasonChange}>2023/24</li>
						<li value='2022/23' onClick={handleSeasonChange}>2022/23</li>
						<li value='2021/22' onClick={handleSeasonChange}>2021/22</li>
						<li value='2020/21' onClick={handleSeasonChange}>2020/21</li>
						<li value='2019/20' onClick={handleSeasonChange}>2019/20</li>
						<li value='2018/19' onClick={handleSeasonChange}>2018/19</li>
						<li value='2017/18' onClick={handleSeasonChange}>2017/18</li>
						<li value='2016/17' onClick={handleSeasonChange}>2016/17</li>
						<li value='2015/16' onClick={handleSeasonChange}>2015/16</li>
						<li value='2014/15' onClick={handleSeasonChange}>2014/15</li>
						<li value='2013/14' onClick={handleSeasonChange}>2013/14</li>
						<li value='2012/13' onClick={handleSeasonChange}>2012/13</li>
						<li value='2011/12' onClick={handleSeasonChange}>2011/12</li>
						<li value='2010/11' onClick={handleSeasonChange}>2010/11</li>
						<li value='2009/10' onClick={handleSeasonChange}>2009/10</li>
						<li value='2008/09' onClick={handleSeasonChange}>2008/09</li>
						<li value='2007/08' onClick={handleSeasonChange}>2007/08</li>
						<li value='2006/07' onClick={handleSeasonChange}>2006/07</li>
						<li value='2005/06' onClick={handleSeasonChange}>2005/06</li>
						<li value='2004/05' onClick={handleSeasonChange}>2004/05</li>
						<li value='2003/04' onClick={handleSeasonChange}>2003/04</li>
						<li value='2002/03' onClick={handleSeasonChange}>2002/03</li>
						<li value='2001/02' onClick={handleSeasonChange}>2001/02</li>
						<li value='2000/01' onClick={handleSeasonChange}>2000/01</li>
					</ul>
				}
			</div>
		</div>
	)
}

export default SeasonSelect