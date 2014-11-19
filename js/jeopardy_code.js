//questionList from question list file
function addSquares(){
	for (i=1; i<6; i++){
		for (j=1; j<6; j++){
			coord_string="#col"+i+"-"+j;
			box_id="box"+i+j;
			$('<span class="box" id=box_id></span>').appendTo(coord_string);
		}
	}
}


function initialize(){
	addSquares();
	console.log(QA);
}
function sortOn(property, map){
	function compareTo(a,b){
		if (map(a[property])>map(b[property])){
		return 1;
		}
		if (map(a[property])<map(b[property])){
		return -1;
		}
		return 0;
	}
	return compareTo;
}
function sortOn2(prop1,prop2,map1,map2){
	function compareTo(a,b){
		if (map1(a[prop1])>map1(b[prop1])){
			return 1;
		}
		if (map1(a[prop1])<map1(b[prop1])){
			return -1;
		}
		if (map2(a[prop2])>map2(b[prop2])){
			return 1;
		}
		if (map2(a[prop2])<map2(b[prop2])){
			return -1;
		}
		return 0;
	}
	return compareTo
}

function sortQAByProp(property,map){
	property=property||"subject";
	map=map||identity;
	return QA.sort(sortOn(property,map));
}
function identity(x){
	return x;
}
function sortQAByTwo(prop1,prop2,map1, map2){
	prop1 = prop1 || "score";
	prop2 = prop2 || "subject";
	map1 = map1 || identity;
	map2 = map2 || identity;
	console.log(prop1,prop2,map1,map2);
	return QA.sort(sortOn2(prop1,prop2,map1,map2));
}
initialize();
console.log("should have initiailized...");