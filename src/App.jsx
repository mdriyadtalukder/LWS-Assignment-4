import { Provider } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar></Navbar>
        <main class="py-12 2xl:px-6">
          <Products></Products>
        </main>
      </div>
    </Provider>
  )
}

export default App
