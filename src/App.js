import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp, Login, Home, Product, Cart } from "./pages";

import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={< Login />} />
                    <Route path='/sign-up' element={< SignUp />} />
                    <Route path='/' element={< Home />} />
                    <Route path='/product/:productId' element={< Product />} />
                    <Route path='/cart' element={< Cart />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;