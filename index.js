var path = require('path'),
    fs = require('fs'),
    yaml = require('yamlparser'),
    refImpl = require('uap-ref-impl')(readYAML('node_modules/uap-core/regexes.yaml'));

function readYAML(fileName) {
    var file = path.join(__dirname, fileName);
    var data = fs.readFileSync(file, 'utf8');
    return yaml.eval(data);
}

module.exports = refImpl;
