import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signin" element={<h1>Signin</h1>} />
        <Route path="/products" element={<h1>Products Page</h1>} />
        <Route path="/add-products" element={<h1>New Product</h1>} />
        <Route path="/products/:id" element={<h1>Update Product</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
