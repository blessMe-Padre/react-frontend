import axios from 'axios';
import { useState } from 'react';
import successImg from './../../../public/success.webp';

import './form.css';

const initialFields = [
    {
        label: 'name',
        type: 'text',
        name: 'text-412',
        id: 'text-412',
        validation_error: false,
        validation_message: '',
    },
    {
        label: 'email',
        type: 'email',
        name: 'email-540',
        id: 'email-540',
        validation_error: false,
        validation_message: '',
    },
    {
        label: 'phone',
        type: 'tel',
        name: 'tel-533',
        id: 'tel-533',
        validation_error: false,
        validation_message: '',
    },
]

export default function Form() {
    const [fields, setFields] = useState(initialFields);
    const [formMessage, setFormMessage] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFields(fields.map(field => ({
            ...field,
            validation_error: false,
            validation_message: '',
        })));

        const formData = new FormData(event.target);
        formData.append("_wpcf7_unit_tag", "form_id");
        const response = await axios.post(
            'https://api.freelancer-vl.ru/wp-json/contact-form-7/v1/contact-forms/38/feedback',
            formData,
        );

        if (response.status !== 200) {
            return alert('Что-то пошло не так. Попробуйте еще раз.');
        }

        console.log('Ответ от WordPress:', response);

        if (response.data.invalid_fields && response.data.invalid_fields.length > 0) {
            setFields(fields.map(field => {
                const error = response.data.invalid_fields.find(x => x.field === field.name);

                return {
                    ...field,
                    validation_error: !!error,
                    validation_message: error ? error.message : '',
                };
            }));
        }

        setFormMessage(response.data.message);
        setIsActive(true);
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="main-form">
                {fields.map(field => (
                    <div key={field.id}>
                        <label>{field.label}</label>
                        <input type={field.type} name={field.name} id={field.id} />
                        <p className='text-red'>{field.validation_message}</p>
                    </div>
                ))}
                <button type="submit">Отправить</button>
            </form>
            <p>{formMessage}</p>


            <div className={`form-send-ok-popup ${isActive ? 'is-active' : ''}`}>
                <p>Сообщение успешно отправлено</p>
                <img src={successImg} width={100} height={100} alt="fireSpot" />
            </div>
        </>
    )
}
