import './App.css';
import Hot from "./components/Hot/Hot";
import Square from "./components/Ad/Square/Square";
import Search from "./components/Search/Search";
import Rectangle from "./components/Ad/Rectangle/Rectangle";
import Columns from "./components/Columns/Columns";

function App() {
    return (
        <div className="App">
            <div className="hot">
                <Hot/>
                <Square/>
            </div>
            <Search/>
            <Rectangle/>
            <Columns/>
        </div>
    );
}

export default App;
