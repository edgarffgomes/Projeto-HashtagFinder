import "./css/Reset.css";
import Container from "./components/container/Container";
// import Header from "./components/header/Header";
// import Footer from './components/footer/Footer';
import SearchesPerformedList from "./components/searchesPerformedList/SearchesPerformedList";

function App() {
  return (
    <div>
      <Container>
        <SearchesPerformedList />
      </Container>
    </div>
  );
}

export default App;
