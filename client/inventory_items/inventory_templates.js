


 Template.inventoryItem.events({
     'click #delete-item': function(event){
       event.preventDefault();
       var currentUser = Meteor.userId();
       var itemId = this._id;
       var data = {
           _id: itemId,
           createdBy: currentUser
       }
       var confirm = window.confirm("Delete this item?");
       if(confirm){
          Meteor.call('deleteItem',data);
       }
     },

     'keyup #itemName':function(event){
       if(event.which == 13 || event.which == 27){
           $(event.target).blur();
       } else {
          var itemName = $(event.target).val();
          var itemId = this._id;
          var setValue = { name: itemName }
          Meteor.call('updateItem', itemId, setValue);
        }
      },

     'keyup #itemCost':function(event){
        if(event.which == 13 || event.which == 27){
            $(event.target).blur();
        } else {
          var itemCost = $(event.target).val();
          var itemId = this._id;
          var setValue = { cost: itemCost }
          Meteor.call('updateItem', itemId, setValue);
        }
     },

     'keyup #itemCount':function(event){
         if(event.which == 13 || event.which == 27){
             $(event.target).blur();
          } else {
            var itemCount = $(event.target).val();
            var itemId = this._id;
            var setValue = { quantity: itemCount }
            Meteor.call('updateItem',itemId, setValue);
          }
     }
  });



Template.invView.helpers({
   'invItem': function(){
     var currentUser = Meteor.userId();
     var itemDepartment = Session.get('Department');
     var data = {
        createdBy: currentUser,
        department: itemDepartment
     }
     return Inventory.find(data);
   }
 });

  Template.addItem.events({
    'submit form':function(event){
      event.preventDefault();
      var currentUser = Meteor.userId();
      var itemDepartment = Session.get('Department');
      var itemName = $('[name=itemName]').val();
      var itemCount = $('[name=itemCount]').val();
      var itemCost = $('[name=itemCost]').val();
      var data = {
        createdBy: currentUser,
        department: itemDepartment,
        name: itemName,
        quantity: itemCount,
        cost: itemCost

      }
      Meteor.call('createInvItem', data);
      $('[name=itemName]').val("");
      $('[name=itemCount]').val("");
      $('[name=itemCost]').val("");
    }

  });
