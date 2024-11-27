import Header from "../components/header/header";
import PostForm from "../components/postForm/PostForm";
import RegisterForm from "../components/registerForm/RegisterForm";

export default function Registration() {
    return (
        <div className="container">
            <Header />

            <div className="page-title">Регистрация</div>

            <PostForm />

            <RegisterForm />


        </div>
    );
}

