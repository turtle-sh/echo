define({

  name: "echo",
  
  "fn": function(text) {
    this.stdout.log(text);
    this.exit();
  },

  parse: function(argv) {
    return argv.replace(/^echo /, '');
  }

});
