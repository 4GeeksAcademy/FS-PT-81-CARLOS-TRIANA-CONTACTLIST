const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			contacts: []
		},
		actions: {

			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/contactList/contacts")
					.then(respuesta => {
						if (!respuesta.ok) {
							throw new Error('Error al obtener datos');
						}
						return respuesta.json();
					})
					.then(datos => {
						console.log('respuesta de la api', datos)
						setStore({ contacts: datos.contacts })
					})
					.catch(error => {
						console.error('Error en getContacts:', error.message);
						console.error(error);
					});
			},

			addNewContact: async (contact) => {
				try {
					const respuesta = await fetch('https://playground.4geeks.com/contact/agendas/contactList/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(contact)
					})
					if (!respuesta.ok) throw new Error('error al crear el contacto')
					return getActions().getContacts()
				} catch (error) {
					console.error(error);
				}
			},

			deleteContact: async (id) => {
				try {
					const respuesta = await fetch('https://playground.4geeks.com/contact/agendas/contactList/contacts/'+id, {
						method: 'DELETE'
					})
					if (!respuesta.ok) throw new Error('error al borrar el contacto')
						return getActions().getContacts()
				} catch (error) {
					console.error(error);
				}
			},




			selectContact: (contact) => setStore({select: contact}),

			editContact: async (contact) => {
				try {
					const respuesta = await fetch('https://playground.4geeks.com/contact/agendas/contactList/contacts/'+contact.id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(contact)
					})
					if (!respuesta.ok) throw new Error('error al actualizar contacto')
						return getActions().getContacts()
				} catch (error) {
					console.error(error);
				}
			},




		},

	}
};


export default getState;
