type HeaderPropsType = {
    title: string;
  };
  
  export const Header = (props: HeaderPropsType) => {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    );
  };
  