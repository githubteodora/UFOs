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

//ADD FILTERS
// We need to add filters to the table. 

// Since we're adding a date function, we need to create a couple of variables to hold our date data, both filtered and unfiltered.
// The .select() function is a very common one used in D3. It will select the very first element that matches our selector string: "#datetime". The selector string is the item we're telling D3.js to look for.
// By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored on the webpage, but to actually grab that information and hold it in the "date" variable.

function handleClick() {
    let date = d3.select("#datetime").property("value");
    // Now we need to set a default filter and save it to a new variable
    let filteredData = tableData;
    // The next step is to check for a date filter using an if statement.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date); // his line is what applies the filter to the table data. It's basically saying, "Show only the rows where the date is equal to the date filter we created above." The triple equal signs test for equality, meaning that the date in the table has to match our filter exactly.
    };
    // Build the Filtered Table
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};
// Our handleClick() function tells the code what to do when an event occurs (such as someone clicking a filter button), 
// and it can apply that filtered data using an if statement. Being able to do all of this is great, especially since it 
// involves creating functions written in a syntax that isn't the easiest to learn. There is one more step to complete with this function, though: 
// building the table using the filtered data. - SEE ROW 46

// Listen for the Event

d3.selectAll("#filter-btn").on("click", handleClick);
// Our selector string contains the id for another HTML tag. (We'll assign a unique id to a button element in the HTML called "filter-btn".)
//  This time it'll be included in the button tags we create for our filter button. By adding this, we're linking our code directly to the filter button. 
// Also, by adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.


// Build the Final Table
buildTable(tableData);


