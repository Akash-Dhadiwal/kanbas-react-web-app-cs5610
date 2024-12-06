import { Link } from "react-router-dom";
import { FaFlask } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function LandingPage() {
    return (
        <div className="d-flex justify-content-center">
            <div className="text-center mt-5">
                <h1><b>Akash Dhadiwal</b></h1>
                <h3>CS5610 Section 02</h3>

                <Link className="text-black link-underline link-underline-opacity-0" to={"/Labs"}>
                    <button className="btn btn-lg btn-info me-2">Labs</button>
                </Link>
                <Link to={"/Kanbas"}>
                    <button className="btn btn-lg btn-info me-2">Kanbas</button>
                </Link>
                <Link to={"https://github.com/Akash-Dhadiwal/kanbas-react-web-app-cs5610"}>
                    <button className="btn btn-lg btn-info me-2">React Github</button>
                </Link>
                <Link to={"https://github.com/Akash-Dhadiwal/kanbas-node-server-app"}>
                    <button className="btn btn-lg btn-info me-2">Server Github</button>
                </Link>
            </div>
        </div>
    );
}