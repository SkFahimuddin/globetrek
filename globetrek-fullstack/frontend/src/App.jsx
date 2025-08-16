import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get('/api/destinations')
      .then(res => setDestinations(res.data))
      .catch(() => {
        setDestinations([
          { title: "Paris, France", desc: "The city of lights, romance, and world-famous landmarks.", link: "#europe" },
          { title: "Kyoto, Japan", desc: "Ancient temples, cherry blossoms, and tea ceremonies.", link: "#asia" },
          { title: "New York, USA", desc: "Skyscrapers, Broadway shows, and vibrant culture.", link: "#america" },
          { title: "Cape Town, South Africa", desc: "Breathtaking mountains, beaches, and wildlife.", link: "#africa" },
          { title: "Sydney, Australia", desc: "Opera House, beaches, and coastal walks.", link: "#oceania" },
          { title: "Rome, Italy", desc: "Historic ruins, art, and mouthwatering cuisine.", link: "#europe" },
        ]);
      });
  }, []);

  return (
    <>
      <input type="checkbox" id="themeToggle" className="visually-hidden" />
      <label htmlFor="themeToggle" className="theme-switch" title="Toggle theme" aria-label="Toggle theme"></label>
      <input type="checkbox" id="navToggle" className="visually-hidden" />
      <header className="site-header">
        <label htmlFor="navToggle" className="hamburger" aria-label="Toggle navigation" title="Menu">
          <span></span><span></span><span></span>
        </label>
        <a className="brand" href="#"><strong>GlobeTrek</strong></a>
        <form className="search" role="search" aria-label="Site search" onSubmit={e => e.preventDefault()}>
          <input type="search" placeholder="Search destinations, e.g. ‘Paris’" />
          <button type="submit" aria-label="Search">🔎</button>
        </form>
      </header>
      <aside className="sidebar">
        <nav className="side-nav" aria-label="Primary">
          <h3>Plan Your Trip</h3>
          <a href="#europe">Europe</a><a href="#asia">Asia</a><a href="#america">America</a><a href="#africa">Africa</a><a href="#oceania">Oceania</a>
          <h3>Travel Tips</h3>
          <a href="#packing">Packing Guide</a><a href="#budget">Budget Travel</a><a href="#safety">Safety Tips</a>
        </nav>
      </aside>
      <main className="content">
        <section className="hero">
          <div className="hero-text">
            <h1>Explore the World</h1>
            <p>Inspiring travel guides, tips, and curated destinations for your next adventure.</p>
            <div className="cta-row">
              <a className="btn primary" href="#destinations">Discover Destinations</a>
              <a className="btn ghost" href="#europe">Start with Europe</a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Today’s Travel Pick</h3>
            <p>Experience the magic of Santorini, Greece — white houses, blue domes, and golden sunsets.</p>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Santorini" style={{ width: '100%', borderRadius: '12px', marginTop: '0.5rem' }}/>
            <a className="btn slim" href="#europe">View More →</a>
          </div>
        </section>
        <section id="destinations" className="grid">
          <h2>Popular Destinations</h2>
          <div className="cards">
            {destinations.map((item, idx) => (
              <article className="card" key={idx}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a className="btn tiny" href={item.link}>Explore</a>
              </article>
            ))}
          </div>
        </section>
        <section id="europe" className="lesson">
          <h2>Europe</h2>
          <p>From the romantic streets of Paris to the fjords of Norway, Europe offers endless experiences.</p>
          <div className="two-col">
            <div>
              <h4>Must-Visit Spots</h4>
              <ul className="bullets">
                <li>Paris, France</li><li>Santorini, Greece</li><li>Rome, Italy</li><li>Swiss Alps, Switzerland</li>
              </ul>
            </div>
            <div className="tip"><strong>Tip:</strong> Visit in spring or fall to avoid peak tourist crowds.</div>
          </div>
        </section>
        <section id="asia" className="lesson">
          <h2>Asia</h2>
          <p>Discover vibrant cultures, exotic cuisines, and stunning landscapes across Asia.</p>
          <div className="two-col">
            <div>
              <h4>Highlights</h4>
              <ul className="bullets">
                <li>Kyoto, Japan</li><li>Bali, Indonesia</li><li>Bangkok, Thailand</li><li>Dubai, UAE</li>
              </ul>
            </div>
            <div className="note"><strong>Note:</strong> Research visa requirements before traveling.</div>
          </div>
        </section>
        <section id="america" className="lesson">
          <h2>America</h2>
          <p>From bustling cities to serene national parks, the Americas have it all.</p>
          <div className="two-col">
            <div>
              <h4>Highlights</h4>
              <ul className="bullets">
                <li>Washington, D.C., United States </li><li>Albany, new york </li><li>Ottawa, Canada</li><li>Mexico , Mexico City</li>
              </ul>
            </div>
            <div className="note"><strong>Note:</strong> Discover hidden gems across the nation.</div>
          </div>
        </section>
        <section id="africa" className="lesson">
          <h2>Africa</h2>
          <p>Africa: Where adventure meets the wild. </p>
          <div className="two-col">
            <div>
              <h4>Highlights</h4>
              <ul className="bullets">
                <li>Algiers , Algeria </li><li>Banjul , Gambia </li><li>Conakry , Guinea</li><li>Nairobi , Kenya</li>
              </ul>
            </div>
            <div className="note"><strong>Note:</strong> Drink bottled water only.</div>
          </div>
        </section>
        <section id="oceania" className="lesson">
          <h2>Australia</h2>
          <p>Australia: Famous for kangaroos, koalas, and the Great Barrier Reef. </p>
          <div className="two-col">
            <div>
              <h4>Highlights</h4>
              <ul className="bullets">
                <li>Sydney , New South Wales </li><li>Melbourne , Victoria </li><li>Brisbane , Queensland</li><li>Adelaide , South Australia</li>
              </ul>
            </div>
            <div className="note"><strong>Note:</strong> Carry sunscreen, Australia’s sun is very strong.</div>
          </div>
        </section>
        <section id="packing" className="lesson">
          <h2>Packing Guide</h2>
          <ul className="bullets"><li>Lightweight clothing for layering</li><li>Comfortable walking shoes</li><li>Travel-sized toiletries</li></ul>
        </section>
        <section id="budget" className="lesson">
          <h2>Budget Travel Tips</h2>
          <ul className="bullets"><li>Book flights early</li><li>Stay in hostels or guesthouses</li><li>Use public transportation</li></ul>
        </section>
        <section id="safety" className="lesson">
          <h2>Safety traveling tips </h2>
          <ul className="bullets"><li>Keep copies of important documents (passport, visa, tickets, ID.)</li><li>Avoid unsafe areas at night, use trusted transport only.</li><li>Stay alert with belongings, protect against pickpockets and scams.</li></ul>
        </section>
        <footer className="site-footer">
          <p>© <span id="year">2025</span> GlobeTrek. Travel smart, travel far.</p>
          <nav className="foot-nav"><a href="#">About</a><a href="#">Destinations</a><a href="#">Contact</a></nav>
        </footer>
      </main>
    </>
  );
}
export default App;
