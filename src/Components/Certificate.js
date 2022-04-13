import React, { useState } from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import download from 'downloadjs';
import swal from 'sweetalert';
import pdf from '../images/empty_certificate.pdf';
import '../Styles/Certificate.css';

const defaultValues = {
    firstName: '',
    lastName: '',
    date: ''
}

export default function Certificate() {

    const [values, setValues] = useState(defaultValues);
    const { firstName, lastName, date } = values;

    const onValueChange = (e) => {
        console.log(e.target.value);
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const modifyPdf = async (e) => {
        e.preventDefault()
        // Fetch an existing PDF document
        const existingPdfBytes = await fetch(pdf).then(res => res.arrayBuffer())

        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes)

        // Embed the Helvetica font
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

        // Get the first page of the document
        const pages = pdfDoc.getPages()
        const firstPage = pages[0]

        // Get the width and height of the first page
        const { width, height } = firstPage.getSize()

        var fullName = firstName + " " + lastName

        var space = 0

        for (var i = 0; i < fullName.length; i++) {
            space += 5
        }

        // Draw a string of text diagonally across the first page
        firstPage.drawText(fullName, {
            x: (width / 2) - space,
            y: (height / 2) + 95,
            size: 22,
            font: helveticaFont,
            color: rgb(0, 0, 0),
        })

        firstPage.drawText(date, {
            x: 74,
            y: 145,
            size: 12,
            font: helveticaFont,
            color: rgb(0, 0, 0)
        })

        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save()

        // Trigger the browser to download the PDF document
        download(pdfBytes, `${firstName}_${lastName}_${date}.pdf`, "application/pdf");
        swal("Success", "please check your downloads", "success").then(() => {
            window.location = '/pdf-modifier';
        });

    }

    return (
        <div className="create-content">
            <h1 className="create-h1">Create Certificate PDF</h1>
            <div className="form-container">
                <form className="submit-form" onSubmit={modifyPdf}>
                    <input
                        onChange={(e) => onValueChange(e)}
                        value={firstName}
                        id="firstName"
                        className="form-field"
                        type="text"
                        placeholder="first name"
                        name="firstName"
                        autocomplete="off"
                        required
                    />
                    <input
                        onChange={(e) => onValueChange(e)}
                        value={lastName}
                        id="lastName"
                        className="form-field"
                        type="text"
                        placeholder="last name"
                        name="lastName"
                        autocomplete="off"
                        required
                    />
                    <input
                        onChange={(e) => onValueChange(e)}
                        value={date}
                        id="date"
                        className="form-field"
                        type="date"
                        name="date"
                        autocomplete="off"
                        required
                    />
                    <button className="form-field" type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}
