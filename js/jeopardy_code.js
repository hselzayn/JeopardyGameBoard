//questionList from question list file
var lookup_init=false;
function addSquares(){
	for (i=0; i<6; i++){
		for (j=1; j<6; j++){
			coord_string="#col"+i+"-"+j;
			box_id="box"+i+"-"+j;
			$('<span class="box" id='+box_id+'></span>').appendTo(coord_string);
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

	QA_sorted= QA.sort(sortOn(property,map));
	for (var i = 0, len=QA_sorted.length; i < len; i++){
		sortedLookup[QA_sorted[i].question]=QA_sorted[i];
	}

	return QA_sorted;
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
	QA_sorted = QA.sort(sortOn2(prop1,prop2,map1,map2));
	for (var i = 0, len=QA_sorted.length; i < len; i++){
			sortedLookup[QA_sorted[i].question]=i;
		}
	return QA_sorted;
}
initialize();
console.log("should have initiailized...");
//take a question. looks up sorted array. I is row, so returns row. In sorted array, that is array index %5

function addQuestion(q){
		//row = (sortedLookup[q.question] % 5)+1;
		//col = sortedLookup[q.question] - (sortedLookup	[q.question]%5);
		col=topic_order[q.subject];
		row=score_order[q.score];
		id="#box"+row+"-"+col;
		console.log(id);
		$(id).text(q.score);
}
function addAllQuestions(){
	QA.forEach(function(x){
		console.log(x);
		addQuestion(x);
	});
}