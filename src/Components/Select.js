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
                            <img className="image" src={require('../images/thumbnails/completion_img.jpg')} alt="a certificate"></img>
                            <h2 className="card-title">Completion</h2>
                            <p className="card-description">Create a completion certificate and fill out the necessary fields for generation.</p>
                            <div className="card-btn" onClick={e => window.location.href = "/completion"}>Create</div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <img className="image" src={require('../images/thumbnails/participation_img.jpg')} alt="a certificate"></img>
                            <h2 className="card-title">Participation</h2>
                            <p className="card-description">Create a participation certificate and fill out the necessary fields for generation.</p>
                            <div className="card-btn" onClick={e => window.location.href = "/participation"}>Create</div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <img className="image" src={require('../images/thumbnails/diploma_img.jpg')} alt="a diploma"></img>
                            <h2 className="card-title">Diploma</h2>
                            <p className="card-description">Create a diploma for a student and fill out the necessary fields for generation.</p>
                            <div className="card-btn" onClick={e => window.location.href = "/diploma"}>Create</div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <img className="image" src={require('../images/thumbnails/placeholder_img.jpg')} alt="a placeholder"></img>
                            <h2 className="card-title">Placeholder</h2>
                            <p className="card-description">This is a placeholder card for a future option.</p>
                            <div className="card-btn" onClick={e => window.location.href = "/"}>Create</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
