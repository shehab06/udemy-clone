import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import AISection from './components/AISection'
import CoursesSection from './components/CoursesSection'
import TrustedCompanies from './components/TrustedCompanies'
import './styles.css'


export default function App(){
return (
<div className="container">
<Navbar />
<Hero />
<Categories />
<AISection />
<CoursesSection />
<TrustedCompanies />
</div>
)
}
