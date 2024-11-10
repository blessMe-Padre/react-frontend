import { useState } from 'react';


const RegisterForm = () => {
    const headers = new Headers();

    headers.set('Content-type', 'application/json');
    headers.set('Authorization', 'Basic ' + btoa('api-admin:uuR3 S9V9 eVlR F45f YDqV NZT5'));


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const form = new FormData();
        form.append('username', formData.username);
        form.append('email', formData.email);
        form.append('password', formData.password);

        try {
            const response = await fetch('https://api.freelancer-vl.ru/wp-json/wp/v2/users/', {
                method: 'POST',
                headers: headers,
                body: form,
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess(`Пользователь успешно зарегистрирован : ${data.username}`);
                setFormData({ username: '', email: '', password: '' });
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to register user');
            }
        } catch (err) {
            setError('An error occurred: ' + err.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя пользователя:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Регистрация</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default RegisterForm;
