import * as React from "react";

interface ISectionProps {
  title: string;
  content?: React.ReactNode | null;
}

const Section: React.FC<ISectionProps> = (props) => {
  return (
    <section className="section">
      <div className="section-container">
        <div className="section-container-title">{props.title}</div>
        <div className="section-container-content">{props.content}</div>
      </div>
    </section>
  );
}

export default Section
