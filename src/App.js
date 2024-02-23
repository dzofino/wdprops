
import './App.css';
import Cards from './Component/Cards';
import Navigation from './Component/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div style={{display:'flex',justifyContent:'space-around',margin:'5%'}}>
      <Cards brand="Nike" Taille="42" prix="$ 400" imgsrc="https://www.tuttosport.com.tn/34397-large_default/nike-chaussures-revolution-6-nn.webp"/>
      <Cards brand="adidas" Taille="42" prix="$ 320" imgsrc="https://www.runmag.fr/_assets/styles/810/public/article/adidas-ultra-boost-light-runmag-a.jpg"/>
      <Cards brand="Sebago" Taille="44" prix="$ 450" imgsrc="https://petites-annonces.commeuncamion.com/wp-content/uploads/2021/07/171281.jpg"/>

      </div>
     
    </div>
  );
}

export default App;
