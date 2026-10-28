import {Link,useParams} from 'react-router-dom';
import {FiArrowUpRight,FiCheck,FiBookOpen,FiClock} from 'react-icons/fi';
import {courses} from '../data';
import {PageHero} from '../components/Layout';
export function CourseDetail({onEnroll,cart}){const{id}=useParams();
const c=courses.find(c=>String(c.id)===id);if(!c)
    return <PageHero eyebrow="Not found" title="Course not found"/>;
const added=cart.some(x=>x.id===c.id);

return <><PageHero eyebrow={c.category} title={c.title}/>
<section className="section container detail-layout"><div>
    <img className="detail-image" src={c.image} alt={c.title}/>
        <h2 className="mt-10">About this course</h2>
        <p className="mt-5">Build practical skills with clear explanations, guided exercises, and real-world projects. 
            Follow the lessons at your own pace and put your new knowledge into practice.
        </p>
        
        <h3 className="mt-10">What you’ll learn</h3>
            <ul className="check-grid">
                {['Essential concepts and techniques','Practical problem-solving','Real-world project experience','Skills for your next career step'].map(x=><li key={x}><FiCheck/>{x}</li>)}</ul>
                <h3>Course curriculum</h3>{['Introduction and getting started','Core concepts and guided practice','Building your final project'].map((x,i)=><details key={x}>
                    <summary>0{i+1}. {x}</summary>
                    <p>Lesson materials are placeholders for your learning platform integration.</p>
                    </details>)}</div>
                    
                    <aside className="enroll-card"><h2>{c.price?'$'+c.price:'Free'}</h2>
                    <p>One-time course access</p>
                        <button className="button w-full" onClick={()=>onEnroll(c)} disabled={added}>{added?'Added to your cart':'Enroll now'} 
                            <FiArrowUpRight/></button><p className="demo-note">Demo enrollment · No payment is collected.</p>
                            
                            <ul>
                                <li>
                                    <FiBookOpen/> {c.lessons} lessons
                                </li>
                                
                                <li><FiClock/> Learn at your own pace</li>
                                <li><FiCheck/> Lifetime access</li>
                            </ul>
                            
                            <Link className="text-link" to="/course-one">Browse more courses</Link>
                            </aside>
                            
                            </section>
                            
                            </>}
