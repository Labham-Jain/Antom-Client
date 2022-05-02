import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

const Section = ({ title, children, ...props }: Props) => {
  return (
    <section {...props}>
      {title ? (
        <h3 className="text-center text-4xl mb-7">{title}</h3>
      ) : null}
      {children}
    </section>
  );
};

export default Section;
