import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ImgCard from "./Components/ImgCard";
import Card from "./Components/card";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import "./App.css";

function App() {

  return (
    <>
      <div className="container">

        <div className="containerHeader">
          <Header title="Gabriel S Almeida" />
        </div>
        <div className="containerBanner">
          <Banner>
            <h1>Bem vindo ao meu site</h1>
            <p>Aqui você encontra as melhores oportunidades!</p>
          </Banner>
        </div>
        <div className="containerImgCard">
          <ImgCard caption="Uma imagem legal" newImg/>
        </div>

        <Card />
      </div>
    </>
  )
}

export default App
