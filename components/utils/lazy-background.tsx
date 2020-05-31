import * as React from "react";

type Props = {
  className?: string;
  url: string;
  children?: React.ReactNode;
};

export default (props: Props) => {
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    setStyle({
      backgroundImage: `url(${props.url})`
    });
  }, []);

  return (
    <div className={props.className} style={style}>
      {props.children}
    </div>
  );
};
