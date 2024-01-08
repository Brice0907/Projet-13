export const userProfile = async (JWT) => {

    const token = JWT.body.token

    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json;charset=UTF-8'
            },
        });
        const profilData = await response.json();

        console.log(profilData);
    } catch (error) {
        console.log(error);
    }
}