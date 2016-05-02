var Promise = require('bluebird'),
  parent;

module.exports = function(generator) {
  parent = generator;
  
  generator.promptAsync = promptAsync;
  generator.remoteAsync = remoteAsync;
}

/**
 * Asynchronous prompt function that returns a Promise
 * 
 * @param prompts
 * @returns {Promise}
 */
function promptAsync(prompts) {
  return new Promise(function(resolve, reject) {
    parent.prompt.call(parent, prompts, function(answers) {
      resolve(answers)
    });
  });
}

/**
 * Asynchronous remote function that returns a Promise
 * 
 * @returns {Promise}
 */
function remoteAsync() {
  var generator = this.generator;
  
  var username;
  var repo;
  var branch;
  var refresh;
  var url;

  // With URL and refresh
  if (arguments.length <= 2) {
    url = arguments[0];
    refresh = arguments[1];
  } else {
    username = arguments[0];
    repo = arguments[1];
    branch = arguments[2];
    refresh = arguments[3];
    url = 'https://github.com/' + [username, repo, 'archive', branch].join('/') + '.tar.gz';
  }
  
  return new Promise(function(resolve, reject) {
    parent.remote.call(parent, url, function(err, remote) {
      if (err) {
        reject(err);
      }
      else {
        resolve(remote);
      }
    }, refresh);
  });
}
