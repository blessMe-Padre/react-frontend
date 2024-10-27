import Header from "../components/header/header";
import Form from "../components/form/form";

export default function Contact() {
    return (
        <div className="container">
            <Header />
            <h2 className='page-title'>Форма обратной связи</h2>
            <div className='flex-wrapper'>
                <Form />
            </div>
        </div>
    )
}
