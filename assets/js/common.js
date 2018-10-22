BCS={
	data: [{
		"id": 1,
		"name": "Bob",
		"account": "ACC123",
		"value": 500,
		"created": "2017-01-11"
	},
	{
		"id": 2,
		"name": "Alice",
		"account": "BBB321",
		"value": 300,
		"created": "2017-03-05"
	},
	{
		"id": 3,
		"name": "Jim",
		"account": "BAA456",
		"value": 20.5,
		"created": "2017-02-12"
	},
	{
		"id": 4,
		"name": "Liz",
		"account": "BBB654",
		"value": 1000,
		"created": "2017-04-30"
	}]
}

$(document).ready(function(){
	
	//-- filter data so that accounts starting with "B" are excluded.
	var data = $.grep(BCS.data, function(value) {
	  return value.account.charAt(0) == "B";
	});
	
	//-- populate the grid with the now filtered BSC data.
	$("#grid").jsGrid({
	width: "100%",
	height: "400px",
	selecting: false,
	inserting: false,
	editing: false,
	sorting: true,
	paging: false,
	data: data,
	rowClass: function(item, itemIndex) {
		if (item.value < 100) return "red";
		if (item.value > 500) return "green";
	},
		 
	fields: [
		{ name: "id", type: "number", width: 50 },
		{ name: "name", type: "text", width: 150 },
		{ name: "account", type: "text", width: 150 },
		{ name: "value", type: "number", width: 50,
		  itemTemplate: function(value) {
            return value.toFixed(2);
		  }
		},
		{ name: "created", type: "date", width: 100,
		  itemTemplate: function(value) {
            return moment(value, 'YYYY-MM-DD').format('DD MMMM YYYY'); // bringing in moment.js for this is probably overkill TBF.
		  }
		}
	]});
	
	//-- set the grid's sorted by column to default to 'account'.
	$("#grid").jsGrid("sort", "account");
});

