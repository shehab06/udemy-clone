import { categories } from '../data/categories'
export default function Categories(){
return (
<section className="categories">
<h3>Skills to transform your career and life</h3>
<p className="subtitle">From critical skills to technical topics, Udemy supports your professional development.</p>
<div className="category-list">
{categories.map((c,i)=>(
<div className="category-card" key={i}>
<div className="thumb" />
<div className="meta">
<div className="title">{c.title}</div>
<div className="small">{c.students} learners</div>
</div>
</div>
))}
</div>
</section>
)
}
