import axios from 'axios';

export const client = axios.create({
    baseURL: "https://real-pelican-23.hasura.app/api/rest/course",
    headers: {
        "x-hasura-admin-secret" : "JI0l42dqyuzi11tYlaVPB62RPM683BKymU2IlezZYB6QqM04pfjFZULoaTMhIQ0Q"
    }
});

export const getCourses = async () => {
    const response = await client.get("/")
        return response.data.miniproject_course;
};