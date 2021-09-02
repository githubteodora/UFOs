// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// creating a function. We're using a standard JavaScript function instead of an arrow function because of what we'll be inserting inside the function (hint: another function!).
// this entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas. This is a standard way to clear data.
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {let row = tbody.append("tr"); // THE CODE tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr"). he <tr> tags are used for each row in a table. 
    // We're already working with an array of objects, where each object is a UFO sighting. By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings. 
    // By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. We've added forEach((val) to specify that we want one object per row;
    // we're telling our code put each sighting onto its own row of data.
    Object.values(dataRow).forEach((val) => { 
        let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// With this function, we have done the following:
// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from the object into a cell

// we need to add filters to the table. 

