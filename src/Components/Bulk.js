import { React } from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import download from 'downloadjs';
import swal from 'sweetalert';
import pdfCompletion from '../images/pdfs/certificate-of-completion.pdf';
import '../Styles/Bulk.css';

export default function Bulk() {
    const getData = async () => {
        try {
            const res = await fetch("https://sheet.best/api/sheets/ac8e9c23-80d3-45a5-92fa-72e163678ff4");
            const data = await res.json();
            // Fetch an existing PDF document
            const existingPdfBytes = await fetch(pdfCompletion).then(res => res.arrayBuffer());

            // Load a PDFDocument from the existing PDF bytes
            const pdfDoc = await PDFDocument.load(existingPdfBytes)

            // Embed the Helvetica font
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

            // Get the first page of the document
            const pages = pdfDoc.getPages()
            const firstPage = pages[0]

            // Get the width and height of the first page
            const { width, height } = firstPage.getSize();

            var space = 0;

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].fullname.length; j++) {
                    space += 5.5
                }

                firstPage.drawText(data[i].fullname, {
                    x: (width / 2) - space,
                    y: (height / 2) + 95,
                    size: 22,
                    font: helveticaFont,
                    color: rgb(0, 0, 0),
                })

                firstPage.drawText(data[i].timestamp, {
                    x: 74,
                    y: 145,
                    size: 12,
                    font: helveticaFont,
                    color: rgb(0, 0, 0)
                })

                const pdfBytes = await pdfDoc.save();

                download(pdfBytes, `${data[i].fullname}_${data[i].timestamp}.pdf`, "application/pdf");
            }
            swal("Success", "please check your downloads", "success").then(() => {
                window.location = '/';
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="bulk-content">
            <h1 className="bulk-h1">Click the button below to generate the data from excel sheet in bulk</h1>
            <button onClick={getData}>Bulk Generate</button>
        </div>
    );
}
