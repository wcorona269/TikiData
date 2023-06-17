import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ClubScheduleDashboard from './clubScheduleDashboard';
import ClubSquadDashboard from './clubSquadDashboard';
import ClubStatsDashboard from './clubStatsDashboard';

const ClubInfoBar = () => {
	return (
		<div>
			<ClubScheduleDashboard/>
			<ClubSquadDashboard/>
			<ClubStatsDashboard/>
		</div>
	)
}

export default ClubInfoBar;