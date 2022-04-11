import AppRoutes from "./routes";
import GlobalStyle from "./styles/global";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
