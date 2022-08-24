import { connect } from "react-redux";
import { enhanceAll } from "../util";
import { addNum, subNum } from "../store/actions";

const SagaTest = props => {
  const { dispatch, store } = props;
  return (
    <div>
      <span>{JSON.stringify(props)}</span>
      <button onClick={() => dispatch(addNum(1))}>add count</button>
      <button onClick={() => dispatch(subNum(1))}>sub count</button>
    </div>
  );
};

SagaTest.getInitialProps = props => {
  const { store, isServer } = props.ctx;
  return { isServer };
};

const enhancers = [connect()];
const enhanced = enhanceAll(SagaTest, enhancers);
export default enhanced;
