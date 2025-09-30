import { Card, CardContent } from "./ui/card";

type Person = {
  id: number;
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
};

type PersonDetailProps = {
  pers: Person;
};

function SelectedPerson({ pers }: PersonDetailProps) {
  return (
    <Card>
      <CardContent>
        <p>{pers.name}</p>
      </CardContent>
    </Card>
  );
}

export default SelectedPerson;
