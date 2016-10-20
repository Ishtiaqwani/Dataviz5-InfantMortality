//create an empty data array for converted json

var dataArray=[];

//create headers for the data array 
var headers=['Year','Total','Boys','Girls'];
console.log(json);

dataArray.push(headers);

//loop through the json, converting each object into an appropriate array
json.forEach(fuction(d){
	dataArray.push([d.year.toString(),d.total,d.boys,d.girls]);
});
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
  var data= google.visualization.arrayToDataTable(dataArray)};
	var options = {
		chartArea: {
			left:'50',
			top: '20',
			bottom: '50',
			right: '100'
		}
		focusTarget:"category" ,
		colors:['red' 'green' 'purple'],
		hAxis: {
			title:'year'
		},
		vAxis:{
			title: 'Infant Mortality Rate' }
	  
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart'));

	chart.draw(data, options);
  }