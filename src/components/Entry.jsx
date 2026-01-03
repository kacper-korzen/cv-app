import Button from './Button';
import Field from './Field';
import '../styles/Entry.css';

function Entry({ fields, entry, onChange, onRemove, fieldClassName }) {
  return (
    <>
      <div key={entry.id} className="entry-container">
        {fields.map((field) => (
          <Field
            key={field.id}
            fieldInfo={field}
            value={entry[field.id] || ''}
            onChange={(id, val) => onChange(entry.id, id, val)}
            className={fieldClassName}
          />
        ))}
      </div>
      <Button children={'Usuń'} variant={'delete'} onClick={onRemove} />
    </>
  );
}

export default Entry;
