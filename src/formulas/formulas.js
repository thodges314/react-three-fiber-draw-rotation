const discMethod1 = {
  domain: [1, 4],
  func: (x) => x ** 3 - 7 * x ** 2 + 14 * x - 5,
  intFunc: (x) => (1 / 4) * x ** 4 - (1 / 7) * x ** 3 + 7 * x ** 2 - 5 * x,
  resolution: 5,
};

const discMethodView = {
  threeDView: [2, 0, 0],
  twoDView: [2, 1, 0],
  cameraPosition: [2.5, 0, 10],
  axesLength: 6,
  labelProportion: 1,
};

const discMethodRaise = {
  domain: [1, 4],
  func: (_x) => -1,
  intFunc: (_x) => 0,
  resolution: 5,
};

const discMethodRaiseView = {
  threeDView: [2, 0, 0],
  twoDView: [2, 1, 0],
  cameraPosition: [2.5, 0, 10],
  axesLength: 6,
  labelProportion: 1,
};

const washerMethod1 = {
  domain: [0, 1],
  func: (x) => x ** 2,
  intFunc: (x) => 2 * x,
  resolution: 10,
};

const washerMethod2 = {
  domain: [0, 1],
  func: (x) => x ** (1 / 2),
  intFunc: (x) => (1 / 2) * x ** (-1 / 2),
  resolution: 10,
};

const washerMethod = {
  domain: [0, 1],
  bigFunc: (x) => x ** (1 / 2),
  littleFunc: (x) => x ** 2,
  intBigFunc: (x) => (1 / 2) * x ** (-1 / 2),
  intLittleFunc: (x) => 2 * x,
  resolution: 10,
};

const washerMethodView = {
  threeDView: [0.5, 0, 0],
  twoDView: [0.5, 0.25, 0],
  cameraPosition: [1.5, 0, 3],
  axesLength: 2,
  labelProportion: 1 / 3,
};

export {
  discMethod1,
  discMethodRaise,
  discMethodRaiseView,
  discMethodView,
  washerMethod,
  washerMethod1,
  washerMethod2,
  washerMethodView,
};
