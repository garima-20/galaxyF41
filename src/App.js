//import logo from './logo.svg';
import './App.css';
import fusiongreen1 from './fusiongreen.png';
import fusionblack1 from './fusionblack.png';
import fusionblue1 from './fusionblue.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import more1 from './more1.png';
import more2 from './more2.png';
import more3 from './more3.png';
import more4 from './more4.png';


function App() {
  const fusionblack = () => {
      document.getElementById("mobilephotoblack").style.display='block';
      document.getElementById("mobilephotogreen").style.display='none';
      document.getElementById("mobilephotoblue").style.display='none';
      document.getElementById("mobilephotoearly").style.display='none';
  }

  const fusiongreen = () => {
    document.getElementById("mobilephotogreen").style.display='block';
    document.getElementById("mobilephotoblack").style.display='none';
    document.getElementById("mobilephotoblue").style.display='none';
    document.getElementById("mobilephotoearly").style.display='none';
  }


  const fusionblue = () => {
    document.getElementById("mobilephotoblue").style.display='block';
    document.getElementById("mobilephotoblack").style.display='none';
    document.getElementById("mobilephotogreen").style.display='none';
    document.getElementById("mobilephotoearly").style.display='none';
  }


  return (
    <div className="App">
      <div className="outer_div">
        <div className="heading_div">
          <div className="first_head">
            <div id="para1">
              Galaxy F41
        </div>
            <div id="para2">
              Rs.14,999
          <button id="buttons" type="button" name="button"><a href="#home">ADD TO CART</a></button>
            </div>
          </div>
          <div className="second_head">
            <div className="head2">
              <a href="#home"> HOME </a>
            </div>
            <div className="head2" >
              <a href="#feature"> FEATURES </a>
            </div>
            <div className="head2">
              <a href="#specs"> SPECS </a>
            </div>
          </div>
        </div>
        <div id="home"></div>
        <div className="product_details">
          <div id="photos">
            <div className="mobilephoto">
            <img id="mobilephotoearly" className="displayimgearly" src={fusiongreen1} alt="" />
            <img id="mobilephotogreen" className="displayimg" src={fusiongreen1} alt="" />
            <img id="mobilephotoblack" className="displayimg" src={fusionblack1} alt="" />
            <img id="mobilephotoblue" className="displayimg" src={fusionblue1} alt="" />
            </div>
            <div id="features">
              <div className="features_part" id="cpuspeed">
                <span className="part1">2.3GHz, 1.7Ghz</span>
                <br />
                <span className="part2">CPU Speed</span>
              </div>
              <div className="features_part" id="cputype">
                <span className="part1">Octa-Core</span>
                <br />
                <br /><br />
                <span className="part2">CPU Type</span>
              </div>
              <div className="features_part" id="ram">
                <span className="part1">6GB</span>
                <br />
                <br /><br />
                <span className="part2">RAM</span>
              </div>
            </div>
          </div>
          <div id="description">
            <span id="name">Galaxy F41</span>
            <br />
            <ul>
              <li>16.21cm (6.4") Super AMOLED Infinity U Display</li>
              <br />
              <li>64MP Versatile Triple Camera - 64MP (Main) + 8MP (UW) + 5MP (Depth)</li>
              <br />
              <li>Long Lasting Battery (6000mAh)</li>
            </ul>
            <h3>Color</h3>
            <div >
              <button className="color_buttons" id="black" onClick={fusionblack} >Fusion Black</button>
              <button className="color_buttons" id="blue" onClick={fusionblue} >Fusion Blue</button>
              <button className="color_buttons" id="green" onClick={fusiongreen} >Fusion Green</button>
            </div>
            <h3>Storage</h3>
            <div className="storage">
              <div className="storage_value">
                64GB
           <h5>Rs 14,999</h5>
              </div>
              <div className="storage_value">
                128GB
           <h5>Rs 13,999</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moreimages">
        <div className="images_div">
          <div id="feature"></div>
          <img className="images" src={img1} alt="" />
        </div>
        <br /><br />
        <div className="info1">
          <span id="span1">Full On Energy</span>
          <br />
          <span id="span2">A 6000mAh Battery that keeps the fun going all day and night.</span>
        </div>
        <br /><br />
        <div className="images_div">
          <img className="images" src={img2} alt="" />
        </div>
        <br /><br />
        <div className="info1">
          <span id="span1">Full On Lit</span>
          <br />
          <span id="span2">The 16.21cm (6.4") Full HD+ sAMOLED Infinity-U Display makes your favourite content more immersive.</span>
        </div>
        <br /><br />
        <div className="images_div">
          <img className="images" src={img3} alt="" />
        </div>
        <br /><br />
        <div className="info1">
          <span id="span1">Full On Likes</span>
          <br />
          <span id="span2">Ace your social media game with the 64MP Camera and go viral with every picture you share.</span>
        </div>
        <br /><br />
        <div className="images_div">
          <img className="images" src={img4} alt="" />
        </div>
        <br /><br />
        <div className="info1">
          <span id="span1">Full On Performance</span>
          <br />
          <span id="span2">The powerful Exynos 9611 processor along with 6GB RAM gives you blazing-fast speed and seamless performance.</span>
        </div>
        <br /><br />
        <div className="images_div">
          <img className="images" src={img5} alt="" />
        </div>
        <br /><br />
        <div className="images_div">
          <img className="images" src={img6} alt="" />
        </div>
        <br /><br />
        <div className="specifications">
          <div id="specs"></div>
          <div className="lists">
            <h2>Display</h2>
            <ul>
              <li>Size (Main_Display) 16.21cm (6.4") full rectangle / 15.76cm (6.2") rounded corners </li>
              <li>Resolution (Main Display) 2340 x 1080 (FHD+)</li>
              <li>Technology (Main Display) Super AMOLED</li>
            </ul>
            <h2>Camera</h2>
            <ul>
              <li>Rear Camera - Resolution (Multiple) 64.0 MP + 8.0 MP + 5.0 MP</li>
              <li>Rear Camera - F Number (Multiple) F1.8 , F2.2 , F2.2</li>
              <li>Rear Camera - Auto Focus Yes</li>
            </ul>
          </div>
          <div className="lists">
            <h2>Memory</h2>
            <ul>
              <li>External Memory Support MicroSD (Up to 512GB)</li>
              <li>ROM Size (GB) 64</li>
              <li>Available Memory (GB)* 49.2</li>
            </ul>

          </div>
        </div>
        <div className="moreoptions">
          <div className="samephones">
            <a href="#home"> <img src={more1} alt="" /> </a>
          </div>
          <div className="samephones">
            <a href="#home"> <img src={more2} alt="" /> </a>
          </div>
          <div className="samephones">
            <a href="#home"> <img src={more3} alt="" /> </a>
          </div>
          <div className="samephones">
            <a href="#home"> <img src={more4} alt="" /> </a>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
