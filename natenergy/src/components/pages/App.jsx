import Discusion from "../discusions/discusion";
import Menu from "../menu/menu";
import "./app/app.css";

export default function App() {
    return (
        <div className="app">
            <Menu />
            <Discusion />
        </div>
    );
}
