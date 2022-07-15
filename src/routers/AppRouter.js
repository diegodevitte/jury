import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "../componets/navbar/Navbar";
import HomePage from "../componets/pages/HomePage";
import NotFoundPage from "../componets/pages/NotFoundPage";
import ProyectsPage from "../componets/pages/ProyectsPage";

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/proyects" component={ProyectsPage} />
                <Route exact path="/" component={HomePage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Router >
    );
}
