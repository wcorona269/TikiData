import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const AccountMenu = ({ lightMode, setLightMode }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
	const username = useSelector(state => state?.users?.user?.username);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event) => {
		const name = event.currentTarget.getAttribute('name');
		if (name == 'profile') {
			navigate(`/user/${username}`)
		}
		if (name == 'logout') {
			dispatch(logoutUser());
			navigate('/welcome')
		}
		setAnchorEl(null);
	};

	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
				<Typography sx={{ minWidth: 100 }}>Contact</Typography>
				<Typography sx={{ minWidth: 100 }}>Profile</Typography>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem sx={{ paddingLeft: 0 }} >
					<Switch defaultChecked color="default" onChange={() => setLightMode(!lightMode)} />
					{
						lightMode ? 'Mode: Light' : 'Mode: Dark'
					}
				</MenuItem>
				<Divider/>
				<MenuItem onClick={handleClose} name='profile' >
					<Avatar /> My Profile
				</MenuItem>
				<MenuItem onClick={handleClose} name='logout' >
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}

export default AccountMenu;