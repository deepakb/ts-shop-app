import Container from "@material-ui/core/Container";
import Header from "../header/Header";
import ProductList from "../product/ProductList";

const App: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ProductList />
    </Container>
  );
};

export default App;
