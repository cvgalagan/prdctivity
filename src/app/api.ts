import axios from "axios"


const instanceConfig = {
    baseURL: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    timeout: 25000,
    withCredentials: true
}

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
}

export const apiInstance = axios.create(instanceConfig)
export const fetchGraphQl = <T>(query: string): Promise<T> =>
    apiInstance.post("", { query }, { headers }).then(response => response.data)