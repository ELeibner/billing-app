import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './components/context-provider/ContextProvider';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
    <StrictMode>
        <ErrorBoundary>
            <ContextProvider>
                <App />
            </ContextProvider>
        </ErrorBoundary>
    </StrictMode>,
    document.getElementById('root')
);
