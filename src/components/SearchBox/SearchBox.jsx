import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
    const boxId = useId();
    return (
        <div className={css.searchForm}>
            <label htmlFor={boxId}>Find contacts by name</label>
            <input type="text" id={boxId} className={css.input} value={value} onChange={(evt) => onSearch(evt.target.value)} />
        </div>
    );
}
