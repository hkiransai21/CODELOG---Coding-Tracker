import { useState } from 'react';
import { OPTIONS, validateProblem } from '../utils/validation';

const blank = { title: '', platform: '', language: '', difficulty: '', status: '', topic: '', notes: '' };

function Field({ id, label, error, children, optional }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="mono label">{label}{optional && ' (optional)'}</label>
      {children}
      {error && <p className="error" id={`${id}-err`} role="alert">{error}</p>}
    </div>
  );
}

export default function ProblemForm({ initialValues = blank, submitLabel, onSubmit, onCancel }) {
  const [values, setValues] = useState({ ...blank, ...initialValues });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validateProblem(values);
    setErrors(found);
    if (Object.keys(found).length === 0) onSubmit(values);
  };
  const props = (name) => ({ id: name, name, value: values[name], onChange: handleChange, 'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `${name}-err` : undefined });
  const select = (name, label, options) => (
    <Field id={name} label={label} error={errors[name]}>
      <select {...props(name)}><option value="">Select…</option>{options.map((o) => <option key={o}>{o}</option>)}</select>
    </Field>
  );

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <Field id="title" label="Problem title" error={errors.title}><input type="text" placeholder="e.g. Two Sum" {...props('title')} /></Field>
      <div className="form-grid">
        {select('platform', 'Platform', OPTIONS.platforms)}
        {select('language', 'Language', OPTIONS.languages)}
        {select('difficulty', 'Difficulty', OPTIONS.difficulties)}
        {select('status', 'Status', OPTIONS.statuses)}
      </div>
      <Field id="topic" label="Topic" error={errors.topic}><input type="text" placeholder="e.g. Sliding Window" {...props('topic')} /></Field>
      <Field id="notes" label="Notes" optional error={errors.notes}>
        <textarea rows="5" placeholder="Approach, mistakes, complexity…" {...props('notes')} />
        <span className="mono muted hint">{values.notes.length}/500</span>
      </Field>
      <div className="actions">
        <button type="submit" className="btn primary">{submitLabel}</button>
        <button type="button" className="btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
