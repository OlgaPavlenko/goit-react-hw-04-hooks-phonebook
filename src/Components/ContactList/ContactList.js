export default function ContactsRender({ contactsList, onDelete }) {
  return (
    <>
      <ul>
        {contactsList &&
          contactsList.map(({ id, name, number }) => (
            <li key={id}>
              <span>
                {name} - {number}
              </span>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
