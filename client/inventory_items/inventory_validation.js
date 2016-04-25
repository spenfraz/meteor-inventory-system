$.validator.addMethod('itemUnique', ( item ) => {
    var currentuser = Meteor.userId();
    let exists = Inventory.findOne({ "name": item, createdBy: currentuser}, { fields: {"name": 1}});
    return exists ? false : true;
});


Template.addItem.onRendered(function(){
    $('#add-item').validate({
         rules: {
            itemName: {
              required: true,
              minlength: 3,
              itemUnique: true
            }
         },
          messages: {
            itemName:{
              required: "Need an item name here.",
              minlength: "Name must  at least {0} characters long",
              itemUnique: "This item already exists."
            }
          }

    })
});


