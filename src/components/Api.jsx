import axios from "axios";

const URL = 'https://659d53e2633f9aee7909313d.mockapi.io/contacts'

const fetchContacts = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        throw new Error('Wystąpił problem podczas pobierania kontaktów');
    }
}

const addNewContact = async (contact) => {
    try {
        const response = await axios.post(URL, contact);
        return response.data;
    } catch (error) {
        throw new Error('Wystąpił problem podczas dodawania kontaktu');
    }
}

const deleteContact = async (contactId) => {
    try {
        await axios.delete(`${URL}/${contactId}`);
        return contactId;
    } catch (error) {
        throw new Error('Wystąpił problem podczas usuwania kontaktu');
    }
}


const apiActions = { fetchContacts, addNewContact, deleteContact };

export default apiActions