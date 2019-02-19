const apiManager = {
    contact: () => {
        return fetch("http://localhost:8088/contact")
        .then(contact => contact.json())
    },
    newContact: (contact) => {
        return fetch("http://localhost:8088/contact",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)

        })


    }
}

export default apiManager;