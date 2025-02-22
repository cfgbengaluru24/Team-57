import {
	HiOutlineHome,
	HiOutlineTicket,
	HiOutlineUsers,
	HiOutlineDocumentPlus,
} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const StyledNavlink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		color: var(--color-grey-600);
		font-size: 1.6rem;
		font-weight: 500;
		padding: 1.2rem 2.4rem;
		transition: all 0.3s;
	}

	/* This works because react-router places the active class on the active NavLink */
	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-grey-800);
		background-color: var(--color-grey-50);
		border-radius: var(--border-radius-sm);
	}

	& svg {
		width: 2.4rem;
		height: 2.4rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: var(--color-brand-600);
	}
`;

export default function MainNav() {
	return (
		<nav className={'pt-28'}>
			<NavList>
				<li>
					<StyledNavlink to="/dashboard">
						<HiOutlineHome /> Home
					</StyledNavlink>
				</li>
				<li>
					<StyledNavlink to="/applicants">
						<HiOutlineUsers /> Beneficiary
					</StyledNavlink>
				</li>
				<li>
					<StyledNavlink to="/ticket">
						<HiOutlineTicket /> Raise Ticket
					</StyledNavlink>
				</li>
				<li>
					<StyledNavlink to="/bulkupload">
						<HiOutlineDocumentPlus /> Bulk Upload Beneficiaries
					</StyledNavlink>
				</li>
			</NavList>
		</nav>
	);
}
