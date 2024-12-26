import React from "react";

type sectionPropsType = {
  children: React.ReactNode;
  title: string;
  containerStyle?: string;
};

const Section = ({
  children,
  title,
  containerStyle,
}: sectionPropsType): JSX.Element => {
  return (
    <section className={`w-full bg-black text-white rounded-md ${containerStyle}`}>
      <h1 className="font-quicksandBold text-2xl text-purple-200">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
