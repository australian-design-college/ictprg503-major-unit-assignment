import { Container } from "unstated";

export default class CounterContainer extends Container {
  state = { count: 0, step: 1 };

  increment = () => {
    this.setState({ count: this.state.count + this.state.step });
  };

  decrement = () => {
    this.setState({ count: this.state.count - this.state.step });
  };

  updateStep = newStep => {
    this.setState({ step: Number(newStep) });
  };
}
