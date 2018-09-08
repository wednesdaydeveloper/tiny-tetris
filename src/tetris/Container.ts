import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import Component, { IStateProps, IDispatchProps } from './Component';
import { moveLeft, moveRight, rotateClockwise, rotateCounterClockwise, decide} from './module';
import { ITetrisState } from './TetrisState'

export function mapStateToProps(state: ITetrisState): IStateProps {
  return {
    falling: state.falling,
    gameover: state.gameover,
    createTable: () => state.createTable(true),
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
