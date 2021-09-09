import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import './App.css';

import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import './index.css';


const App =() => {
  return (
    <>
      <Header title="Tis is Title!!!!" descr="This is Descriptions." />
      <Layout  title="This is Title of First Block" descr="Lorem lorem lorem lorem" urlBg={bg1}  colorBg={false} />
      <Layout  title="This is Title of Second Block" descr="Lorem lorem lorem lorem Totem Uk"  urlBg=""  colorBg={true} />
      <Layout  title="This is Title of Third Block" descr="Lorem lorem 4to escho echo php"  urlBg={bg2}  colorBg={false} />
      <Footer />
    </>
  );
}

export default App;
