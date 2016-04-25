Template.depView.helpers({
    'depItem': function(){
      var currentUser = Meteor.userId();
      var data = {
        createdBy: currentUser
      }
      return Departments.find(data);
    }
});

Template.depView.events({
   'click .dep': function(event){
     event.preventDefault();
     var depName = $(event.target).attr('value');
     Session.set('Department',depName);
     Router.go('/inventory');
   },
   'click .delete-item': function(event){
     event.preventDefault();
     var depName = $(event.target).attr('value');
     var confirm = window.confirm("Are you sure? All inventory items within this department will be deleted.");
     if(confirm){
      Meteor.call('deleteDep',depName);
      Router.go('/addDepartment');
     }
   }
});

Template.addDepartment.events({
    'submit form': function(event){
      event.preventDefault();
      var depName = $('[name=depName]').val();
      Meteor.call('createDepartment', depName);
      $('[name=depName]').val("");
    }
});


  Template.selectDepartment.helpers({
    'depItem': function(){
       var currentUser = Meteor.userId();
       var data ={
          createdBy: currentUser
       }
       return Departments.find(data);
    }
  });

  Template.selectDepartment.events({
    'change #invDepartment': function(event){
      var selected = $(event.target).val();
      Session.set('Department',selected);
    }
  });

