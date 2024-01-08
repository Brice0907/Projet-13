import { userProfile } from "./profile";

export const userLogin = async (email, password) => {

    const body = {
        email: email,
        password: password
    }

    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(body)
        });
        const userData = await response.json();

        userProfile(userData)
    } catch (error) {
        console.log(error);
    }
}