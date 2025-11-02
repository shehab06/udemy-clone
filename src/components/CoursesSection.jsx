import { courses } from '../data/courses'
export default function CoursesSection(){
return (
<section className="courses-section">
<h3>Popular AI Courses</h3>
<div className="courses-grid">
{courses.map((c,i)=>(
<div className="course-card" key={i}>
<img src={c.image} alt={c.title} />
<div className="course-body">
<h4>{c.title}</h4>
<div className="meta">
<span className="badge">Bestseller</span>
<span className="rating">{c.rating}</span>
</div>
<div className="price">{c.price}</div>
</div>
</div>
))}
</div>
<div className="show-all"><a href="#">Show all Artificial Intelligence (AI) courses →</a></div>
</section>
)
}
