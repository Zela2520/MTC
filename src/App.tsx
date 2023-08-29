import { Message } from './components/Message/Message';
import { Main } from './components/Main/Main';

function App() {
    return (
        <>
            <main className="indents-reset app flex col">
                <Message delay={3000} />
                <Main initialValue={0} />
            </main>
        </>
    );
}

export default App;
