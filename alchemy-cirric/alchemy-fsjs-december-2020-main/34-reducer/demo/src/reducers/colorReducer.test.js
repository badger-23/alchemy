import reducer from './colorReducer';

describe('color reducer', () => {
  it('handles the BG_COLOR_CHANGE action', () => {
    const state = {
      bgColor: '#FF0000',
      fgColor: '#00FF00',
      text: ''
    };

    const action = {
      type: 'BG_COLOR_CHANGE',
      payload: '#00FF00'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      bgColor: '#00FF00',
      fgColor: '#00FF00',
      text: ''
    });
  });

  it('handles the FG_COLOR_CHANGE action', () => {
    const state = {
      fgColor: '#00FF00',
      bgColor: '#FF0000',
      text: ''
    };

    const action = {
      type: 'FG_COLOR_CHANGE',
      payload: '#0000FF',
    };
    
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      fgColor: '#0000FF',
      bgColor: '#FF0000',
      text: ''
    });
  });

  it('handles the TEXT_CHANGE action', () => {
    const state = {
      bgColor: '#FF0000',
      fgColor: '#00FF00',
      text: ''
    };

    const action = {
      type: 'TEXT_CHANGE',
      payload: 'hello'
    };

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      bgColor: '#FF0000',
      fgColor: '#00FF00',
      text: 'hello'
    });
  });
});
