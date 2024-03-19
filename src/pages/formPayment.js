import './formPayment.css';
import {useRef, useState} from "react";
import Menu from "../menu/menu";
import Subsol from "./subsol";
import emailjs from '@emailjs/browser';

import {Link} from "react-router-dom";


function Payment() {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if selectedFiles is null or undefined before accessing its length property
        const filesLength = selectedFiles ? selectedFiles.length : 0;
        if (filesLength > 0) {
            // Do something with the selected files, like uploading them
            console.log(selectedFiles);
            // Reset the selected files state
            setSelectedFiles([]);
        } else {
            // Handle case where no files are selected
            console.error('No files selected.');
        }

        emailjs.sendForm('service_5rasdtm', 'template_iq97n57', form.current, 'Vo_OfRgK6DeUPu2kL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();

    const handleFileChange = (event) => {


        const files = event.target.files;
        const newSelectedFiles = [];


        if (files.length > 5) {
            setErrorMessage('Please select up to 5 files.');
            return;
        }

        // Limit the selection to a maximum of 5 files
        for (let i = 0; i < Math.min(files.length, 5); i++) {
            newSelectedFiles.push(files[i]);
        }

        setSelectedFiles(newSelectedFiles);
        setErrorMessage('');
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };


    return (
        <div style={{width: "100%"}}>
            <Menu/>
            <div className="heading-payment">

            </div>
            <div className="div-payment">
            <form ref={form} onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nume"
                            name="firstName"
                            value={formData.input1}
                            onChange={handleInputChange}
                        />
                        <hr className="decoration-line" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Prenume"
                            name="lastName"
                            value={formData.input2}
                            onChange={handleInputChange}
                        />
                        <hr className="decoration-line" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={formData.input3}
                            onChange={handleInputChange}
                        />
                        <hr className="decoration-line" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Telefon"
                            name="phone"
                            value={formData.input4}
                            onChange={handleInputChange}
                        />
                        <hr className="decoration-line" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fileInput" className="label-form">Alegeti cel mult 5 fisiere:</label>
                        <input
                            type="file"
                            id="fileInput"
                            name="selectedFiles"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="file-input"
                            multiple
                            accept="image/*"
                        />
                        <button type="button" className="choose-file-button" onClick={handleButtonClick}>
                            Alege fisierele
                        </button>
                        {errorMessage && <p className="files-selected">{errorMessage}</p>}
                        <p className="files-selected">{selectedFiles.length === 1 ? "1 fisiser selectat" : `${selectedFiles.length} fisiere selectate`}</p>
                        {selectedFiles.length > 0 && (
                            <ul className="files-selected-list">
                                {selectedFiles.map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <p className="textarea-title">Mesaj</p>
                <div className="form-group-area">
                  <textarea
                      style={{ minHeight: '150px', resize: 'vertical' }}
                      className="form-control"
                      // placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Trimite</button>
            </form>
            <Subsol/>
            </div>
        </div>
    );
}

export default Payment;
