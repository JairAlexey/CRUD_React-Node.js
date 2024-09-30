import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { isAuthenticated, logout, user} = useAuth();
    return (
        <nav>
            <h1>CrudProductos</h1>
            <ul>
                {isAuthenticated ? (
                <>
                    <li>
                        <a href="/add-products">Nuevo producto</a>
                        <a href="/" onClick={() => {logout();}}>Logout</a>
                    </li>
                </>
                ) : (
                <>
                    <li>
                        <a href="/login">Login</a>
                        <a href="/signup">Signup</a>
                    </li>
                </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;