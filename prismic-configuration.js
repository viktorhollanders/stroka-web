import Prismic from "prismic-javascript";

// Prismic API endpoint 
export const apiEndpoint = "https://stroka.cdn.prismic.io/api/v2";

// Access token
export const accessToken = "";

// Prismic client object
export const client = Prismic.client(apiEndpoint, { accessToken });