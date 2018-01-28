function negativeSum(...args){
	return args.reduce( (arg, total) => {
		return total - arg;
	}, 0);
}

console.log(negativeSum(1, 5, 10));
//use node.js debugger with google chrome debugger to debug the application.
// use command  : node --inspect --debug-brk index.js