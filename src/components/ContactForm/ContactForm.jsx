import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
    const nameId = useId();
    const numberId = useId();

    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    };

    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "too long!").required(),
        number: Yup.string()
            .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in format 000-00-00")
            .min(3, "Too short!")
            .max(50, "too long!")
            .required(),
    });

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
            <Form className={css.form}>
                <label htmlFor={nameId} className={css.label}>
                    Name
                </label>
                <Field type="text" name="name" className={css.input} id={nameId} />
                <ErrorMessage name="name" component="div" className={css.error} />

                <label htmlFor={numberId} className={css.label}>
                    Number
                </label>
                <Field type="tel" name="number" className={css.input} id={numberId} />
                <ErrorMessage name="number" component="div" className={css.error} />

                <button type="submit" className={css.btn}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
