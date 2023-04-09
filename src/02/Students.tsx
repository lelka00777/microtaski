import { StydentType } from "./Vapp";

export type StudentsPropsType = {
  student: Array<StydentType>;
};

export const Students = (props: StudentsPropsType) => {
  return (
    <div>
      {props.student.map((el) => {
        return (
          <ul>
            <li key={el.id}>{`${el.name} - ${el.age} old`}</li>
            <span></span>
          </ul>
        );
      })}
    </div>
  );
};
