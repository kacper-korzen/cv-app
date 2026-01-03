import Button from './Button';
import Field from './Field';

function Entry({ fields, entry, onChange, onRemove, fieldClassName }) {
  return (
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
      <Button children={'Usuń'} variant={'delete'} onClick={onRemove} />
    </div>
  );
}

export default Entry;
