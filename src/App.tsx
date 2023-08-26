import Loading from './components/Loading/loading';
import { Timer } from './components/Timer/Timer';

function App() {
    return (
        <>
            <div className="app flex col">
                <Timer />
                <Loading />
            </div>
        </>
    );
}

export default App;
