Router.configure({
  loadingTemplate: 'loading',
  layoutTemplate: 'mainLayout'
});

Router.route('/', function () {
  this.render('findit');
});

Router.route('/faq', function () {
  this.render('faq');
});
