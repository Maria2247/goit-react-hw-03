import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList.jsx";
import initialList from "../../contactList.json";

export default function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = window.localStorage.getItem("saved-contacts");
        const parsedContacts = savedContacts ? JSON.parse(savedContacts) : null;
        return parsedContacts && parsedContacts.length > 0 ? parsedContacts : initialList;
    });

    const [search, setSearch] = useState("");

    const addContact = (newContact) => {
        setContacts((currentContacts) => {
            return [...currentContacts, newContact];
        });
    };

    const deleteContact = (contactId) => {
        setContacts((currentContacts) => {
            console.log(currentContacts);
            return currentContacts.filter((contact) => contact.id !== contactId);
        });
    };

    useEffect(() => {
        window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
    }, [contacts]);

    const searchedContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={search} onSearch={setSearch} />
            <ContactList contacts={searchedContacts} onDelete={deleteContact} />
        </div>
    );
}
