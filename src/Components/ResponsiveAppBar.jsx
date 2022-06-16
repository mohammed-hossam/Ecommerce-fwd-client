import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchBar from './SearchBar';
import Divider from '@mui/material/Divider';
import CartCar from './CartCar';
// import ContactUS from './ContactUS';
import { Stack } from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { NavLink } from 'react-router-dom';

const pages = ['Products'];
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = (props) => {
	const count = props.items.length;

	return (
		<AppBar position='static'>
			<Stack divider={<Divider />} spacing={0.5}>
				<BottomAppBar count={count} />
				<SecondaryNavBar />
			</Stack>
		</AppBar>
	);
};
export default ResponsiveAppBar;

function SecondaryNavBar(props) {
	const productsCategory = [
		{ id: 0, name: 'Category-1' },
		{ id: 1, name: 'Category-2' },
		{ id: 2, name: 'Category-3' },
		{ id: 3, name: 'Category-4' },
		{ id: 4, name: 'Category-5' },
	];

	return (
		<Stack
			direction='row'
			justifyContent='space-evenly'
			alignItems='center'
			padding={1}
			spacing={5}>
			{productsCategory.map((e) => {
				return (
					<span key={e.id}>
						<NavLink to={`/Category/${e.id}`}>{e.name}</NavLink>
					</span>
				);
			})}
		</Stack>
	);
}

function BottomAppBar(props) {
	// const count = props.count;
	const [isAuth, setIsAuth] = useState(true);
	const [anchorElUser, setAnchorElUser] = useState(null);
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = (setting) => {
		setAnchorElUser(null);
		switch (setting) {
			case 'Profile':
				break;
			case 'Logout':
				setIsAuth(false);
				break;
			default:
				break;
		}
	};
	const [anchorElNav, setAnchorElNav] = useState(null);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Stack
			direction='row'
			sx={{ alignItems: 'center', justifyContent: 'space-between', px: 1 }}>
			<Typography
				variant='h6'
				noWrap
				component='a'
				href='/'
				sx={{
					mr: 2,
					display: { xs: 'none', md: 'flex' },
					fontFamily: 'monospace',
					fontWeight: 700,
					color: 'inherit',
					textDecoration: 'none',
				}}>
				E-Shop
			</Typography>

			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					onClick={handleOpenNavMenu}
					color='inherit'>
					<MenuIcon />
				</IconButton>
				<Menu
					id='menu-appbar'
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}>
					{pages.map((page) => (
						<MenuItem key={page} onClick={handleCloseNavMenu}>
							<Typography textAlign='center'>{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>

			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				{pages.map((page) => (
					<Button
						key={page}
						onClick={handleCloseNavMenu}
						sx={{ my: 1, color: 'white', display: 'block' }}>
						{page}
					</Button>
				))}
			</Box>

			<SearchBar />

			<Box>
				<CartCar />
			</Box>

			{isAuth ? (
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title='Open settings'>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar
								sx={{ width: '25px', height: '25px', bgcolor: '#1976D2' }}
								alt='U'
							/>
							<ArrowDropDownRoundedIcon style={{ color: '#fff' }} />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id='menu-appbar'
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}>
						{settings.map((setting) => (
							<MenuItem
								key={setting}
								onClick={() => handleCloseUserMenu(setting)}>
								<Typography textAlign='center'>{setting}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			) : (
				<MenuItem onClick={() => setIsAuth(true)}>Log In</MenuItem>
			)}
		</Stack>
	);
}

/*
<Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
*/
