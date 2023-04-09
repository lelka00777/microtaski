type studentsPropsType = {
  students: Array<StudentsType>;
};

type StudentsType = {
  id: number;
  name: string;
  age: number;
};

export const Students01 = (props: studentsPropsType) => {
 
    return (
    <ul>
      {props.students.map((el) => {
         
        return (
           
            <li key={el.id}>
            <span>{el.name}</span>
            <span>{`age:   ${el.age}`}</span>
            </li>
            
            
        
        );
      })}
    </ul>
  );
};
