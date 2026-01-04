import '../styles/Field.css';

function Field({ fieldInfo, value, onChange, className }) {
  return (
    <div className="field-container" inert>
      {'label' in fieldInfo && fieldInfo.label}
      <span>{fieldInfo.icon}</span>
      {fieldInfo.type === 'textarea' ? (
        <textarea
          id={fieldInfo.id}
          placeholder={fieldInfo.placeholder}
          value={value}
          onChange={(e) => onChange(fieldInfo.id, e.target.value)}
          className={className}
        ></textarea>
      ) : (
        <input
          type={fieldInfo.type}
          id={fieldInfo.id}
          placeholder={fieldInfo.placeholder}
          value={value}
          onChange={(e) => onChange(fieldInfo.id, e.target.value)}
          className={className}
        />
      )}
    </div>
  );
}

export default Field;
