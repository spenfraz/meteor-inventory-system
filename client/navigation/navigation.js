

  Template.register.events({
    'submit form': function(event){
         event.preventDefault();

      }
    });

    Template.login.events({
      'submit form': function(event){
        event.preventDefault();

      }
    });

    Template.navigation.events({
      'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
      }
    });

