import { startPomodoro, stopPomodoro } from '../../actions';
import { connect } from 'react-redux';
import Task from '../ui/Task';

const mapStateToProps = (state) => {
  return ({
    pomodoros: state.pomodoros,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartPomodoro(taskId) {
      dispatch(
        startPomodoro(taskId)
      )
    },
    onStopPomodoro() {
      dispatch(
        stopPomodoro()
      )
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Task);