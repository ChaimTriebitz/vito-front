import { Dialogs, Footer, Header, Login, Main, Msg, Register } from './cmps'

function App() {

   document.title = 'Vito'

   return (
      <div className="App" >
         <Msg />
         <Dialogs />
         <Header />
         {/* <Register />
         <Login /> */}
         <Main />
         <Footer />
      </div>
   )
}

export default App


