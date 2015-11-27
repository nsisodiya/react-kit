export default {
	clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	},
	iff(condition, trueRet, falseRet){
		if (condition === true) {
			return trueRet;
		} else {
			return falseRet;
		}
	},
	mapObject(obj, cb){
		var a = [];
		Object.keys(obj).map(function (key) {
			a.push(cb(obj[key], key));
		});
		return a;
	}
};