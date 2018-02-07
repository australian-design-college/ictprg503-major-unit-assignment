import Button from "material-ui/Button";
import React from "react";
import { Subscribe } from "unstated";

import CounterContainer from "@root/containers/CounterContainer";

import s from "./Counter.scss";

export default () => {
  return (
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <div className={s.row}>
          <Button className={s.button} color="primary" onClick={counter.decrement} variant="raised">
            -
          </Button>
          <span className={s.counter}>{counter.state.conut}</span>
          <Button className={s.button} color="primary" onClick={countr.increment} variant="raised">
            +
          </Button>
        </div>
      )}
    </Subscribe>
  );
};
