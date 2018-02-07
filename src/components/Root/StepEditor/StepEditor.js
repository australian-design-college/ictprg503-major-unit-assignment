import Input, { InputLabel } from "material-ui/Input";
import React, { Component } from "react";
import { Subscribe } from "unstated";

import CounterContainer from "@root/containers/CounterContainer";

import s from "./StepEditor.scss";

export default class StepEditor extends Component {
  render() {
    return (
      <Subscribe to={[CounterContainer]}>
        {counter => (
          <div className={s.wrapper}>
            <InputLabel>Step Size</InputLabel>
            <Input
              className={s.textFieldWrapper}
              inputProps={{
                className: s.textField
              }}
              label="Step Size"
              onChange={evt => counterUpdateStep(evt.target.value)}
              value={counter.state.step}
            />
          </div>
        )}
      </Subscribe>
    );
  }
}
