const head = "http://localhost:5226/api/";

const Apis = {
    auth: {
        login: head + "Auth/Login",
        register: head + "Auth/Register",
        token: head + "Auth/token",
    },
    discusion: {
        getDiscusions: head + "Discusion"
    },
    category: {
        getCategories: head + "Category"
    }
}
export default Apis;