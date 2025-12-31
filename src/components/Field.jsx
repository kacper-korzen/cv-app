import '../styles/Field.css';

function Field({ fieldInfo, value, onChange, className }) {
  return (
    <div className="field-container">
      <span>{fieldInfo.icon}</span>
      <input
        type={fieldInfo.type}
        id={fieldInfo.id}
        placeholder={fieldInfo.placeholder}
        value={value}
        onChange={(e) => onChange(fieldInfo.id, e.target.value)}
        className={className}
      />
    </div>
  );
}

export default Field;
