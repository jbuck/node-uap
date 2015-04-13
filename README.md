This is a wrap-up of https://github.com/ua-parser/uap-core and https://github.com/ua-parser/uap-ref-impl

#### Why?
At the moment `uap-ref-impl` repository contains only reference implementation without data required to use the parser and the `uap-core` repository isn't published to npm registry.

#### Usage:

    var uap = require('node-uap');
    var userAgentString = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36";

    // Parse everything
    console.log(uap.parse(userAgentString));

    // Parse specific info
    console.log(uap.parseUA(userAgentString));
    console.log(uap.parseOS(userAgentString));
    console.log(uap.parseDevice(userAgentString));
