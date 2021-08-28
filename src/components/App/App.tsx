import Container from "@material-ui/core/Container";
import Header from "../../components/Header/Header";
import ProductList from "../Product/ProductList";

const App: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ProductList />
    </Container>
  );
};

export default App;
