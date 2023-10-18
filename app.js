$(document).ready(function() {
    var data = [
        { name: "Ann", value: 11 },
        { name: "Mark", value: 25 },
    ];

    function displayData() {
        $("#container").empty();

        _.forEach(data, function(item) {
            $("#container").append("<p>" + item.name + ": " + item.value + "</p>");
        });
    }

    $("#button-1").click(function() {
        data = _.map(data, function(item) {
            return { name: item.name, value: item.value * 2 };
        });
        displayData();
    });


    $("#button-2").click(function() {
        data = _.map(data, function(item) {
            var randomScore = Math.floor(Math.random() * 10); 
            return { name: item.name, value: item.value + randomScore };
        });
        displayData();
    });


    $("#button-3").click(function() {
        data = _.map(data, function(item) {
            return { name: item.name, value: 0 };
        });
        displayData();
    });


    $("#button-4").click(function() {
        _.forEach(data, function(item) {
            var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
            $("#container p:contains('" + item.name + "')").css("color", randomColor);
        });
    });

    $("#button-5").click(function() {
        var filterValue = parseInt(prompt("Enter the point for filtration:"));
        if (!isNaN(filterValue)) {
            data = _.filter(data, function(item) {
                return item.value >= filterValue;
            });
            displayData();
        }
    });

    $("#button-6").click(function() {
        data = _.sortBy(data, ['value']);
        displayData();
    });

    $("#button-7").click(function() {
        data = _.sortBy(data, ['value']).reverse();
        displayData();
    });

    $("#button-8").click(function() {
        var newName = prompt("Enter new name:");
        var newValue = parseInt(prompt("Enter points of this person:"));
        if (newName && !isNaN(newValue)) {
            data.push({ name: newName, value: newValue });
            displayData();
        }
    });

    $("#button-9").click(function() {
        var nameToRemove = prompt("Enter the name which you want to delete:");
        if (nameToRemove) {
            data = _.filter(data, function(item) {
                return item.name !== nameToRemove;
            });
            displayData();
        }
    });

    $("#button-10").click(function() {
        data = [];
        displayData();
    });





    displayData();
});