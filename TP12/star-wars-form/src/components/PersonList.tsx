import { useEffect, useState } from "react";
import "../App.css";
import { Card, CardContent } from "./ui/card";

interface Person {
  id: number;
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
}

interface PersonListProps {
  onSelectPerson: (char: Person) => void;
}

function PersonList({ onSelectPerson }: PersonListProps) {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?page=1")
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {people.map((person) => (
        <Card
          key={person.id}
          onClick={() => onSelectPerson(person)}
          className="flex flex-col justify-center items-center h-fit cursor-pointer"
        >
          <CardContent className="flex flex-col pointer-events-none">
            <p>{person.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PersonList;
