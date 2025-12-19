import Field from './Field';
const FIELDS = [
  {
    fieldName: 'Imie i nazwisko',
    id: 'fname',
    type: 'text',
    placeholder: 'John Doe',
  },
  {
    fieldName: 'Email',
    id: 'email',
    type: 'email',
    placeholder: 'johndoe@gmail.com',
  },
  {
    fieldName: 'Telefon',
    id: 'phone',
    type: 'tel',
    placeholder: '123 345 654',
  },
  {
    fieldName: 'Adres',
    id: 'address',
    type: 'text',
    placeholder: 'Miasto, Kraj',
  },
];

function Personal() {
  return (
    <fieldset className="personal-section">
      <legend>Dane osobowe</legend>
      {FIELDS.map((field) => (
        <Field key={field.id} fieldInfo={{ ...field }} />
      ))}
    </fieldset>
  );
}

export default Personal;
