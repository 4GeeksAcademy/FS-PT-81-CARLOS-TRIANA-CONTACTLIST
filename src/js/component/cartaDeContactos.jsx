import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartaDeContactos = (props) => {

    const {store, actions} = useContext(Context);

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este contacto?");
        if (confirmDelete) {
            actions.deleteContact(props.contactId);
        }
    };

    const handleEdit = () => {
        actions.selectContact(store.contacts.filter(el=> el.id === props.contactId)[0])
    }

    return (
        <>
            <div className="container card mb-3 w-75" style={{ maxwidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="col-12">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.8vHyhq_nI-_RTm9K7gHSPQHaHa&pid=Api&P=0&h=180" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary p-0 d-flex">
                                <p className="px-2 mb-0">Añadir foto</p>
                                <i className="px-2 pt-1 fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body p-4">
                            <h5 className="text-start card-title mb-3"> <b>Name:</b> {props.name}</h5>
                            <p className="text-start card-text"> <b>Phone:</b> {props.phone}</p>
                            <p className="text-start card-text"> <b>Email:</b> {props.email}</p>
                            <p className="text-start card-text"> <b>Address:</b> {props.address}</p>
                        </div>
                    </div>
                    <div className="iconos col-md-4 p-4 d-flex-aling-items-start">
                        <div className="d-flex  justify-content-evenly">
                            <Link to={'/editContact/'+props.contactId} className="">
                                <button onClick={handleEdit} className="btn btn-warning border-0">
                                    <i className="fa-solid fa-user-pen"></i>
                                </button>
                            </Link>
                            <button onClick={handleDelete} className="btn btn-danger border-0 px-3">
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}