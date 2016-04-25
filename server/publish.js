
  Meteor.publish('inventory', function(){
      var currentUser = this.userId;
      return Inventory.find({ createdBy: currentUser });
  });

  Meteor.publish('departments', function(){
      var currentUser = this.userId;
      return Departments.find({ createdBy: currentUser });
  });


