import { Message } from './components/Message/Message';
import { Timer } from './components/Timer/Timer';

function App() {
    return (
        <>
            <main className="indents-reset app flex col">
                <Message delay={3000} />
                <Timer initialValue={0} />
            </main>
        </>
    );
}

export default App;
