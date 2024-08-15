import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import './App.css';
import './ChatBubbleLeftRight.svg';
import './PlayPause.svg';
import './User.svg';

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

  const [color, setColor] = useState('#19d1ff'); 
  const handleClick = () => {
    setColor('#ffffff');}

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
          <div class="Top_Outliner">
            <a class="arklogo" href="/#index">
              <svg version="1.1" viewBox="0 0 2048 966" width="120px" height="59px" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(701)" d="m0 0 3 1 9 11 11 13 14 17 13 15 8 7 5 5 7 6 14 8 21 7 43 14 20 6 41 14 19 6 30 10h9l13-2 51-3h10v9l-2 17-1 15-1 33v312l-10 13-13 16-8 10-9 11-22 28-13 16-10 13-4 3v-11l-7-16-9-4-83-27v-23l7 1 74 24 33 11-1-196-3-7-16-7-55-18-91-29-10-3h-6l-6 4-2 4v216l4 7 11 7 34 11 7 3v11l-7-1-28-8-15-4-6 1-10 8-13 12-14 11-14 12-8 7-12 10h-2zm80 96-5 3-3 7-1 183 3 14 5 5 8 5 21 7 68 22 38 12 28 9 13 4 7-1 2-6-1-199-3-8-6-4-73-24-41-13-50-16z" />
                <path transform="translate(1610,56)" d="m0 0 5 3 12 10 11 9 14 11 36 24 8 6 3 5v7l-4 6-12 10-16 12-17 13-6 5-2 6 2 6 8 5 54 17 36 12 1 1v12l-33-10-58-19-35-11-9-3h-8l-5 5-2 8-1 17v134l3 11 5 5 7 4 36 12 28 9 19 6 22 7 31 10 10 3 7-1 2-3v-170l-2-16v-6l25-2 33-2h18l-3 19-1 14-1 347-11 13-20 26-13 16-10 13-11 13-13 17-13 16-2 3h-2v-10l-7-16-6-9-9-10-9-11-5-6-5-5-1-3-3-1-9-11-11-12-2-5 9 3 23 12 28 11 9 3h13l6-4 4-9 1-5v-182l-4-8-9-6-33-11-83-27-22-7-6-2h-9l-5 6-1 3-2 28-5 47-8 40-8 26-9 21-10 18-9 12-11 13-12 11-16 12-13 8-7 3h-7l2-6 12-21 11-28 5-16 3-9 3-15 8-31 4-41 2-16 2-52v-31l-2-5-6-5-14-6-25-8-13-4-1-1v-12l9 2 29 9 15 5 6-1 2-2 1-239 4 1 12 14 9 11 11 13 7 8 13 12 11 8 7 3 8-1 3-1 3-14v-19l-2-41-3-34v-8z" />
                <path transform="translate(418,100)" d="m0 0 4 2 7 7 7 8 11 12 27 30 8 8 9 6 66 22 4 1h16l32-2h22l-2 23-1 20-1 394-11 14-20 25-11 14-9 11-13 17-13 15-8 11h-2v-10l-5-13-7-8-9-8v-2l-4-2-10-9-16-15-8-7-6-6v-2l6 1 42 16 15 5 4 1h9l5-3 4-6 1-3v-140l-3-9-7-4-47-15-15-4-9 1-3 1-2 4-3 10-6 28-9 29-8 18-11 22-10 14-16 20-10 10-11 9-16 12-20 12-13 6-5 1-1-2 4-6 8-11 12-18 11-23 8-21 9-28 7-30 7-36 4-20 4-25 3-29 2-19 1-27 1-243zm76 89-5 3-3 4-1 3-1 20-1 9v20l1 63 3 9 5 6 16 8 45 15h6l3-3v-132l-4-6-10-6-34-11-9-2zm-3 154-5 5-2 6-4 82-1 15v19l3 6 8 6 20 8 43 14h6l3-4v-130l-3-7-6-5-26-8-21-7z" />
                <path transform="translate(602,887)" d="m0 0h920v74h-920z" />
                <path transform="translate(204,44)" d="m0 0 4 2 11 12 9 11 13 14 9 11 13 14 9 11-1 6-4 10v144l2 11 4 6 6 6 23 7 8 1 2-21v-140l-3-5v-2l-5-2-12-6v-10l9 2 13 5 18-1 34-4h10l-1 410-21-6-66-22-39-12-24-8-29-9-69-23-35-11-49-16-16-5-26-9-1-1v-21l3-1 25 8 141 46 32 10h2zm73 269-8 4-2 6v124l1 26 5 6 8 4 22 7 7-1 3-8v-143l-3-12-7-6-18-6z" />
                <path transform="translate(1211,199)" d="m0 0 5 2 12 8 11 7 16 10 13 10 10 8 14 14 11 15 6 13 3 15v10l-3 15-4 10-8 10-9 7-3 4v7l4 3 47 15 50 16 34 11 3-1 8-12 6-8 5 2 10 9 13 10 16 13 10 8 8 7 1 4-2 1h-17l-33-11-26-8-49-16-45-14-43-14-10-3h-8l-5 4-2 7-1 30-2 23-1 19-1 7v9l2 9 5 5 8 5 25 8 31 10 20 6 2 1v13l-7-1-53-17-24-8h-6l-5 4-3 8-4 23-7 33-8 29-4 12-8 21-9 20-10 18-13 19-8 10-5 6h-2l-2 5-5 4-4 5-11 9-13 10-15 10-26 14-16 8-8 2h-5v-4l10-10 9-10 9-13 10-16 8-16 8-15 12-29 10-27 12-35 4-15 8-35 2-9 9-65 5-102-1-17-35-12-13-4-58-19-10-3-1-1v-23l9 2 77 24 64 20 14 5h15l2-2v-11l-5-23-12-46-18-64z" />
                <path transform="translate(1436,520)" d="m0 0h9v8l-4 25-2 44-3 80-1 4-1 15-4 7-10 12-22 28-11 13-12 16-13 16-10 13-11 13-9 12-12 14-3 3-1-2v-9l-5-12-9-16-11-12-9-11-4-4v-2l-4-2-11-13-12-13-5-7 3-1 46 23 24 10 11 2 8-2 7-6 4-8 5-24 4-37 4-47 4-74 1-50 1-2 8-1z" />
                <path transform="translate(1621,424)" d="m0 0 16 8 20 12 11 7 14 11 12 11 10 11 7 11 6 13 3 12 1 13-3 18-7 14-6 7-12 6-8 2-9-1-8-5-4-5-5-15-8-27-5-19-13-42-8-27-4-11z" />
                <path transform="translate(1620,223)" d="m0 0 16 8 24 14 13 10 10 8 7 6 7 8 9 12 8 16 3 10 1 9v10l-2 12-4 10-9 10-9 6-8 3h-12l-6-3-5-6-5-15-5-20-15-49-11-37-7-18z" />
                <path transform="translate(1851,365)" d="m0 0 13 4 56 18 43 14 50 16 16 5 18 6 1 1v22l-10-2-41-13-92-30-53-17-1-1z" />
                <path transform="translate(1127,903)" d="m0 0h18l-3 2h-2v16l25 1-1-16-5-2v-1h18l-4 2h-2l1 38 5 1v2h-18v-2h5l1-20h-26l1 20h5v2h-18v-2h6v-39l-6-1z" fill="#FEFEFE" />
                <path transform="translate(916,903)" d="m0 0h29l5 4 1 2v6l-4 6-7 4 12 16 4 3v2h-9l-13-17-4-6 9-2 4-4v-7l-2-3-3-1h-10l1 37 5 1v2h-18v-2h5v-39l-5-1z" fill="#FEFEFE" />
                <path transform="translate(1e3 903)" d="m0 0h12l10 12 11 14 8 9v-33l-6-1v-1h16l-4 2h-2v42l-6-1-10-11-11-14-7-9-2-1 1 33h5v2h-15l1-2 4-1v-37l-5-2z" fill="#FEFEFE" />
                <path transform="translate(888,902)" d="m0 0h3l12 27 6 14 4 2v1h-17v-2h5l-4-11v-2h-18l-3 10-1 3h5v2h-14v-2l4-1 13-29z" fill="#FEFEFE" />
                <path transform="translate(958,903)" d="m0 0h18l-3 2h-2l-1 18 8-7 11-11 1-2h11l-3 2-7 4-13 12 2 4 7 7 8 7 4 4 4 2v1h-10l-10-9-9-9-4-2 1 17 5 1v2h-18l1-2h5v-39l-6-1z" fill="#FEFEFE" />
                <path transform="translate(1097,902)" d="m0 0h14l9 2 1 4-1 6h-2l-2-6-10-3-10 1-7 4-4 8v10l4 9 7 5 11 1 8-1-1-11-6-1v-2h15l-1 3-1 12-7 3-6 1h-12l-10-4-6-7-3-9 1-9 4-8 8-6z" fill="#FEFEFE" />
                <path transform="translate(1229,902)" d="m0 0h11l7 2-1 9h-2l-2-6-6-2-7 1-4 3-1 6 2 4 19 4 4 4 1 6-3 7-5 5-6 2h-11l-7-3 1-9h2l1 7 4 1h12l5-5v-7l-5-3-16-3-4-5v-9l4-6z" fill="#FEFEFE" />
                <path transform="translate(1179,903)" d="m0 0h37v9l-3-1-1-5-11-1v39h6v2h-18v-2h5l1-39-12 1-1 6h-2z" fill="#FEFEFE" />
                <path transform="translate(1058,903)" d="m0 0h17l-4 2-1 39h5v2h-17v-2h5v-39l-5-1z" fill="#FEFEFE" />
                <path transform="translate(888,911)" d="m0 0 2 3 5 12v3h-14l1-5 5-12z" />
                <path transform="translate(1333,929)" d="m0 0h17l-1 5h-17z" fill="#FEFEFE" />
                <path transform="translate(767,929)" d="m0 0h17l-1 5h-17z" fill="#FEFEFE" />
              </svg>
            </a>
            <div class="Function_Bar">
              {/*<div class="_57987e85">
                <a class="_c91e47cc _f3a31881" href="/#index">
                  <div class="Eng_INTRO">INDEX</div>
                  <div class="CN_INTRO">首页</div>
                </a>
                <a class="_c91e47cc" href="/#information">
                  <div class="Eng_INTRO">INFORMATION</div>
                  <div class="CN_INTRO">情报</div>
                </a>
                <a class="_c91e47cc" href="/#operator">
                  <div class="Eng_INTRO">OPERATOR</div>
                  <div class="CN_INTRO">干员</div>
                </a>
                <a class="_c91e47cc" href="/#world">
                  <div class="Eng_INTRO">WORLD</div>
                  <div class="CN_INTRO">设定</div>
                </a>
                <a class="_c91e47cc" href="/#media">
                  <div class="Eng_INTRO">MEDIA</div>
                  <div class="CN_INTRO">泰拉万象</div>
                </a>
                <a class="_c91e47cc" href="/#more">
                  <div class="Eng_INTRO">MORE</div>
                  <div class="CN_INTRO">更多内容</div>
                </a>
              </div>*/}
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
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path>
                </svg>
              </div>
              <div class="_Threeicons _e6c9defd _5d27adee">
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
          {/*<div class="_387897ce _7f5ebf8d">
            <div class="_e79fdc76">
              <div class="_a5b206bf">
                <div class="_3c14782f">
                  <a className="_c91e47cc _f3a31881" href="/#index" style={{ transitionDelay: '0ms' }}>
                    <div className="Eng_INTRO">INDEX</div>
                    <div className="CN_INTRO">首页</div>
                  </a>
                  <a className="_c91e47cc" href="/#information" style={{ transitionDelay: '70ms' }}>
                    <div className="Eng_INTRO">INFORMATION</div>
                    <div className="CN_INTRO">情报</div>
                  </a>
                  <a className="_c91e47cc" href="/#operator" style={{ transitionDelay: '140ms' }}>
                    <div className="Eng_INTRO">OPERATOR</div>
                    <div className="CN_INTRO">干员</div>
                  </a>
                  <a className="_c91e47cc" href="/#world" style={{ transitionDelay: '210ms' }}>
                    <div className="Eng_INTRO">WORLD</div>
                    <div className="CN_INTRO">设定</div>
                  </a>
                  <a className="_c91e47cc" href="/#media" style={{ transitionDelay: '280ms' }}>
                    <div className="Eng_INTRO">MEDIA</div>
                    <div className="CN_INTRO">泰拉万象</div>
                  </a>
                  <a className="_c91e47cc" href="/#more" style={{ transitionDelay: '350ms' }}>
                    <div className="Eng_INTRO">MORE</div>
                    <div className="CN_INTRO">更多内容</div>
                  </a>
                  <a className="_c91e47cc" href="https://customer-service.hypergryph.com/ak" target="_blank" style={{ transitionDelay: '420ms' }}>
                    <div className="Eng_INTRO">CUSTOMER SERVICE</div>
                    <div className="CN_INTRO">客服中心</div>
                  </a>
                </div>
              </div>
              <div class="_72424dec">
                <div class="_18c9b603">TOOLBOX</div>
                <div class="_67492428">
                  <a class="_9da51d75 _3d927875" target="_blank" href="https://www.skland.com/game/arknights">
                    <svg viewBox="0 0 1024 1024">
                      <use href="#svg_def-icon_skland"></use>
                    </svg>
                  </a>
                  <a class="_9da51d75 _5a936be1" target="_blank" href="https://www.bilibili.com/blackboard/era/bVhpr9EzINg9DiHg.html">
                    <svg viewBox="0 0 43 20">
                      <use href="#svg_def-icon_bilibili"></use>
                    </svg>
                  </a>
                  <div class="_9da51d75 _7ed9a467">
                    <svg viewBox="0 0 1494 1210">
                      <use href="#svg_def-icon_wechat">
                      </use>
                    </svg>
                  </div>
                  <a class="_9da51d75 _fa714953" target="_blank" href="https://www.weibo.com/arknights">
                    <svg viewBox="0 0 48 38">
                      <use href="#svg_def-icon_weibo"></use>
                    </svg>
                  </a>
                  <a class="_9da51d75 _ff20e8b8" target="_blank" href="https://www.taptap.cn/app/70253?utm_medium=seo&amp;utm_source=rep_QAK3OdA4Irb">
                    <svg viewBox="0 0 50 50">
                      <use href="#svg_def-icon_TapTap">
                      </use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>*/}
          <a href="https://space.bilibili.com/470505094?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/authourakson.jpg`} alt="SVG Image" width="100" height="100" />
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