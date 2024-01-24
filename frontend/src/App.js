
import Header from "./component/Header";

import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import FormContainer from "./component/FormContainer";

function App() {
  return (
   <>
   <Header/>
   <FormContainer/>
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
