import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li key={contact.id} className={css.listItem}>
                    <Contact contactItem={contact} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
    );
}
