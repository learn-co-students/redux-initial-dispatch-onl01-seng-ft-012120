let state;

function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state = { count: 0 }, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({type: '@@INIT'})