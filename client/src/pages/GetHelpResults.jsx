import { useMemo, useState } from "react";
import Navbar from "./Navbar";
import "./gethelpresults.css";
import { FiSearch, FiX } from "react-icons/fi";

const DEMO_RESULTS = [
  {
    id: 1,
    title: "Leaky Faucet & Pipe Repair",
    name: "Brian M.",
    rating: 4.5,
    reviewsText: "(XX)",
    price: "₱ 5.00/hr",
    short:
      "I can help fix minor plumbing issues, replace washers, or unclog drains.",
    description:
      "Don’t let that dripping sound keep you up! I have experience with basic home maintenance and can swap out kitchen/bathroom fixtures or fix slow-draining sinks. I’m happy to take a look and see if it’s an easy fix before you call a professional plumber. Available most weekend mornings.",
    tags: ["Plumbing", "Repair", "Home"],
  },
  { id: 2, title: "Leaky Faucet & Pipe Repair", name: "Brian M.", rating: 4.5, reviewsText: "(XX)", price: "₱ 5.00/hr", short: "I can help fix minor plumbing issues, replace washers, or unclog drains.", description: "Don’t let that dripping sound keep you up! I have experience with basic home maintenance and can swap out kitchen/bathroom fixtures or fix slow-draining sinks. I’m happy to take a look and see if it’s an easy fix before you call a professional plumber. Available most weekend mornings.", tags: ["Plumbing", "Repair", "Home"] },
  { id: 3, title: "Leaky Faucet & Pipe Repair", name: "Brian M.", rating: 4.5, reviewsText: "(XX)", price: "₱ 5.00/hr", short: "I can help fix minor plumbing issues, replace washers, or unclog drains.", description: "Don’t let that dripping sound keep you up! I have experience with basic home maintenance and can swap out kitchen/bathroom fixtures or fix slow-draining sinks. I’m happy to take a look and see if it’s an easy fix before you call a professional plumber. Available most weekend mornings.", tags: ["Plumbing", "Repair", "Home"] },
  { id: 4, title: "Leaky Faucet & Pipe Repair", name: "Brian M.", rating: 4.5, reviewsText: "(XX)", price: "₱ 5.00/hr", short: "I can help fix minor plumbing issues, replace washers, or unclog drains.", description: "Don’t let that dripping sound keep you up! I have experience with basic home maintenance and can swap out kitchen/bathroom fixtures or fix slow-draining sinks. I’m happy to take a look and see if it’s an easy fix before you call a professional plumber. Available most weekend mornings.", tags: ["Plumbing", "Repair", "Home"] },
  { id: 5, title: "Leaky Faucet & Pipe Repair", name: "Brian M.", rating: 4.5, reviewsText: "(XX)", price: "₱ 5.00/hr", short: "I can help fix minor plumbing issues, replace washers, or unclog drains.", description: "Don’t let that dripping sound keep you up! I have experience with basic home maintenance and can swap out kitchen/bathroom fixtures or fix slow-draining sinks. I’m happy to take a look and see if it’s an easy fix before you call a professional plumber. Available most weekend mornings.", tags: ["Plumbing", "Repair", "Home"] },
];

function Stars({ value = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;

  const chars = Array.from({ length: total }, (_, i) => {
    if (i < full) return "★";
    if (i === full && half) return "⯪"; // simple half marker
    return "☆";
  });

  return <span className="gh-stars">{chars.join("")}</span>;
}

export default function GetHelpResults() {
  const [query, setQuery] = useState("Plumbing");
  const [sortBy, setSortBy] = useState("relevance");
  const [selected, setSelected] = useState(null);

  const results = useMemo(() => {
    // demo filter (optional)
    let list = [...DEMO_RESULTS];

    // demo sort
    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sortBy === "priceLow") list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

    return list;
  }, [sortBy]);

  return (
    <div className="gh-page">
      <Navbar />

      {/* Top search section */}
      <section className="gh-top">
        <div className="gh-top-row">
          <div className="gh-search">
            <FiSearch className="gh-search-icon" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Plumbing, Tech ..."
            />
          </div>

          <button className="gh-post-btn">Post a Need</button>
        </div>

        <div className="gh-meta">
          <h3>Search Results for “{query}” ({results.length})</h3>

          <div className="gh-sort">
            <span>Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="relevance">Relevance</option>
              <option value="rating">Rating</option>
              <option value="priceLow">Price (Low)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="gh-grid">
        {results.map((item) => (
          <article className="gh-card" key={item.id}>
            <div className="gh-card-head">
              <div className="gh-avatar" />
              <div className="gh-card-title">{item.title}</div>
            </div>

            <div className="gh-card-sub">
              <span className="gh-by">By {item.name}</span>
              <span className="gh-dot">•</span>
              <Stars value={item.rating} />
              <span className="gh-rating">{item.rating} {item.reviewsText}</span>
              <span className="gh-dot">•</span>
              <span className="gh-price">{item.price}</span>
            </div>

            <p className="gh-card-text">{item.short}</p>

            <div className="gh-card-actions">
              <button className="gh-btn-outline">Request Help</button>
              <button className="gh-btn-solid" onClick={() => setSelected(item)}>
                More Info →
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Modal */}
      {selected && (
        <div className="gh-modal-overlay" onClick={() => setSelected(null)}>
          <div className="gh-modal" onClick={(e) => e.stopPropagation()}>
            <button className="gh-modal-close" onClick={() => setSelected(null)}>
              <FiX />
            </button>

            <div className="gh-modal-body">
              {/* left images (placeholder) */}
              <div className="gh-modal-left">
                <div className="gh-img big" />
                <div className="gh-img-row">
                  <div className="gh-img small" />
                  <div className="gh-img small" />
                </div>
              </div>

              {/* right info */}
              <div className="gh-modal-right">
                <h2>{selected.title}</h2>

                <div className="gh-offered">
                  <div className="gh-user-icon" />
                  <div>
                    <div className="gh-offered-by">Offered by</div>
                    <div className="gh-offered-name">{selected.name}</div>
                    <div className="gh-offered-rating">
                      <Stars value={selected.rating} />
                      <span>{selected.rating} {selected.reviewsText}</span>
                    </div>
                  </div>
                </div>

                <div className="gh-tags">
                  {selected.tags.map((t) => (
                    <span className="gh-tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="gh-desc">
                  <div className="gh-desc-title">Description:</div>
                  <p>{selected.description}</p>
                </div>

                <div className="gh-modal-actions">
                  <button className="gh-btn-outline wide">Message</button>
                  <button className="gh-btn-solid wide">Request Help</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}