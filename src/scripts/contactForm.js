import apiManager from "./contactCollection.js"
import objectBuilder from "./objectBuilder.js";
import printContacts from "./contactList.js";
const print = {
printForm: () => {
    return `
    <section id="contact-form">
    <form id="form">
      <input id="first" type="text" placeholder="FirstName">
      <input id="last" type="text" placeholder="LastName">
      <input id="phone" type="text" placeholder="Phone Number">
      <input id="address" type="text" placeholder="Address">
      <form>
    </section>
    <button id="button">New Contact</button>
    `
},

click: () => {
    document.querySelector("#button").addEventListener("click", () =>{
    apiManager.newContact(objectBuilder(document.querySelector("#first").value, document.querySelector("#last").value, document.querySelector("#address").value, document.querySelector("#phone").value)).then(printContacts)
    })
}
}

export default print

