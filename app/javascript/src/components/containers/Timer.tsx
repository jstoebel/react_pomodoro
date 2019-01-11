import { stopPomodoro } from '../../actions';
import { connect } from 'react-redux';
import Timer from '../ui/Timer'

const mapStateToProps = (state) => {
  return ({
    pomodoros: state.pomodoros,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStopPomodoro() {
      dispatch(
        stopPomodoro()
      )
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Timer);