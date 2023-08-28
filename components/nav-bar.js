import {useState} from 'react';
import NavItem from './nav-item';

const NAV_LIST = [
	{
		text: 'Home',
		href: '/'
	},
	{
		text: 'Comics',
		href: '/comics'
	},
	{
		text: 'Art',
		href: '/art'
	},
	{
		text: 'Magic',
		href: '/magic'
	},
	{
		text: 'Pokemon',
		href: '/pokemon'
	},
	{
		text: 'About',
		href: '/about'
	},
	{
		text: 'Contact',
		href: '/contact'
	}
];

export default function NavBar() {
	const [activeNavMenu, setActiveNavMenu] = useState(false);

	return (
		<header>
			<nav className={`nav_bar`}>
				<div
					onClick={() => setActiveNavMenu(!activeNavMenu)}
					className={`nav_bar_menu_btn ml_1`}
				>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={`nav_bar_menu_div ${activeNavMenu ? 'active' : ''}`}>
					{NAV_LIST.map((listItem) => (
						<div
							onClick={() => { setActiveNavMenu(false);}}
							key={listItem.text}
						>
							<NavItem {...listItem}></NavItem>
						</div>
					))}
				</div>
			</nav>
		</header>
	);
}
