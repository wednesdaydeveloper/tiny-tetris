import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import Component, { IStateProps, IDispatchProps } from '../components/TetrisTableComponent';
import { moveLeft, moveRight, rotateClockwise, rotateCounterClockwise, decide} from '../actions';
import { ITetrisState, copyTable } from '../reducers/TetrisState'

export function mapStateToProps(state: ITetrisState): IStateProps {
  return {
    falling: state.falling,
    gameover: state.gameover,
    createTable: () => copyTable(state),
  };
}

export function mapDispatchToProps(dispatch: Dispatch<Action>): IDispatchProps {
  return {
    onKeyLeft:  () => dispatch(moveLeft()),
    onKeyRight: () => dispatch(moveRight()),
    onKeyUp:    () => dispatch(rotateClockwise()),
    onKeyDown:  () => dispatch(rotateCounterClockwise()),
    onKeySpace: () => dispatch(decide()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
