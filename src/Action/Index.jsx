const TodoListAction = (dispatch) => {//【dispatch action】
  // 定义action
  const Add = { type: 'Add' };
  function Remove(i) {
    return {
      type: 'Remove',
      index: i,
    };
  }

  return {
    handleAdd: () => dispatch(Add),
    handleRemove: i => dispatch(Remove(i)),
  };
};

const LikeAction = (dispatch) => {
  // 定义action
  const change = { type: 'change' };
  const no={type:"no"};
  return {
    handleClick: () => dispatch(change),
    handleNo:()=>dispatch(no)
  };
};

const babylonAction = (dispatch) => {
  // 定义action
  const block = { type: 'block' };
  return {
    handleBlock: () => dispatch(block),
  };
}; 

export { TodoListAction, LikeAction, babylonAction };
