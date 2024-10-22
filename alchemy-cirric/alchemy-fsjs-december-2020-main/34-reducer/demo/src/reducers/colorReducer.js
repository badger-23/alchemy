export const initialState = {
  bgColor: '#00FF00',
  fgColor: '#0000FF',
  text: ''
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'BG_COLOR_CHANGE':
      return { ...state, bgColor: action.payload };
    case 'FG_COLOR_CHANGE':
      return { ...state, fgColor: action.payload };
    case 'TEXT_CHANGE':
      return { ...state, text: action.payload };
    default:
      return state;
  }
}
