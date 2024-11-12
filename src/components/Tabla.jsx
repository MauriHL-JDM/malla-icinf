import { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import mallaCurricular from "../mocks/subjects.json";

function Tabla() {
  const [subjects, setSubjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSubjects(mallaCurricular.subjects);
  }, []);

  const semestres = subjects
    .map((subject) => subject.semester)
    .filter((semestre, index, self) => self.indexOf(semestre) === index);

  const handleClick = (subject) => {
    if (selected && selected.name === subject.name) {
      setSelected(null);
    } else {
      setSelected(subject);
    }
  };

  const renderedBtn = (subject) => {
    const isSelected = selected && selected.name === subject.name;
    const ramoPrev = selected && selected.prev.includes(subject.name);
    const ramoNext = selected && selected.next.includes(subject.name);

    let btnClass = "";
    if (isSelected) {
      btnClass = "ramo-selected";
    } else if (ramoPrev) {
      btnClass = "ramo-prev";
    } else if (ramoNext) {
      btnClass = "ramo-next";
    }

    return (
      <Button
        key={subject.name}
        className={btnClass}
        onClick={() => handleClick(subject)}
      >
        <span dangerouslySetInnerHTML={{ __html: subject.name }} />
      </Button>
    );
  };

  const semesters = semestres.map((semester) => (
    <Table.Th key={semester} className="columna-semestre">
      {semester}° semestre
      {subjects
        .filter((subject) => subject.semester === semester)
        .map(renderedBtn)}
    </Table.Th>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr className="tabla-malla">{semesters}</Table.Tr>
      </Table.Thead>
    </Table>
  );
}

export default Tabla;
