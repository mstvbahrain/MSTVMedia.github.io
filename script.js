const header=document.querySelector('#header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');

toggle.addEventListener('click',()=>{
  const open=toggle.getAttribute('aria-expanded')==='true';
  toggle.setAttribute('aria-expanded',String(!open));
  toggle.setAttribute('aria-label',open?'Open menu':'Close menu');
  nav.classList.toggle('open',!open);
  document.body.classList.toggle('menu-open',!open);
});

nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Open menu');
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
}));

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>80),{passive:true});

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...nav.querySelectorAll('a[href^="#"]')];
const updateActiveNav=()=>{
  const current=sections.reduce((active,section)=>window.scrollY>=section.offsetTop-180?section.id:active,'home');
  navLinks.forEach(link=>{
    const active=link.getAttribute('href')===`#${current}`;
    link.classList.toggle('active',active);
    if(active) link.setAttribute('aria-current','true'); else link.removeAttribute('aria-current');
  });
};
window.addEventListener('scroll',updateActiveNav,{passive:true});
updateActiveNav();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('#year').textContent=new Date().getFullYear();
