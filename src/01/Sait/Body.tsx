type HeaderPropsType = {
  title: string;
};

export const Body = (props: HeaderPropsType) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
