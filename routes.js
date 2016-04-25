Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/register');
Router.route('/login');

Router.route('/inventory');
Router.route('/addDepartment');

