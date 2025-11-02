export default function TrustedCompanies(){
const logos = ['volkswagen.svg','samsung.svg','cisco.svg','vimeo.svg','pg.svg','hp.svg','citi.svg','ericsson.svg']
return (
<section className="trusted">
<p className="center">Trusted by over 17,000 companies and millions of learners around the world</p>
<div className="logos">
{logos.map((l,i)=> (
<div className="logo" key={i}><img src={`/logos/${l}`} alt={l} /></div>
))}
</div>
</section>
)
}
