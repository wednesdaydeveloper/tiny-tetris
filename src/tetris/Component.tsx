import * as React from 'react';
import './Component.css';
import { IFallingTetrimino } from './FallingTetrimino'

export interface IStateProps {
  falling: IFallingTetrimino;
  gameover: boolean;
  createTable(): number[][];
}

export interface IDispatchProps {
  onKeyLeft: () => void;
  onKeyRight: () => void;
  onKeyUp: () => void;
  onKeyDown: () => void;
  onKeySpace: () => void;
}

interface ITdProps {
  column: number;
}

interface ITrProps {
  columns: number[];
}

const Td = (props: ITdProps) => {
  const className = "l" + props.column;
  return <td className={className} />;
};

const Tr = (props: ITrProps) => {
  return (
    <tr>
      {
        props.columns.map((c) => <Td column={c} />)
      }
    </tr>
  );
};

const Component = (props: IStateProps & IDispatchProps) => {

  const { onKeyLeft, onKeyRight, onKeyUp, onKeyDown, onKeySpace, createTable, gameover } = props;
  const table = createTable();
  const onkeydown = (ev: any) => {
    switch(ev.keyCode) {
      case 32:
        onKeySpace();
        break;
      case 37:
        onKeyLeft();
        break;
      case 38:
        onKeyUp();
        break;
      case 39:
        onKeyRight();
        break;
      case 40:
        onKeyDown();
        break;
    }
  };

  return (
    <div className="tetris-container" tabIndex={0} onKeyDown={onkeydown} >
      <table className="tetris-table">
        <tbody>
          {
            table.map((columns) => <Tr columns={columns} />)
          }
        </tbody>
      </table>
      <p>{gameover ? "game over" : ""}</p>
    </div>
      );
};
export default Component;
