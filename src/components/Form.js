import React from 'react';


export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='email'
                    />
                </label>
                <label>Password&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </label>
                <label>Terms of Service
                    <input
                        checked={values.terms}
                        onChange={onCheckboxChange}
                        name='terms'
                        type='checkbox'
                    />
                </label>
                <button>Submit</button>
            </form>
        </div >
    )
};