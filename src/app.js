import React from 'react'; //require(react) ES5 and theese ES-6 
import { createRoot } from 'react-dom/client';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase'
import { getAuth } from 'firebase/auth';
import { login, logout } from './actions/auth';
import { redirect } from 'react-router-dom';


const root = createRoot(document.getElementById('app'));

const store = configureStore()

const jsx= (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false

 const renderApp = () => {
    if(!hasRendered){
        root.render(jsx);
        hasRendered = true
    }
}

root.render(<p>Loading.....</p>);

const auth = getAuth()
auth.onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp()
        })
        
    }else{
        store.dispatch(logout())
        renderApp()
    }
})

