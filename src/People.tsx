import React from "react";

interface Person {
  name: string;
  country: string;
}

interface PeopleProps {
  people: Person[];
}

const People: React.FC<PeopleProps> = ({ people }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, i) => {
          const { name, country } = person;
          return (
            <>
              <tr key={i}>
                <td>{name}</td>
                <td>{country}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default People;
