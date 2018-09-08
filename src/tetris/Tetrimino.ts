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
      [ 0, 7, 0, ],
      [ 7, 7, 0, ],
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
 
// const tetrinoMask0 = new Map<ETetrimino, number[][]>([
//   [ ETetrimino.I, [
//     [ 0, 0, 0, 0, ],
//     [ 1, 1, 1, 1, ],
//   ]],
//   [ ETetrimino.O, [
//     [ 1, 1, ],
//     [ 1, 1, ],
//   ] ],
//   [ ETetrimino.S, [
//     [ 0, 1, 1 ],
//     [ 1, 1, 0 ],
//   ]],
//   [ ETetrimino.Z, [
//     [ 1, 1, 0 ],
//     [ 0, 1, 1 ],
//   ]],
//   [ ETetrimino.J, [
//     [ 0, 0, 1 ],
//     [ 1, 1, 1 ],
//   ]],
//   [ ETetrimino.L, [
//     [ 1, 0, 0 ],
//     [ 1, 1, 1 ]
//   ]],
//   [ ETetrimino.T, [
//     [ 0, 1, 0 ],
//     [ 1, 1, 1 ],
//   ]],
// ]);

// const tetrinoMask1 = new Map<ETetrimino, number[][]>([
//   [ ETetrimino.I, [
//     [ 0, 0, 1, ],
//     [ 0, 0, 1, ],
//     [ 0, 0, 1, ],
//     [ 0, 0, 1, ],
//   ]],
//   [ ETetrimino.O, [
//     [ 1, 1, ],
//     [ 1, 1, ],
//   ] ],
//   [ ETetrimino.S, [
//     [ 0, 1, 0, ],
//     [ 0, 1, 1, ],
//     [ 0, 0, 1, ],
//   ]],
//   [ ETetrimino.Z, [
//     [ 0, 0, 1, ],
//     [ 0, 1, 1, ],
//     [ 0, 1, 0, ],
//   ]],
//   [ ETetrimino.J, [
//     [ 0, 1, 0, ],
//     [ 0, 1, 0, ],
//     [ 0, 1, 1, ],
//   ]],
//   [ ETetrimino.L, [
//     [ 0, 1, 1, ],
//     [ 0, 1, 0, ],
//     [ 0, 1, 0, ],
//   ]],
//   [ ETetrimino.T, [
//     [ 0, 1, 0, ],
//     [ 0, 1, 1, ],
//     [ 0, 1, 0, ],
//   ]],
// ]);

// const tetrinoMask2 = new Map<ETetrimino, number[][]>([
//   [ ETetrimino.I, [
//     [ 0, 0, 0, 0, ],
//     [ 0, 0, 0, 0, ],
//     [ 1, 1, 1, 1, ],
//   ]],
//   [ ETetrimino.O, [
//     [ 1, 1, ],
//     [ 1, 1, ],
//   ] ],
//   [ ETetrimino.S, [
//     [ 0, 1, 1 ],
//     [ 1, 1, 0 ],
//   ]],
//   [ ETetrimino.Z, [
//     [ 1, 1, 0 ],
//     [ 0, 1, 1 ],
//   ]],
//   [ ETetrimino.J, [
//     [ 1, 1, 1 ],
//     [ 1, 0, 0 ],
//   ]],
//   [ ETetrimino.L, [
//     [ 1, 1, 1 ],
//     [ 0, 0, 1 ]
//   ]],
//   [ ETetrimino.T, [
//     [ 0, 0, 0 ],
//     [ 1, 1, 1 ],
//     [ 0, 1, 0 ],
//   ]],
// ]);

// const tetrinoMask3 = new Map<ETetrimino, number[][]>([
//   [ ETetrimino.I, [
//     [ 0, 1, ],
//     [ 0, 1, ],
//     [ 0, 1, ],
//     [ 0, 1, ],
//   ]],
//   [ ETetrimino.O, [
//     [ 1, 1, ],
//     [ 1, 1, ],
//   ] ],
//   [ ETetrimino.S, [
//     [ 1, 0, 0, ],
//     [ 1, 1, 0, ],
//     [ 0, 1, 0, ],
//   ]],
//   [ ETetrimino.Z, [
//     [ 0, 1, 0, ],
//     [ 1, 1, 0, ],
//     [ 1, 0, 0, ],
//   ]],
//   [ ETetrimino.J, [
//     [ 1, 1, 0, ],
//     [ 0, 1, 0, ],
//     [ 0, 1, 0, ],
//   ]],
//   [ ETetrimino.L, [
//     [ 0, 1, 0, ],
//     [ 0, 1, 0, ],
//     [ 1, 1, 0, ],
//   ]],
//   [ ETetrimino.T, [
//     [ 0, 1, ],
//     [ 1, 1, ],
//     [ 0, 1, ],
//   ]],
// ]);

// export function getmMask(tetorino: ETetrimino, rotation: number) {
//   switch(rotation) {
//     case 0:
//       return tetrinoMask0.get(tetorino);
//     case 1:
//       return tetrinoMask1.get(tetorino);
//     case 2:
//       return tetrinoMask2.get(tetorino);
//     case 3:
//       return tetrinoMask3.get(tetorino);
//   }
//   return tetrinoMask0.get(tetorino);
// }
