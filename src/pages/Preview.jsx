import { useParams } from 'react-router-dom';
import { useState } from 'react';

const codeSamples = {
  'hero-section': {
    html: `<section class="hero">Hero HTML here...</section>`,
    react: `<div className="hero">Hero React here...</div>`,
  },
  // Add more components later
};

const Preview = () => {
  const { id } = useParams();
  const [lang, setLang] = useState('html');

  const sample = codeSamples[id];

  if (!sample) return <p style={{ padding: '2rem' }}>Component not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Component Preview: {id}</h2>

      {/* Live Preview Placeholder */}
      <div style={{ border: '1px dashed #ccc', padding: '1rem', marginBottom: '1rem' }}>
        <p>[Live preview will appear here]</p>
      </div>

      {/* Toggle Button */}
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setLang('html')}>HTML</button>
        <button onClick={() => setLang('react')} style={{ marginLeft: '1rem' }}>
          React
        </button>
      </div>

      {/* Code Display */}
      <pre style={{ background: '#111', color: '#fff', padding: '1rem', borderRadius: '8px' }}>
        <code>{sample[lang]}</code>
      </pre>
    </div>
  );
};

export default Preview;
