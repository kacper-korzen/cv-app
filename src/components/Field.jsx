import '../styles/Field.css';

function Field({ fieldInfo, value, onChange }) {
  return (
    <div className="field-container">
      <label htmlFor={fieldInfo.id}>{fieldInfo.fieldName}</label>
      <input
        type={fieldInfo.type}
        id={fieldInfo.id}
        placeholder={fieldInfo.placeholder}
        value={value}
        onChange={(e) => onChange(fieldInfo.id, e.target.value)}
        className="field-input"
      />
    </div>
  );
}

export default Field;
