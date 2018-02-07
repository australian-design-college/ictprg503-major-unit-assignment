import Card from "material-ui/Card";
import React, { Component } from "react";

import Counter from "./Counter";
import s from "./Root.scss";
import StepEditor from "./StepEditor";

export default class Root extends Component {
  render() {
    return (
      <Card className={s.card}>
        <Counter />
        <StepEditor />
      </Card>
    );
  }
}
