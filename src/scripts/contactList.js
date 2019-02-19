import apiManager from "./contactCollection.js"
import contact from "./contact.js"

const printContacts = () => {
    apiManager.contact()
    .then(parsedContacts => {

        document.querySelector("#taco").innerHTML = ""

        parsedContacts.forEach(singleContact => {
            document.querySelector("#taco").innerHTML += contact(singleContact)
        })
    })
}

export default printContacts

