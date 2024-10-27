import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/header/header";


export default function ComponentsPage() {
    // массив с названиями компонентов
    const items = ['form', 2, 3, 4, 5, 6]

    return (

        <div className="container">
            <Header />
            <div className="page-title">Страница с компонентами</div>

            <div className="components-wrapper">
                <div className="components-list">
                    {items.map((item) => (
                        <NavLink key={item} to={`/react-frontend/components/${item}`}
                            className={({ isActive }) => {
                                return isActive ? 'text-orange' : ''
                            }}
                        >
                            Компонент {item}
                        </NavLink>
                    ))}
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
