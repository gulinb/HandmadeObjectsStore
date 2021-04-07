

export const getCollection = async (collection) => {

    
    const response = await fetch('https://blinworx.com/api/produse/'+collection)
    const data = await response.json();

            const element = {               
                title : collection,
                elemente : data,
                id : collection,
                routeName: encodeURI(collection.toLowerCase())
            }

            return element
}

export const getAllCollections = async () => {
    const altele = await getCollection('altele')
    const brose = await getCollection('brose')
    const bratari = await getCollection('bratari')
    const cercei = await getCollection('cercei')
    const inele = await getCollection('inele')
    const pandantive = await getCollection('pandantive')
    const coliere = await getCollection('coliere')
    const decoratiuni = await getCollection('decoratiuni')
   
    return ({
        altele,
        brose,
        bratari,
        cercei,
        inele,
        pandantive,
        coliere,
        decoratiuni
    })
}

export const getUserAdmin = async (username, password) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: username, password: password})
    };

    const user = await fetch('https://blinworx.com/api/userAdmin', requestOptions)
    const data = await user.json()
    console.log(data)
    return data
}

export const getComenzi = async () => {
    const comenzi = await fetch('https://blinworx.com/api/comenzi')
    const data = await comenzi.json(); 

    return data
}

export const getComenziProduse = async () => {
    const produse = await fetch('https://blinworx.com/api/comenziProduse')
    const data = await produse.json()

    return data
}

export const addElement = async (collectionId, element) => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(element)
    };

    const response = await fetch('https://blinworx.com/api/'+collectionId, requestOptions);
    response.json().then(response => console.log(response)).catch(err => console.log(err))

}

export const removeElement = async (element) => {
  
    const requestOptions = {
        method: 'DELETE'
    }

    const response = await fetch('https://blinworx.com/api/produse/'+element.id, requestOptions);
    response.json().then(response => console.log(response)).catch(err => console.log(err))

    }


export const findElement = async (collectionId, elementId) => {
    const response = await fetch('https://blinworx.com/api/produse/'+collectionId+'/'+elementId)
    const data = await response.json();

    return data
}

export const findComanda = async (nume, prenume, total) => {
    const response = await fetch('https://blinworx.com/api/comenzi/'+nume+'/'+prenume+'/'+total)
    const responseData = await response.json();

    return responseData
}

export const updateElement = async (element, id) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(element)
    };

    const response = await fetch('https://blinworx.com/api/produse/'+id, requestOptions);
    const data = await response.json()
    console.log(data)
}

export const updateComanda = async (element, id) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(element)
    };

    const response = await fetch('https://blinworx.com/api/comenzi/'+id, requestOptions);
    const data = await response.json()
    console.log(data)
}