import Router from "./components/Router/Router"
import { Provider } from "react-redux"
import store from "./Redux/store"

// import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"

function App() {
  

  return (
    <Provider store={store}>
        <div className="conteneur">
            {/* <Header /> */}
            <Router />
        </div>
        <Footer />
    </Provider>
  )
}

export default App
