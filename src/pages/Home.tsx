import * as React from "react";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import Section from "../components/Section/Section";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Section title="Últimas postagens" content={<Table />} />
      </div>
    </React.Fragment>
  );
}
