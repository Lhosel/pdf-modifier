import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Doc Gen</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/bulk">Bulk</Nav.Link>
                    <Nav.Link href="/email">Email</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation;