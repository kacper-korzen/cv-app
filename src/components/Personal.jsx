import Field from './Field';
import '../styles/Personal.css';

function Personal({ fields, values, onChange }) {
  return (
    <section className="personal-grid">
      {fields.map((field) => (
        <Field
          key={field.id}
          fieldInfo={field}
          value={values[field.id] || ''}
          onChange={onChange}
          className={field.className}
        />
      ))}
    </section>
  );
}

export default Personal;
