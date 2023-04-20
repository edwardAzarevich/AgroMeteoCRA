import axios from "axios";

class SignServices {

    axiosPost = async (body) => {
        let res = await axios({
            method: 'post',
            url: 'http://10.0.25.63:8000/api/user/login/',
            data: body,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
            },
            withCredentials: true
        });

        return await res.json();
    }

    postLog = async (username, password) => {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        const res = await this.axiosPost(body);
        return await res;
    }
}

export default SignServices;