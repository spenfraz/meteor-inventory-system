

$.validator.addMethod('depUnique', ( department ) => {
    var currentuser = Meteor.userId();
    let exists = Departments.findOne({ "name": department, createdBy: currentuser}, { fields: {"name": 1}});
    return exists ? false : true;
});

Template.addDepartment.onRendered(function(){
    $('#add-department').validate({
          rules: {
            depName: {
              required: true,
              minlength: 3,
              depUnique: true
            }
          },
          messages: {
             depName: {
               required: "Need a department title here.",
               depUnique: "This department already exists",
               minlength: "Must be at least {0} characters long."
             }
          }
    });
});
