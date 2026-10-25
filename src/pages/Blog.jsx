import {useParams,Link} from 'react-router-dom';
import {posts} from '../data';
import {PageHero} from '../components/Layout';

export function BlogDetail(){
    const{id}=useParams();
    const p=posts.find(x=>String(x.id)===id);if(!p)
        return <PageHero eyebrow="Not found" title="Article not found"/>;
    return <><PageHero eyebrow={p.category} title={p.title}/>
    
        <article className="section container article">
            <img className="detail-image" src={p.image} alt={p.title}/>
            <p className="mt-6">{p.date} · Elearna journal · Demo article</p>
            <h2>Make room for a new way to learn</h2>
            <p>Learning works best when you connect new ideas to something you already know. Set a clear goal, 
                break your study time into manageable sessions, and make space to practice what you learn.
            </p>

            <h3>Turn knowledge into practice</h3>
            <p>Start with one small project. Use it to explore the concepts from your lessons, write down questions, 
                and return to the material with fresh context. Consistent practice can help you build confidence over time.
            </p>

            <blockquote>Small steps, repeated consistently, make a meaningful difference.</blockquote>

            <h3>Choose your next step</h3>
            <p>Explore a subject that interests you and make a realistic plan for the week ahead. Share your 
                progress with someone and reflect on what you would like to try next.
            </p>
            <Link className="button" to="/blog-one">Back to all articles</Link>
        </article>
    </>}
