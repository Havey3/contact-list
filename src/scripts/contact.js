const contactComponent = (singleContact) => {
    return `<div id="attempt">
    <h1>${singleContact.firstName} ${singleContact.lastName}</h1>
    <p>${singleContact.address}</p>
    <p>${singleContact.phone}</p>
    </div>`
}

export default contactComponent;