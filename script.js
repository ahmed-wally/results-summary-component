function adder(doc, txt) {
	let ele = document.querySelector(doc).querySelector('.score')
	ele.textContent = txt;
	return ele
}

const xhr = new XMLHttpRequest();
xhr.overrideMimeType('application/json');
xhr.open('GET', 'data.json', true);
xhr.send();
var data;
xhr.onreadystatechange = function (data) {
if (this.readyState === 4 && this.status ===200) {
	data = JSON.parse(this.responseText)
	const reaction = data[0].score
	const memory = data[1].score
	const verbal = data[2].score
	const visual = data[3].score
	adder('.reaction', reaction)
	adder('.memory', memory)
	adder('.verbal', verbal)
	adder('.visual', visual)
	document.querySelector('.circle').querySelector('#final-score').textContent = Math.round((reaction+memory+verbal+visual) / 4)
}}

