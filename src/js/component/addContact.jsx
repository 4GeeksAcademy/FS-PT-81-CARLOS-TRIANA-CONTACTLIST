import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {

    const { store, actions } = useContext(Context);

    const [contactData, setContactData] = useState({
        name: '', phone: '', email: '', address: ''
    })
    console.log(contactData)
    const handleChange = e => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(contactData)
        actions.addNewContact(contactData)
    }

    const navigate = useNavigate();

    const handleCancelar = () => navigate('/contactos')


    return (
        <>
            <div className="container p-0 mt-5 mb-5 d-flex justify-content-between">
                <Link to={'/contactos'} className="btn btn-primary"> Regresar a contactos </Link>
            </div>

            <h1 className="text-center">Adding new contact</h1>

            <div className="container text-center w-75">
                
                    <form onSubmit={handleSubmit} className="d-flex flex-column">
                        <input type="text" className="bg-light border-0 m-1" value={contactData.name} placeholder="name" name="name" onChange={handleChange} required />
                        <input type="text" className="bg-light border-0 m-1" value={contactData.phone} placeholder="phone" name="phone" onChange={handleChange} required />
                        <input type="text" className="bg-light border-0 m-1" value={contactData.email} placeholder="email" name="email" onChange={handleChange} required />
                        <input type="text" className="bg-light border-0 m-1" value={contactData.address} placeholder="address" name="address" onChange={handleChange} required />
                        <div className="d-flex justify-content-between mt-3">
                            <input type="submit" className="btn btn-success" value={'Guardar'} />
                            <button className="btn btn-danger" onClick={handleCancelar}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                
            </div>
        </>
    )

}