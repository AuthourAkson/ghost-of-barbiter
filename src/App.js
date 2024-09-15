import React, { useState } from 'react'
import LoadingScreen from './LoadingScreen'
import './App.css'
import './ChatBubbleLeftRight.svg'
import './PlayPause.svg'
import './User.svg'
import { ReactComponent as Arklogo } from './arklogo.svg'
import { ReactComponent as Skland } from './Skland.svg'
import { ReactComponent as Weibo } from './Weibo.svg'
import { ReactComponent as TapTap } from './TapTap.svg'
import { ReactComponent as Wechat } from './Wechat.svg'
import { ReactComponent as BiliBili } from './BiliBili.svg'

function App() {
  const nav = document.createElement('nav');
  nav.className = 'home-nav left-nav';
  const navBtn = document.createElement('div');
  navBtn.className = 'nav-btn active';
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    navBtn.appendChild(span);
  }
  nav.appendChild(navBtn);

  const pageNav = document.createElement('nav');
  pageNav.className = 'page-nav-box';

  const ul = document.createElement('ul');
  ul.className = 'page-nav-ul';

  const navItems = [
    'HOME',
    'NEWS',
    'CHARACTER',
    'SYSTEM',
    'GALLERY',
    'COMIC',
    'COMMUNITY',
    'SPECIAL',
    'GIFT'
  ];

  navItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'page-nav-li';

    if (index === 0) {
      li.classList.add('actived');
    }

    const navLiBox = document.createElement('div');
    navLiBox.className = 'nav-li-box';

    const navLiSlide = document.createElement('div');
    navLiSlide.className = 'nav-li-slide';

    const navLiTitle = document.createElement('div');
    navLiTitle.className = 'nav-li-title';

    const p = document.createElement('p');
    p.textContent = item;

    navLiTitle.appendChild(p);
    navLiBox.appendChild(navLiSlide);
    navLiBox.appendChild(navLiTitle);
    li.appendChild(navLiBox);
    ul.appendChild(li);
  });

  pageNav.appendChild(ul);

  nav.appendChild(pageNav);

  document.body.appendChild(nav);

  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { eng: 'INDEX', cn: '首页', href: '/#index' },
    { eng: 'INFORMATION', cn: '情报', href: '/#information' },
    { eng: 'OPERATOR', cn: '干员', href: '/#operator' },
    { eng: 'WORLD', cn: '设定', href: '/#world' },
    { eng: 'MEDIA', cn: '泰拉万象', href: '/#media' },
    { eng: 'MORE', cn: '更多内容', href: '/#more' },
  ];
  const [isMuted, setIsMuted] = useState(true);

  const handleClick = () => {
    const videoElement = document.getElementById('video');
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const [isToolboxVisible, setToolboxVisible] = useState(false);
  const handleIconClick = () => {
    setToolboxVisible(!isToolboxVisible);
  };

  const [loading, setLoading] = useState(true);
  const handleLoadComplete = () => {
    setLoading(false);
  };
  return (
    <div className="App">
      {loading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <div className='app-container'>
          <div class="_2a56b767">
          <div class="_96034668"></div>
          <div class="_120363a9"></div>
          <div class="_311266e9"></div>
          </div>
          <div class="Top_Outliner">
            <a class="arklogo" href="/#index">
              <Arklogo />
            </a>
            <div class="Function_Bar">
              <div className="_57987e85">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    className={`_c91e47cc ${activeIndex === index ? 'active' : ''}`}
                    href={item.href}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="Eng_INTRO">{item.eng}</div>
                    <div className="CN_INTRO">{item.cn}</div>
                  </a>
                ))}
              </div>
            </div>
            <div class="_149a6e98">
              <div class="_Threeicons">
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" onClick={handleIconClick}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path>
                </svg>
              </div>
              <div className={`_Threeicons _e6c9defd _5d27adee ${isMuted ? '' : 'icon-active'}`} onClick={handleClick}>
                <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentcolor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z"></path>
                </svg>
              </div>
              <div class="_Threeicons">
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                </svg>
              </div>
            </div>
            <div class="functionliners">
              <div class="Liners">
                <div class="_016b1d43 _a1600518"></div>
                <div class="_016b1d43 _b0d45f10"></div>
                <div class="_016b1d43 _daaf28c6"></div>
              </div>
            </div>
          </div>
          {isToolboxVisible && (
            <div className="_72424dec toolbox-slide-in">
              <div className="_18c9b603" >TOOLBOX</div>
              <div className='no_account'>
                <img src={`${process.env.PUBLIC_URL}/no_account.png`} width='200px' height='200px' className='no_account_image' />
                <img src={`${process.env.PUBLIC_URL}/stroke_text-rhodes_island.png`} className='text_rhodes' />
                <p className='login_text'>Please Login</p>
              </div>
              <div className="_67492428">
                <a className="_9da51d75 _3d927875" target="_blank" href="https://www.skland.com/game/arknights">
                  <Skland />
                </a>
                <a className="_9da51d75 _5a936be1" target="_blank" href="https://www.bilibili.com/blackboard/era/bVhpr9EzINg9DiHg.html">
                  <BiliBili />
                </a>
                <div className="_9da51d75 _7ed9a467">
                  <Wechat />
                </div>
                <a className="_9da51d75 _fa714953" target="_blank" href="https://www.weibo.com/arknights">
                  <Weibo />
                </a>
                <a className="_9da51d75 _ff20e8b8" target="_blank" href="https://www.taptap.cn/app/70253?utm_medium=seo&amp;utm_source=rep_QAK3OdA4Irb">
                  <TapTap />
                </a>
              </div>
            </div>
          )}
          <a className="author-link" href="https://space.bilibili.com/470505094?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/authourakson.jpg`} alt="SVG Image" width="100" height="100" className='authourakson' />
            <p className="view">AuthourAkson</p>
          </a>
          <div className="container">
            <div className="content">
              <ul>
                <li><a className="active" href="#home">主页</a></li>
                <li><a href="https://prts.wiki/w/%E7%BD%97%E5%BE%B7%E5%B2%9B%E5%9F%BA%E5%BB%BA" target="_blank">基建</a></li>
                <li><a href="https://cn.ark-nights.com/?locale=zh_CN" target="_blank">干员</a></li>
                <li><a href="https://www.skland.com/" target="_blank">社区</a></li>
                <li><a href="https://wiki.biligame.com/arknights/%E5%B9%B2%E5%91%98%E5%AF%BB%E8%AE%BF%E6%A8%A1%E6%8B%9F%E5%99%A8" target="_blank">抽卡</a></li>
                <li><a href="https://wiki.biligame.com/arknights/%E6%94%BB%E7%95%A5" target="_blank">攻略</a></li>
                <li><a href="https://wiki.biligame.com/arknights/%E9%A6%96%E9%A1%B5%E4%BD%9C%E6%88%98%E6%9D%BF%E5%9D%97" target="_blank">作战</a></li>
                <li><a href="https://ak.hypergryph.com/#index" target="_blank">方舟</a></li>
                <li><a href="https://endfield.hypergryph.com/" target="_blank">末地</a></li>
              </ul>
              <br />
              <input type="text" id="myInput" onKeyUp={myFunction} placeholder="搜索.." style={{ width: '92.5%' }} />
              <ul id="myUL">
                <li><a href="https://www.google.com/?hl=zh-CN" target="_blank">Google</a></li>
                <li><a href="https://www.youtube.com/@ArknightsOfficialYostar" target="_blank">youtube</a></li>
                <li><a href="https://www.bilibili.com/video/BV1LC4y1W7TS/?spm_id_from=333.337.search-card.all.click&vd_source=03b8bea42a644cbe2e9c36aaeb3f8806" target="_blank">starest mv</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Wiki" target="_blank">Wiki</a></li>
                <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                <li><a href="https://space.bilibili.com/161775300?spm_id_from=333.337.0.0" target="_blank">bilibili</a></li>
                <li><a href="https://ak.hypergryph.com/#index" target="_blank">Arknights</a></li>
                <li><a href="https://endfield.hypergryph.com/" target="_blank">End-field</a></li>
                <li><a href="https://www.skland.com/" target="_blank">Skyland</a></li>
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
                <video id="video" width="800" height="450" autoPlay loop >
                  <source src={`${process.env.PUBLIC_URL}/amiya the fiend.mp4`} type="video/mp4" />
                </video>
                <canvas id="myCanvas" width="900" height="450"></canvas>
              </div>
            </div>
          </div>
        </div>
      )}
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