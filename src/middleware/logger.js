const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log(action);
	const returnValue = next(action);
	console.log(returnValue);
	console.log("The new state", store.getState());
	console.groupEnd();
	return returnValue;
};

export { logger };
