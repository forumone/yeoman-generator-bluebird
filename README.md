# yeoman-generator-bluebird
Decorates functionality from yeoman-generator with Bluebird Promises.

## Functions provided
- `promptAsync(questions)`
- `remoteAsync(url, refresh)`
- `remoteAsync(username, repo, branch, refresh)`

## Usage
```javascript
var ygp = require('yeoman-generator-bluebird');

module.exports = generators.Base.extend({
  initializing : {
    async : function() {
      ygp(this);
    }
  }
});
```
