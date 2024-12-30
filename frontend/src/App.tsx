import Routes from "./Routes/Routes";
import "./index.css";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes />
            </header>
        </div>
    );
}

export default App;
