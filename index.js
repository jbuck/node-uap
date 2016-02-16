var path = require('path'),
    fs = require('fs'),
    yaml = require('yamlparser'),
    regexes_base_path = 'node_modules/uap-core/regexes.yaml',
    uap_regexes_path = [
        path.join(__dirname, regexes_base_path),
        path.join(__dirname, '../..', regexes_base_path)
    ].find(fs.existsSync),
    refImpl = require('uap-ref-impl')(readYAML(uap_regexes_path));

function readYAML(file) {
    var data = fs.readFileSync(file, 'utf8');
    return yaml.eval(data);
}

module.exports = refImpl;
