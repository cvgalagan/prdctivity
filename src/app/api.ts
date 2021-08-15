import axios from "axios"

const instanceConfig = {
    baseURL: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    timeout: 25000,
    withCredentials: true
}

export const apiInstance = axios.create(instanceConfig)
