import './club-info-bar.scss';
import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClubSquadDashboard from './club-squad-dashboard';
import ClubStatsDashboard from './club-stats-dashboard';
import ClubFixturesDashboard from './club-fixtures-dashboard';

const ClubInfoBar = ({ fixtures, squad, stats, selectedTab }) => {

	squad = squad[0]['players'];

	return (
		<div>
			<div className='club-profile-main'>
				{selectedTab === 1 && <ClubFixturesDashboard fixtures={fixtures} />}
				{selectedTab === 2 && <ClubSquadDashboard squad={squad} />}
				{selectedTab === 3 && <ClubStatsDashboard stats={stats}/>}
			</div>
		</div>
	)
}

export default ClubInfoBar;