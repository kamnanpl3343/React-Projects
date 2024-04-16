import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function App() {
  const loader = useSelector((store) => store.fetchItems);
  return (
    <>
      <Header />
      {loader.currentStatus ? <Loading /> : <Outlet />}
      <FetchItems />
      <Footer />
    </>
  );
}

export default App;
