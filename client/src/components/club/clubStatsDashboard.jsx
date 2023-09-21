import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchClubStats } from '../../actions/api_actions';

const ClubStatsDashboard = () => {
	const { clubId } = useParams();

	return (
		<div>ClubStatsDashboard</div>
	)
}

export default ClubStatsDashboard;