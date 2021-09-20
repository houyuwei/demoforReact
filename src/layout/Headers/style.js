import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 60px;
	display:flex;
	justify-content:space-around;
	align-items:center;
	background-color: #ffffff
`;

export const Logo = styled.a.attrs({
	href: '/'
})`
	display:block;
	width: 107px;
	height: 32px;
	background: url(${logoPic});
	background-size: contain;
`;