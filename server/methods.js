
  Meteor.methods({

    'deleteDep': function(depName){
      var currentUser = Meteor.userId();
      Inventory.remove({ department: depName, createdBy: currentUser });
      Departments.remove({ name: depName, createdBy: currentUser });
    },

    'createDepartment': function(depName){
      var currentUser = Meteor.userId();
      var data = {
        name: depName,
        createdBy: currentUser
      }
      Departments.insert(data);
    },

    'createInvItem': function(data){
      var currentUser = Meteor.userId();
      Inventory.insert(data);
    },

    'updateItem': function(itemId,setValue){
      var currentUser = Meteor.userId();
      var data = {
         _id: itemId,
         createdBy: currentUser
      }
      Inventory.update(data, {$set: setValue});
    },

    'deleteItem': function(data){
      Inventory.remove(data);
    }

  });

