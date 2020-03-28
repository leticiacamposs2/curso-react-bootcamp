import React from "react";
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    address: {
        street: "",
        number: "",
        city: ""
    },
    password: "",
    confirmPassword: ""
};

const MyForm = () => {
    const onSubmit = values => { };

    const formik = useFormik({
        initialValues,
        onSubmit
    });

    return (
    <div>
        <form>
            <input placeholder="Name" {...formik.getFieldProps("name")} />
            <br />
            <input placeholder="Email" {...formik.getFieldProps("email")} />
            <br />
            <input placeholder="Password" {...formik.getFieldProps("password")} />
            <br />
            <input
                placeholder="confirm password"
                {...formik.getFieldProps("confirmPassword")}
            />
            <br />
            <input
                placeholder="Address"
                {...formik.getFieldProps("address.street")}
            />
            <br />
            <input placeholder="City" {...formik.getFieldProps("address.city")} />
        </form>
        <div style={{ textAlign: "left" }}>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        </div>
    </div>
    );
};

export default MyForm;