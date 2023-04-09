type FooterPropsType = {
  title: string;
};

export const Footer = (props: FooterPropsType) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
