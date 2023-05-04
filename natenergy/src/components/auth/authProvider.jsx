
export default function AuthProvider(props) {

    if (JSON.parse(localStorage.getItem("UserAccess")) != null || props.authStatu == false) {
        return props.element;
    } else {
       window.location.replace("/login");
    }
}
