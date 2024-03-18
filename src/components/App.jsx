import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import Modal from "./Modal";
import Toast from "./Toast";
import { useModal } from "../stores/useItemStore";

function App() {
  const modalOpen = useModal((state) => state.modal);
  return (
    <>
      <Title />
      <Header />
      <Body />
      <Footer />
      {modalOpen && <Modal />}
      <Toast />
    </>
  );
}

export default App;
