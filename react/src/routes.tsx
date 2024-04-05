import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import { AddAlbum } from './view/AddAlbum';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path:'/add-album',
        element: <AddAlbum/>
    },
    {
        path:'addFaixa',
        element: <AddAlbum/>
    }
])

export default router;
