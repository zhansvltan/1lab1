import Delete from "../page/Delete";

export default function Person({ name, surname, phone, onDelete }) {
  return (
    <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{phone}</td>
        <td>
          <Delete
            name={name}
            surname={surname}
            phone={phone}
            onDelete={onDelete}
          />
        </td>
      </tr>
    </div>
  );
}
