/* Train Scheduler: Firebase and moment.js*/
// Steps:
// 1. Initialize Firebase
// 2. Create button for adding new train- then update the html + update the database
// 3. Create a way to retrieve train schedules from the train database.
// 4. Create a way to calculate the Next Arrival. Then use moment.js formatting to set difference in months.
// 5. Calculate Minutes Away

// 1. Initialize Firebase
  var config = {
    apiKey: "AIzaSyAQsU4vE-eE4WIPGN6cxzdb_-jemZm01Qg",
    authDomain: "train-schedule-32d1b.firebaseapp.com",
    databaseURL: "https://train-schedule-32d1b.firebaseio.com",
    projectId: "train-schedule-32d1b",
    storageBucket: "train-schedule-32d1b.appspot.com",
    messagingSenderId: "862607950133"
  };
  firebase.initializeApp(config);
  </script>

  <script type="text/javascript">
  database = firebase.database();
      $("#submit").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      // 2. Button for adding New Train
      $("#add-train-btn").on("click", function(event) {
      event.preventDefault();

      // Grabs user input
      var trName = $("#train-name-input").val().trim();
      var trDestination = $("#destination-input").val().trim();
      var trFirst = moment($("#first-input").val().trim(), "HH:mm").format("X");
      var trFrequency = $("#frequency-input").val().trim();

      // Creates local "temporary" object for holding employee data
      var newTrain = {
      name: trName,
      destination: trDestination,
      first: trFirst,
      frequency: trFrequency
      };

      // Uploads employee data to the database
      database.ref().push(newTrain);

      // Logs everything to console
      console.log(trName.name);
      console.log(trDestination.destination);
      console.log(trFirst.first);
      console.log(trFrequency.frequency);

      // Alert
      alert("New Train successfully added!");

      // Clears all of the text-boxes
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#first-input").val("");
      $("#frequency-input").val("");
      });

      // 3. Create Firebase event for adding the new train to the database and a row in the html when a user adds an entry
      database.ref().on("child_added", function(childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());

      // Store everything into a variable.
      var trName = childSnapshot.val().name;
      var trDestination = childSnapshot.val().destination;
      var trFirst = childSnapshot.val().first;
      var trFrequency = childSnapshot.val().frequency;

      // Employee Info
      console.log(trName);
      console.log(trDestination);
      console.log(trFirst);
      console.log(trFrequency);


      var startTime = moment().hour(3).minute(30).seconds(0);
      console.log(startTime.format());
        var frequency = 15;

      var currentTime = moment()
      console.log(currentTime.forma())

      var difference = currentTime.diff(startTime, "minutes");
      console.log(difference)

      var minutesSinceLastTrain = difference % frequency;
      console.log(minutesSinceLastTrain)

      var minutesTillNextTrain = frequency - minutesSinceLastTrain
      console.log(minutesTillNextTrain)

      // Add each train's data into the table
      $("#train-table > tbody").append("<tr><td>" + trName + "</td><td>" + trDestination + "</td><td>" +
      empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
    });













      var emName = $("#Name").val().trim();
      var emRole = $("#Role").val().trim();
      var emStartDate = $("#StartDate").val().trim();
      var emMonthlyRate = $("#MonthlyRate").val().trim();
      var dateAdded = moment().format()

      console.log(emName)
      console.log(dateAdded)
      console.log(emStartDate)

      database.ref().push({
        emName: emName,
        emRole: emRole,
        emStartDate: emStartDate,
        emMonthlyRate: emMonthlyRate,
        dateAdded: dateAdded

      });
    });

database.ref().on("child_added", function (snapshot){

      console.log(snapshot.val())
      console.log(snapshot.val().emName)
      console.log(snapshot.val().emRole)
      console.log(snapshot.val().emStartDate)
      console.log(snapshot.val().emMonthlyRate)
      console.log(snapshot.val().dateAdded)


      $("#showName").append(snapshot.val().emName + "<br>")
      $("#showRole").append(snapshot.val().emRole + "<br>")
      $("#showStartDate").append(snapshot.val().emStartDate + "<br>")
      $("#showMonthlyRate").append(snapshot.val().emMonthlyRate + "<br>")
  

 });  












// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
  authDomain: "time-sheet-55009.firebaseapp.com",
  databaseURL: "https://time-sheet-55009.firebaseio.com",
  storageBucket: "time-sheet-55009.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var empRate = $("#rate-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newEmp = {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
  };

  // Uploads employee data to the database
  database.ref().push(newEmp);

  // Logs everything to console
  console.log(newEmp.name);
  console.log(newEmp.role);
  console.log(newEmp.start);
  console.log(newEmp.rate);

  // Alert
  alert("Employee successfully added");

  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var empName = childSnapshot.val().name;
  var empRole = childSnapshot.val().role;
  var empStart = childSnapshot.val().start;
  var empRate = childSnapshot.val().rate;

  // Employee Info
  console.log(empName);
  console.log(empRole);
  console.log(empStart);
  console.log(empRate);

  // Prettify the employee start
  var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  console.log(empMonths);

  // Calculate the total billed rate
  var empBilled = empMonths * empRate;
  console.log(empBilled);

  // Add each train's data into the table
  $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
  empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case


