const initialState = {
  energy: 10,
  money: 0,
  items: []
}
let state = initialState;

function reducer(state, action) {
  switch(action.type) {
    case 'PICKUP_ITEM':
      return {
        ...state,
        energy: state.energy - action.payload.weight,
        items: [...state.items, action.payload]
      };
    case 'SELL_ITEM':
      return {
        ...state,
        money: state.money + action.payload.weight,
        items: state.items.filter(item => item !== action.payload)
      };
    case 'REST': 
      return {
        ...state,
        energy: state.energy + action.payload,
        money: state.money - action.payload
      };
    default:
      return state;
  }
}

// state = energy->10, money->0 items->[]
state = reducer(state, {
  type: 'PICKUP_ITEM',
  payload: { name: 'vest', weight: 5 }
});
// energy->5, money->0, items->[vest-5]

state = reducer(state, {
  type: 'PICKUP_ITEM',
  payload: { name: 'shoes', weight: 3 }
});

// energy->2, money->0, items=[vest-5,shoes-3]

state = reducer(state, {
  type: 'PICKUP_ITEM',
  payload: { name: 'cup', weight: 2 }
});

// energy->0, money->0, items->[vest-5,shoes-3,cup-2]

state = reducer(state, {
  type: 'SELL_ITEM',
  payload: state.items[1]
});

// energy->0, money->3, items->[vest-5,cup-2]

state = reducer(state, {
  type: 'REST',
  payload: 3
});

// energy->3, money->0, items->[vest-5, cup-2]

state = reducer(state, {
  type: 'PICKUP_ITEM',
  payload: { name: 'gold', weight: 3 }
});
state = reducer(state, {
  type: 'SELL_ITEM',
  payload: state.items[2]
});
state = reducer(state, {
  type: 'REST',
  payload: 3
});
console.log(state); // what will print
