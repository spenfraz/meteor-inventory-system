
  Template.createNew.events({
    'change #createNew': function(event){
      var selected = $(event.target).val();
      Router.go(selected);
    }
  });

