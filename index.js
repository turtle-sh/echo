define({

  name: "echo",
  
  "fn": function(text) {
    this.stdout.write(text);
    this.exit();
  },

  parse: function(argv) {
    return argv.replace(/^echo /, '');
  }

});
