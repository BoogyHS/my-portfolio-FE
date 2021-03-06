import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from 'reportWebVitals';
import App from 'App';
import rootReducer from 'reducers';
import 'index.scss';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
