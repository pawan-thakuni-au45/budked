
import Header from "./component/Header";

import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
   <>
   <Header/>
   <main className="py-3">
   <Container>
      <Outlet/>
    </Container>
    </main>
    <Footer/>
   </>
  );
}

export default App;
