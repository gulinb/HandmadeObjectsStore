

export const getCollection = async (collection) => {

    
    const response = await fetch('https://blinworx.com/api/'+collection)
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

export const addElement = async (collectionId, element) => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(element)
    };

    const response = await fetch('https://blinworx.com/api/'+collectionId, requestOptions);
    response.json().then(response => console.log(response)).catch(err => console.log(err))

}

export const removeElement = async (collectionId, element) => {
  
    const requestOptions = {
        method: 'DELETE'
    }

    const response = await fetch('https://blinworx.com/api/'+collectionId+'/'+element.id, requestOptions);
    response.json().then(response => console.log(response)).catch(err => console.log(err))

    }


export const findElement = async (collectionId, elementId) => {
    const response = await fetch('https://blinworx.com/api/'+collectionId+'/'+elementId)
    const data = await response.json();

    return data
}

export const findComanda = async (nume, prenume, total) => {
    const response = await fetch('https://blinworx.com/api/comenzi/'+nume+'/'+prenume+'/'+total)
    const responseData = await response.json();

    return responseData
}

export const updateElement = async (collectionId, element, id) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(element)
    };

    const response = await fetch('https://blinworx.com/api/'+collectionId+'/'+id, requestOptions);
    const data = await response.json()
    console.log(data)
}