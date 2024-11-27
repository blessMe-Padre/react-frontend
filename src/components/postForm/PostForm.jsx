import { useState } from 'react';


export default function PostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const postData = {
        title: title,
        content: content
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/api2/wp-json/wp/v2/posts/', {
                method: "POST",
                headers: {
                    'Authorization': 'Basic ' + btoa('admin:admin'),
                    'Content-Type': 'application/json',
                },
                // credentials: 'include',
                body: JSON.stringify(postData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            }

        } catch (err) {
            console.log(err);

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Заголовок:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Контент:</label>
                    <input
                        type="text"
                        name="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Отправить</button>
            </form>

        </div>
    )
}
