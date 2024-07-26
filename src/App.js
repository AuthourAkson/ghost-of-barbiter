import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <a href="https://space.bilibili.com/470505094?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/authourakson.jpg`} alt="SVG Image" width="100" height="100" />
        <p className="view">AuthourAkson</p>
      </a>
      <div className="container">
        <div className="content">
          <ul>
            <li><a className="active" href="#home">主页</a></li>
            <li><a href="https://prts.wiki/w/%E7%BD%97%E5%BE%B7%E5%B2%9B%E5%9F%BA%E5%BB%BA"target="_blank">基建</a></li>
            <li><a href="https://cn.ark-nights.com/?locale=zh_CN"target="_blank">干员</a></li>
            <li><a href="https://www.skland.com/"target="_blank">社区</a></li>
            <li><a href="https://wiki.biligame.com/arknights/%E5%B9%B2%E5%91%98%E5%AF%BB%E8%AE%BF%E6%A8%A1%E6%8B%9F%E5%99%A8"target="_blank">抽卡</a></li>
            <li><a href="https://wiki.biligame.com/arknights/%E6%94%BB%E7%95%A5"target="_blank">攻略</a></li>
            <li><a href="https://wiki.biligame.com/arknights/%E9%A6%96%E9%A1%B5%E4%BD%9C%E6%88%98%E6%9D%BF%E5%9D%97"target="_blank">作战</a></li>
            <li><a href="https://ak.hypergryph.com/#index"target="_blank">方舟</a></li>
            <li><a href="https://endfield.hypergryph.com/"target="_blank">末地</a></li>
          </ul>
          <br />
          <input type="text" id="myInput" onKeyUp={myFunction} placeholder="搜索.." style={{ width: '92.5%' }} />
          <ul id="myUL">
            <li><a href="https://www.google.com/?hl=zh-CN"target="_blank">Google</a></li>
            <li><a href="https://www.youtube.com/@ArknightsOfficialYostar"target="_blank">youtube</a></li>
            <li><a href="https://www.bilibili.com/video/BV1LC4y1W7TS/?spm_id_from=333.337.search-card.all.click&vd_source=03b8bea42a644cbe2e9c36aaeb3f8806"target="_blank">starest mv</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Wiki"target="_blank">Wiki</a></li>
            <li><a href="https://www.facebook.com"target="_blank">Facebook</a></li>
            <li><a href="https://space.bilibili.com/161775300?spm_id_from=333.337.0.0"target="_blank">bilibili</a></li>
            <li><a href="https://ak.hypergryph.com/#index"target="_blank">Arknights</a></li>
            <li><a href="https://endfield.hypergryph.com/"target="_blank">End-field</a></li>
            <li><a href="https://www.skland.com/"target="_blank">Skyland</a></li>
          </ul>
          <img src={`${process.env.PUBLIC_URL}/arknightsmain.jpg`} alt="Amiya stands there" width="800" height="400" style={{ filter: 'opacity(75%)' }} />
          <br />
          <div className="mw_body_content" style={{ margin: '1em 0' }}>
            <div className="picture">
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/ark1.png`} alt="图片1" width="100" height="100" />
              </div>
              <div className="text-container">
                <hr style={{ width: '100%', margin: '5px 0', background: '#444' }} />
                <p className="sitenotice-menu-item-title">首页</p>
              </div>
            </div>
            <div className="picture">
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/ark2.png`} alt="图片2" width="100" height="100" />
              </div>
              <div className="text-container">
                <hr style={{ width: '100%', margin: '5px 0', background: '#444' }} />
                <p className="sitenotice-menu-item-title">干员</p>
              </div>
            </div>
            <div className="picture">
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/ark3.png`} alt="图片3" width="100" height="100" />
              </div>
              <div className="text-container">
                <hr style={{ width: '100%', margin: '5px 0', background: '#444' }} />
                <p className="sitenotice-menu-item-title">活动</p>
              </div>
            </div>
            <div className="picture">
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/ark4.png`} alt="图片4" width="100" height="100" />
              </div>
              <div className="text-container">
                <hr style={{ width: '100%', margin: '5px 0', background: '#444' }} />
                <p className="sitenotice-menu-item-title">作战</p>
              </div>
            </div>
            <div className="picture">
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/ark5.png`} alt="图片5" width="100" height="100" />
              </div>
              <div className="text-container">
                <hr style={{ width: '100%', margin: '5px 0', background: '#444' }} />
                <p className="sitenotice-menu-item-title">攻略</p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <video id="video" width="800" height="450" autoPlay loop controls>
              <source src={`${process.env.PUBLIC_URL}/amiya the fiend.mp4`} type="video/mp4" />
            </video>
            <canvas id="myCanvas" width="900" height="450"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

export default App;