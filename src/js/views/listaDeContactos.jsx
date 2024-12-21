import React, { useContext } from "react";
import { CartaDeContactos } from "../component/cartaDeContactos.jsx";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const ListaDeContactos = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container p-0 mt-5 mb-5 d-flex justify-content-between">
                <Link to="/">
                    <button className="btn btn-primary">Back home</button>
                </Link>
                <Link to={'/viewAddContact'} className="btn btn-success"> añadir nuevo contacto </Link>
            </div>

            <div className="text-center">
                {store.contacts?.map((contact) => {
                    return <CartaDeContactos key={contact.id}
                        name={contact.name}
                        phone={contact.phone}
                        email={contact.email}
                        address={contact.address}
                        contactId={contact.id} />
                })}
            </div>
        </>
    );
}
