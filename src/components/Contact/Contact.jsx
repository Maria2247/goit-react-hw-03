import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact({ contactItem: { id, name, number }, onDelete }) {
    return (
        <>
            <div>
                <p>
                    <FaPhoneAlt style={{ marginRight: "8px", size: "12px" }} />
                    {name}
                </p>
                <p>
                    <IoPersonSharp style={{ marginRight: "8px", size: "12px" }} />
                    {number}
                </p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </>
    );
}
