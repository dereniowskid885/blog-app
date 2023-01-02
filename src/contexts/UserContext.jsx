import { useContext, createContext, useState, useEffect } from 'react';

const User = createContext();

function UserContext({ children }) {
    const [ user, setUser ] = useState({});
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if (!token) {
            return;
        }

        fetch('http://localhost:8000/api/user/', {
            method: 'GET',
            headers: { 'Authorization': `Token ${token}` }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                localStorage.removeItem('authToken');
            }
        })
        .then(data => {
            if (data) {
                setUser(data[0]);
            }
        })
        .catch(error => console.log('Error: ', error));
    }, []);

    return (
        <User.Provider value={{ user }}>
            {children}
        </User.Provider>
    );
}

export default UserContext;

export const useUser = () => {
    return useContext(User);
}