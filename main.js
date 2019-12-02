//eMenu module to add/delete items to menu
window.onload = function() {

    // Initialize the activityNumber
    var itemNumber = 1;

    // Select the add_activity button
    var addButton = document.getElementById("addItem");

    // Select the table element
    var menuTable = document.getElementById("menuItems");

    let itemName = [];
    let itemPrice = [];

    // Attach handler to the button click event
    addButton.onclick = function() {
        itemName[itemNumber] = document.getElementById("itemName").value;
        itemPrice[itemNumber] = document.getElementById("itemPrice").value;
        console.log(itemName)
      // Add a new row to the table using the correct activityNumber
        menuTable.innerHTML += "<tr><td>" + itemNumber + ": " + "</td>" + "<td>" + itemName[itemNumber] + " | " + "</td>" + "<td>" + itemPrice[itemNumber] + " </td> <td><button id=delete>Delete</button></td></tr> <br>";
        
        //delete function
        

       //empty the inputs
        document.getElementById("itemName").value = "";
        document.getElementById("itemPrice").value = "";
        
      // Increment the activityNumber
       itemNumber += 1;
    }
    // let deleteButton = document.getElementById("delete");
    // deleteButton.onclick = function(){
    //     menuTable.innerHTML 
    }

  }