// src/pages/AddSkill.jsx
import { useState } from "react";
import Navbar from "./Navbar";
import "./addskill.css";

export default function AddSkill() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    images: [],
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onPickImages = (e) => {
    const files = Array.from(e.target.files || []);
    setForm((prev) => ({ ...prev, images: files }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form); // backend later
  };

  return (
    <div className="as-page">
      <Navbar />

      <h1 className="as-title">Add New Skill</h1>

      <form className="as-form" onSubmit={onSubmit}>
        <section className="as-card">
          <label className="as-label">Skill Title</label>
          <input
            className="as-input"
            name="title"
            value={form.title}
            onChange={onChange}
          />

          <label className="as-label">Description</label>
          <textarea
            className="as-textarea"
            name="description"
            value={form.description}
            onChange={onChange}
          />

          <label className="as-label">Category</label>
          <select
            className="as-select"
            name="category"
            value={form.category}
            onChange={onChange}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Plumbing">Plumbing</option>
            <option value="Tech">Tech</option>
            <option value="Tutoring">Tutoring</option>
            <option value="Cleaning">Cleaning</option>
          </select>

          <label className="as-label">Add Images</label>

          <div className="as-upload-row">
            <label className="as-upload-box" htmlFor="as-images">
              <span className="as-plus">+</span>
            </label>

            <input
              id="as-images"
              type="file"
              accept="image/*"
              multiple
              onChange={onPickImages}
              style={{ display: "none" }}
            />

            {/* optional preview */}
            {form.images.length > 0 && (
              <div className="as-preview">
                {form.images.slice(0, 3).map((f) => (
                  <div key={f.name} className="as-preview-chip">
                    {f.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <button className="as-btn" type="submit">
          Add Skill
        </button>
      </form>
    </div>
  );
}