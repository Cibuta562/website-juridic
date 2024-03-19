import './formPayment.css';
import {useState} from "react";
import Menu from "../menu/menu";
import Subsol from "./subsol";
import {Link} from "react-router-dom";


function Payment() {


    const [formData, setFormData] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div style={{width: "100%"}}>
            <Menu/>
            <div className="heading-payment">

            </div>
            <div className="div-payment">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nume"
                            name="input1"
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
                            name="input2"
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
                            name="input3"
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
                            name="input4"
                            value={formData.input4}
                            onChange={handleInputChange}
                        />
                        <hr className="decoration-line" />
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
