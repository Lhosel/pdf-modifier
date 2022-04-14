import '../Styles/Select.css';
import { Row, Col } from 'react-bootstrap';

export default function Select() {
    return (
        <div className="select-content">
            <h1 className="select-h1">To generate the desired PDF, navigate to the corresponding document type and hit create</h1>
            <br />
            <Row md={5} className="row">
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <img className="image" src={require('../images/thumbnails/certificate_img.jpg')} alt="a certificate"></img>
                            <h2 className="card-title">Certificate</h2>
                            <p className="card-description">Create a certificate and fill out the necessary fields for generation.</p>
                            <div className="card-btn" onClick={e => window.location.href = "/certificate"}>Create</div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <img className="image" src={require('../images/thumbnails/ticket_img.jpg')} alt="a ticket"></img>
                            <h2 className="card-title">Ticket</h2>
                            <p className="card-description">Create a ticket and fill out the necessary fields for generation.</p>
                            <div className="card-btn" onClick={e => window.location.href = "/"}>Create</div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <img className="image" src={require('../images/thumbnails/invitation_img.jpg')} alt="a concert"></img>
                            <h2 className="card-title">Invitation</h2>
                            <p className="card-description">Create an event invitation and fill out the necessary fields for generation.</p>
                            <div className="card-btn" onClick={e => window.location.href = "/"}>Create</div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <img className="image" src={require('../images/thumbnails/diploma_img.jpg')} alt="a diploma"></img>
                            <h2 className="card-title">Diploma</h2>
                            <p className="card-description">Create a diploma for a student and fill out the necessary fields for generation.</p>
                            <div className="card-btn" onClick={e => window.location.href = "/"}>Create</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
