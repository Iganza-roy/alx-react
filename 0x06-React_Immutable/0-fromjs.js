const { fromJS } = require('immutable');

const getImmutableObject = (object) => {
  return fromJS(object);
};

export default getImmutableObject();
