import styled from "styled-components";
import NavbarMarvel from "./NavbarMarvel";

export const StyledNavbarMarvel = styled(NavbarMarvel)`

    .search {
        @extend %fa-icon;
        @extend .fas;
    
        &::after {
            content: fa-content($fa-var-search);
        }
    }

    form{
        width: 100%;
        
`;

export const Navbar = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50px;
	margin-top: 13px;
	background-color: white;
	border-bottom: 2px rgb(235, 235, 235) solid;
	@media (max-width: 500px) {
		flex-direction: column;
		height: 120px;
	}
`;

export const Form = styled.form`
	width: 100%;
`;

export const InputHeroe = styled.input`
	width: 100%;
	outline: none;
	height: 30px;
	margin-right: 50px;
	padding-left: 20px;
	border-top: 0ch;
	border-bottom: 0ch;
	border-right: 0ch;
	border-color: rgba(224, 224, 224, 0.1);
	font-size: medium;

	::placeholder {
		color: rgb(224, 224, 224);
	}
`;

export const IconNavbar = styled.img`
	width: 100px;
	height: 80px;
	margin: -20px 0 0 17px;
	padding-right: 20px;
`;

export const Icon = styled.i`
	padding: 10px 80px;
`;
