import {useState,useEffect} from 'react';
import {Link,NavLink,useLocation} from 'react-router-dom';
import {FiArrowUpRight,FiMenu,FiX,FiShoppingBag,FiMail,FiPhone,FiArrowRight} from 'react-icons/fi';
import {nav} from '../data';

export function Logo(){
    return < Link className="logo" to="/home-one">
            <img width="105" height="26" src="/assets/66c6fb8bf82fe9cef5f78d65_Elearna.svg" alt="Elearna"/>
            </Link>
            }
export function Header({cart,onCart,onRegister}){
    const[open,setOpen]=useState(false);
    const loc=useLocation();useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[loc.pathname]);
    return <><div className="topbar">
                <div className="container flex justify-between gap-4">
                    <span>Are you interested in online coaching? 
                        <Link to="/contact-one">Contact us.</Link></span>
                        <span className="hidden md:flex gap-7"><a href="mailto:support@example.com">
                            <FiMail/> support@example.com</a><a href="tel:8881234567">
                                <FiPhone/> Call: (888) 123 4567</a>
                        </span>
                        </div>
                        </div>
                        
                        <header>
                            <div className="container nav-wrap"><Logo/>
                            <nav aria-label="Main navigation" 
                                className={open?'nav-links open':'nav-links'}>
                                {nav.map(([name,url])=><NavLink key={url} to={url}>{name}<span 
                                className="nav-plus">+</span></NavLink>)}
                            </nav>
                            
                            <div className="nav-actions">
                                <button className="cart-button" onClick={onCart}
                                    aria-label={'Open cart, '+cart.length+' items'}><FiShoppingBag/>
                                    <span>{cart.length}</span></button>
                                <button className="button small hidden sm:inline-flex" onClick={onRegister}>Register 
                                    <FiArrowUpRight/></button>
                                    
                                <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} 
                                onClick={()=>setOpen(!open)}>{open?<FiX/>:<FiMenu/>}</button>
                                </div>
                                </div>
                                </header>
                                </>}

export function CTA(){
    return <section className="cta">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
            <h2>Are you ready to<br/>start your journey?</h2>
            <div className="flex flex-wrap gap-4">
                <Link className="button" to="/course-one">Browse courses <FiArrowUpRight/>
                </Link>
                <Link className="button outline" to="/contact-one">Become an instructor <FiArrowUpRight/>
                </Link>
            </div>
        </div>
        </section>}

export function Footer(){
    return <footer>
        <div className="container footer-grid"><div>
            <Logo/>
            <p className="mt-6">Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut 
                tristique cras.
            </p>
            
            <div className="socials">
                <a href="https://facebook.com" aria-label="Facebook">f</a>
                <a href="https://instagram.com" aria-label="Instagram">◎</a>
                <a href="https://linkedin.com" aria-label="LinkedIn">in</a>
            </div>
        </div>
        <div><h4>Popular courses</h4>{['Finance','Management','Design','Development'].map(x=><Link key={x} 
        to={'/course-one?category='+x}>{x}</Link>)}</div>
        <div><h4>Company</h4>{nav.slice(1).map(([x,url])=><Link key={url} to={url}>{x}</Link>)}</div>
        <div><h4>Need help?</h4><p>Call us</p><a className="contact-link" href="tel:8881234567">(888) 123 4567</a>
        <p className="mt-6">Need support?</p><a className="contact-link" href="mailto:info@example.com">info@example.com</a>
        </div>
    </div>
    <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Elearna. React demonstration.</span>
        <span>Reference design: Radiant Templates · Webflow</span>
    </div>
</footer>}

export function PageHero({eyebrow,title}){
    return <section className="page-hero">
                <div className="container">
                    <div className="eyebrow">{eyebrow}</div>
                    <h1>{title}</h1><div className="breadcrumb">
                        <Link to="/home-one">Home</Link><FiArrowRight/>{eyebrow||title}
                    </div>
                        </div>
                <span className="hero-circle"/><span className="hero-cross">✳</span>
            </section>
            }
