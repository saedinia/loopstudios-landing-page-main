import hero_desktop from './assets/images/desktop/image-hero.jpg';
import hero_mobile from './assets/images/mobile/image-hero.jpg';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <div className="hero">
        <picture>
          <source media="(min-width:760px)" srcSet={hero_desktop} />
          <img src={hero_mobile} alt="" />
        </picture>
        <div className="hero__title">
          <div className="wrapper">
            {/* <h1>Immersive experiences that deliver</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
