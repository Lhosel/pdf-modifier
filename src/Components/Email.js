import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import '../Styles/Email.css';

export default function Email() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wtbxanq', 'docgen_template', e.target, 'user_EkvFRAKnUfhPWR4kVvsoq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        swal("Success", "email was sent successfully", "success").then(() => {
            window.location = '/pdf-modifier';
        });
    }

    return (
        <div className="email-content">
            <h1 className="email-h1">Send Email to Recipient</h1>
            <div className="form-container">
                <form className="submit-form" onSubmit={sendEmail}>
                    <input
                        className="form-field"
                        type="text"
                        placeholder="name"
                        name="name"
                        autocomplete="off"
                        required
                    />
                    <input
                        className="form-field"
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        autocomplete="off"
                        required
                    />
                    <input
                        className="form-field"
                        type="text"
                        placeholder="subject"
                        name="subject"
                        autocomplete="off"
                        required
                    />
                    <textarea
                        className="form-field"
                        placeholder="type your message here"
                        name="message"
                        rows="8"
                        required
                    />

                    {/*<input className="form-field" type="file" name="editted_pdf"/>*/}

                    <button id="send" className="form-field" type="submit">Send</button>

                </form>
            </div>
        </div>
    );
}
