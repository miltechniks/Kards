const crypto = require('crypto');

// Workaround für Node 17+ und OpenSSL 3:
// Ersetzt den von Webpack geforderten (aber fehlenden) 'md4'-Algorithmus durch 'sha256'
const fallbackCreateHash = crypto.createHash;
crypto.createHash = algorithm => fallbackCreateHash(algorithm === 'md4' ? 'sha256' : algorithm);

module.exports = {
    pluginOptions: {
      electronBuilder: {
        preload: 'src/preload.js',
        builderOptions: { 
          "productName": "Kards",
          "appId": "solutions.alteka.kards",
          "artifactName": "${productName}-${version}-${os}-${arch}.${ext}",
          "mac": {
            "icon": "public/icon.png",
            "target": "pkg"
          },
          "win": {
            "icon": "public/icon.png"
          },
          "nsis": {
            "oneClick": false,
            "createDesktopShortcut": false,
            "menuCategory": true
          }
        }
      }
    },
    transpileDependencies: [
      'element-plus'
    ]
  }
