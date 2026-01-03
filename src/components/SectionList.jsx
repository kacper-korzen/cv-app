import Button from './Button';
import Entry from './Entry';

function Education({ title, fields, entries, onChange, onAdd, onRemove }) {
  return (
    <div className="list-section">
      <div className="list-header">{title}</div>

      <details>
        <Button children={'Dodaj'} variant={'add'} onClick={onAdd} />
        <summary></summary>
        <div className="list-block">
          {entries.map((entry) => (
            <Entry
              key={entry.id}
              fields={fields}
              entry={entry}
              onChange={onChange}
              onRemove={() => onRemove(entry.id)}
            />
          ))}
        </div>
      </details>
    </div>
  );
}

export default Education;
