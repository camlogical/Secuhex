module.exports = {
  packagerConfig: {
    icon:'./img/icon'
  },
  makers: [
    {
      name: '@electron-forge/maker-zip'
    },
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: 'Secuhex',
        setupExe:'SHSetup.exe',
        setupIcon:'./img/icon.ico'
      }
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
          options: {
              maintainer: 'Secuhex',
              homepage: 'https://github.com/camlogical/Secuhex',
              icon:'./img/icon.png',
              name:'secuhex',
              productName:'Secuhex'
            }
      }
    },
    {
      name:'@electron-forge/maker-rpm',
      config: {
          options: {
              maintainer: 'Secuhex',
              homepage: 'https://github.com/camlogical/Secuhex',
              icon:'./img/icon.png',
              productName:'Secuhex'
            }
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './img/icon.png',
        name: 'Secuhex'
      }
    }
  ],
  publishers: [
      {
          name: '@electron-forge/publisher-github',
          config: {
              prerelease: true,
              repository: {
                  owner:'Secuhex',
                  name:'Secuhex'
              }
          }
      }
  ]
}
