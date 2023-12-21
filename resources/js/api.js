import axios from "axios";

const baseUrl = "https://deviaxdey.com/public/api";

export async function getTeachers() {
    try {
        const response = await axios({
            url: baseUrl + "/docentes",
            method: "GET",
        });

        return response.data;
    } catch (error) {
        console.log(apiKey);
        console.log(error);
        return [];
    }
}

export async function createTeacher(teacherData) {
    try {
        const response = await axios.post(baseUrl + "/docente", teacherData);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Si hay una respuesta del servidor con un código de estado no exitoso
            console.log("Status:", error.response.status);
            console.log("Data:", error.response.data);
            console.log("Headers:", error.response.headers);
        } else if (error.request) {
            // Si la solicitud fue hecha pero no se recibió respuesta
            console.log("Request:", error.request);
        } else {
            // Otro tipo de error
            console.log("Error:", error.message);
        }
        return null;
    }
}
