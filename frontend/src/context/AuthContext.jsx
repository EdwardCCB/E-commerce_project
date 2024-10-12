import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config.jsx';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false); // Para evitar que cargue indefinidamente
        });

        return unsubscribe; // Limpia el listener cuando el componente se desmonta
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};