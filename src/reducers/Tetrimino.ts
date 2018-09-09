export enum ETetrimino {
  I,
  O,
  S,
  Z,
  J,
  L,
  T,
};


const tetrinoMaskI: number[][][] = 
  [
    [
      [ 0, 0, 0, 0, ],
      [ 1, 1, 1, 1, ],
    ],
    [
      [ 0, 0, 1, ],
      [ 0, 0, 1, ],
      [ 0, 0, 1, ],
      [ 0, 0, 1, ],
    ],
    [
      [ 0, 0, 0, 0, ],
      [ 0, 0, 0, 0, ],
      [ 1, 1, 1, 1, ],
    ],
    [
      [ 0, 1, ],
      [ 0, 1, ],
      [ 0, 1, ],
      [ 0, 1, ],
    ]
  ];

  const tetrinoMaskO: number[][][] = 
  [
    [
      [ 2, 2, ],
      [ 2, 2, ],
    ],
    [
      [ 2, 2, ],
      [ 2, 2, ],
    ],
    [
      [ 2, 2, ],
      [ 2, 2, ],
    ],
    [
      [ 2, 2, ],
      [ 2, 2, ],
    ],
  ];

  const tetrinoMaskS: number[][][] = 
  [
    [
      [ 0, 3, 3 ],
      [ 3, 3, 0 ],
    ],
    [
      [ 0, 3, 0, ],
      [ 0, 3, 3, ],
      [ 0, 0, 3, ],
    ],
    [
      [ 0, 3, 3 ],
      [ 3, 3, 0 ],
      ],
    [
      [ 3, 0, ],
      [ 3, 3, ],
      [ 0, 3, ],
    ],
  ];

  const tetrinoMaskZ: number[][][] = 
  [
    [
      [ 4, 4, 0 ],
      [ 0, 4, 4 ],
    ],
    [
      [ 0, 0, 4, ],
      [ 0, 4, 4, ],
      [ 0, 4, 0, ],
    ],
    [
      [ 4, 4, 0 ],
      [ 0, 4, 4 ],
    ],
    [
      [ 0, 4, 0, ],
      [ 4, 4, 0, ],
      [ 4, 0, 0, ],
    ],
  ];

  const tetrinoMaskJ: number[][][] = 
  [
    [
      [ 0, 0, 5 ],
      [ 5, 5, 5 ],
    ],
    [
      [ 0, 5, 0, ],
      [ 0, 5, 0, ],
      [ 0, 5, 5, ],
    ],
    [
      [ 5, 5, 5 ],
      [ 5, 0, 0 ],
    ],
    [
      [ 5, 5, 0, ],
      [ 0, 5, 0, ],
      [ 0, 5, 0, ],
    ],
  ];

  const tetrinoMaskL: number[][][] = 
  [
    [
      [ 6, 0, 0 ],
      [ 6, 6, 6 ]
    ],
    [
      [ 0, 6, 6, ],
      [ 0, 6, 0, ],
      [ 0, 6, 0, ],
    ],
    [
      [ 6, 6, 6 ],
      [ 0, 0, 6 ]
    ],
    [
      [ 0, 6, 0, ],
      [ 0, 6, 0, ],
      [ 6, 6, 0, ],
    ],
  ];

  const tetrinoMaskT: number[][][] = 
  [
    [
      [ 0, 7, 0 ],
      [ 7, 7, 7 ],
      ],
    [
      [ 0, 7, 0, ],
      [ 0, 7, 7, ],
      [ 0, 7, 0, ],
    ],
    [
      [ 0, 0, 0 ],
      [ 7, 7, 7 ],
      [ 0, 7, 0 ]
    ],
    [
      [ 0, 7, 0, ],
      [ 7, 7, 0, ],
      [ 0, 7, 0, ],
    ],
  ];

export function getmMask(tetorino: ETetrimino, rotation: number): number[][] {
  switch(tetorino) {
    case ETetrimino.I:
      return tetrinoMaskI[rotation];
    case ETetrimino.O:
      return tetrinoMaskO[rotation];
    case ETetrimino.S:
      return tetrinoMaskS[rotation];
    case ETetrimino.Z:
      return tetrinoMaskZ[rotation];
    case ETetrimino.J:
      return tetrinoMaskJ[rotation];
    case ETetrimino.L:
      return tetrinoMaskL[rotation];
    case ETetrimino.T:
      return tetrinoMaskT[rotation];
  }
}
