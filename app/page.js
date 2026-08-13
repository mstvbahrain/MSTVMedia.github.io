'use client';

import { useState } from 'react';

const projects = [
  {client:'FINTYL', status:'Digital growth partnership', services:'Website development · AI integration · Marketing · Social media management', sector:'Finance marketplace', location:'Bahrain', logo:'/images/fintyl-logo-bw.png', tone:'#c9f34a'},
  {client:'DAVANI', status:'Marketing & growth partnership', services:'Marketing · Advertising · Social media management · B2B lead generation', sector:'Hospitality linen & bedding', location:'United Arab Emirates', logo:'/images/davani-logo-bw.png', tone:'#fa6240'},
  {client:'BCHEF', status:'Digital & growth partnership', services:'Website creation · Marketing · B2B lead generation', sector:'Bakery & catering', location:'Bahrain', logo:'/images/bchef-logo-bw.png', tone:'#68cfca'},
  {client:'BAHRAIN THEATER UNION', status:'Digital & production partnership', services:'Website creation · Podcast recording & editing', sector:'Arts & culture', location:'Bahrain', logo:'/images/bahrain-theater-union-logo-bw.png', tone:'#f0c4f5'},
  {client:'MOORE BAHRAIN', status:'Digital experience partnership', services:'Website design · Development · Digital presence', sector:'Accounting & advisory', location:'Bahrain', logo:'/images/moore-logo.png', tone:'#22a7df'},
];

const team = [
  ['Mohamed Shaji','Founder','/images/team1-optimized.webp'],
  ['Husain Shaji','CEO','/images/team6-optimized.webp'],
  ['Ali Salari','Production Manager','/images/team2-optimized.webp'],
  ['Ali Turk','Senior Data Analyst','/images/ali-turk.png'],
  ['Hadi Bahar','Head of Creative','/images/hadi-bahar-professional.png'],
  ['Mahmood Rohani','Head of Public Relations','/images/mahmood-rohani-professional.png'],
  ['Mohamed Shams','Head of Marketing','/images/mohamed-shams-thobe-professional.png'],
];

const services = [
  ['01','Marketing strategy','Audience insight, positioning, campaign planning and practical roadmaps that connect activity to business goals.'],
  ['02','Campaigns & social','Campaign concepts, content planning and platform-ready creative designed to earn attention and inspire action.'],
  ['03','Video production','Creative development, filming, editing, motion graphics and adaptable content for campaigns and digital channels.'],
  ['04','Podcast production','Studio and on-location recording, multi-camera production, audio engineering, editing and publishing support.'],
  ['05','Brand identity & web','Visual identity, marketing collateral and responsive digital experiences shaped around your goals.'],
  ['06','Data analytics','Performance dashboards, audience insights and campaign measurement that turn complex data into clear decisions.'],
  ['07','B2B lead generation','Targeted outreach, prospect research and conversion-focused campaigns that connect your business with qualified decision-makers.'],
];

function Arrow(){return <span aria-hidden="true">↗</span>}

export default function Home(){
  const [menu,setMenu]=useState(false);
  return <main>
    <header className="header">
      <a className="brand" href="#top" aria-label="MSTV Media home"><img src="/images/logo.png" alt="MSTV Media"/></a>
      <nav className="pill" aria-label="Primary"><a href="#portfolio">WORK</a><a href="#services">SERVICES</a><a href="#about">ABOUT</a></nav>
      <button className="menuBtn" aria-expanded={menu} aria-label="Toggle menu" onClick={()=>setMenu(!menu)}><i/><i/></button>
      {menu&&<div className="overlay"><button onClick={()=>setMenu(false)}>CLOSE</button>{['Portfolio','Services','Shows','About','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}<Arrow/></a>)}</div>}
    </header>

    <section className="hero" id="top">
      <div className="heroWord heroIdeas">IDEAS</div>
      <div className="heroImage"><img src="/images/hero-studio-v3.png" alt="MSTV professional media editing and campaign production suite"/></div>
      <div className="heroWord heroMove">THAT<br/><span>MOVE.</span></div>
      <div className="heroMeta"><b>MSTV MEDIA</b><p>Independent media &amp; marketing agency · Bahrain</p><a href="#contact">Start a project <Arrow/></a></div>
      <div className="heroConnect">BRANDS THAT CONNECT.</div>
      <p className="scrollHint">STRATEGY · CONTENT · PRODUCTION <span>↓</span></p>
    </section>

    <section className="statement" id="approach">
      <p className="eyebrow">FROM STRATEGY TO SPOTLIGHT</p>
      <h1>We help brands find their <em>voice</em>, reach the right audience and turn <em>attention into action.</em></h1>
      <div className="statementFoot"><p>BUILT IN BAHRAIN.<br/>MADE TO TRAVEL.</p><a className="roundLink" href="#services"><Arrow/></a></div>
    </section>

    <section className="services" id="services">
      <div className="sectionHead"><div><p className="eyebrow">WHAT WE DO</p><h2>Built to make<br/>brands matter.</h2></div><p>Choose a focused service or bring us in as your creative marketing partner—from strategy and planning to production and launch.</p></div>
      <div className="serviceList">{services.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><Arrow/></article>)}</div>
    </section>

    <section className="work" id="portfolio">
      <div className="sectionHead"><div><p className="eyebrow">SELECTED WORK</p><h2>Ideas brought<br/>into focus.</h2></div><p>A growing portfolio of marketing, brand, production and digital work—created in Bahrain and built to travel.</p></div>
      <div className="portfolioGrid">{projects.map((project,index)=><article className="portfolioCard" key={project.client}>
        <div className="portfolioLogo"><img src={project.logo} alt={`${project.client} logo`}/></div>
        <div className="portfolioInfo"><p>{String(index+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</p><h3>{project.client}</h3><span>{project.status}</span><dl><div><dt>Services</dt><dd>{project.services}</dd></div><div><dt>Sector</dt><dd>{project.sector}</dd></div><div><dt>Location</dt><dd>{project.location}</dd></div></dl></div>
      </article>)}</div>
    </section>

    <section className="shows" id="shows">
      <div className="ticker"><span>BAHRAINI VOICES. GLOBAL CONVERSATIONS. </span><span>BAHRAINI VOICES. GLOBAL CONVERSATIONS.</span></div>
      <div className="channelCta"><p className="eyebrow">MSTV ORIGINALS</p><h2>Watch every story<br/>in one place.</h2><p>Sport, culture and conversations from Bahrain—made for audiences everywhere.</p><a href="https://www.youtube.com/@MSTVBahrain" target="_blank" rel="noreferrer">Visit the MSTV channel <Arrow/></a></div>
    </section>

    <section className="people" id="about">
      <div className="sectionHead"><div><p className="eyebrow">THE PEOPLE BEHIND MSTV</p><h2>A small team.<br/>A wide lens.</h2></div><p>Creative, production and media specialists working together from Bahrain.</p></div>
      <div className="teamGrid">{team.map(([name,role,image],i)=><article key={name} className={i===0?'founder':i<3?'lead':''}><img src={image} alt={name}/><span>0{i+1}</span><h3>{name}</h3><p>{role}</p></article>)}</div>
    </section>

    <section className="contact" id="contact"><p>HAVE A PROJECT IN MIND?</p><h2>Let’s make your brand<br/><em>impossible to ignore.</em></h2><div className="contactLinks"><a href="mailto:info@mstvmedia.com">info@mstvmedia.com <Arrow/></a><a href="https://www.instagram.com/mstv.bh/" target="_blank" rel="noreferrer">Instagram @mstv.bh <Arrow/></a><a href="https://www.linkedin.com/company/mstv-media/" target="_blank" rel="noreferrer">LinkedIn MSTV Media <Arrow/></a><a href="https://wa.me/97333871009?text=Hello%20MSTV%20Media%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">Chat on WhatsApp <Arrow/></a></div></section>
    <footer><a className="brand footerBrand" href="#top"><img src="/images/logo.png" alt="MSTV Media"/></a><div><a href="mailto:info@mstvmedia.com">info@mstvmedia.com</a><a href="tel:+97333871009">+973 3387 1009</a><p>Kingdom of Bahrain</p></div><div><a href="#portfolio">Portfolio</a><a href="#services">Services</a><a href="#contact">Contact</a></div><small>© 2026 MSTV MEDIA. ALL RIGHTS RESERVED.</small></footer>
  </main>
}
