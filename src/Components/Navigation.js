import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/pdf-modifier">Doc Gen</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/pdf-modifier">Home</Nav.Link>
                    <Nav.Link href="/pdf-modifier/create">Create</Nav.Link>
                    <Nav.Link href="/pdf-modifier/email">Email</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation;