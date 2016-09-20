const space = function(spc) {
	if (spc === 0) {
return "";
}
return " " + space(spc - 1);
};

const star = function(str) {
if (str === 1) { 
return "*";
}
return "*" + star(str - 1);
};

const run = function(n, str, spc) {
	if (n === 0) {
		return "";
	}
	console.log(space(spc) + star(str));
	run((n-1), (str+2), (spc-1));
};

const triangleStars = function(n) {
a(n,1,n-1);
}
triangleStars(5);