import React from "react";
import "../styles/style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import havenimg from '../images/havenimg.png'


function Header() {
	return (
		<div>
			{["xl"].map((expand) => (
				<Navbar key={expand} expand={expand} className="mb-3">
					<Container className="container" fluid>
						<Navbar.Brand href="#">
							{" "}
							<img src={havenimg} alt="logo" />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								></Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Nav.Link href="#home">Home</Nav.Link>
									<Nav.Link href="#price">Price</Nav.Link>
									<Nav.Link href="#news">News</Nav.Link>
									<Nav.Link href="#contact">Contact</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</div>
	);
}

export default Header;
