const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: 'Youre project name',
          default: this.appname
        }

      ]
    )
    .then(answers => {
      this.answers = answers
    })
  }


  writing() {
    // 把每一个文件都通过慢板转换到目标路径
    const templates = [
      '.vscode/settings.json',
      'public/index.html',
      'public/favicon.ico',
      'src/api/advert.js',
      'src/api/index.js',
      'src/api/user.js',
      'src/assets/css/normalize.css',
      'src/assets/img/lazyload_img_16x9.jpg',
      'src/assets/logo.png',
      'src/components/AliPlayer/index.vue',
      'src/components/Common/imgText.vue',
      'src/components/Common/Loading.vue',
      'src/components/SvgIcon/index.vue',
      'src/components/HelloWorld.vue',
      'src/directives/index.js',
      'src/directives/onepx.js',
      'src/filters/index.js',
      'src/icons/svgo.yml',
      'src/icons/svg/back.svg',
      'src/directives/index.js',
      'src/directives/onepx.js',
      'src/filters/index.js',
      'src/router/index.js',
      'src/store/index.js',
      'src/store/getters.js',
      'src/store/modules/page.js',
      'src/styles/_mixins.scss',
      'src/styles/_variable.scss',
      'src/styles/common.scss',
      'src/utils/appEvent.js',
      'src/utils/index.js',
      'src/utils/JsBridge.js',
      'src/utils/request.js',
      'src/utils/vue-loading.js',
      'src/views/Advert/index.vue',
      'src/views/404.vue',
      'src/views/About.vue',
      'src/views/Home.vue',
      'src/App.vue',
      'src/main.js',
      '.browserslistrc',
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.env.stage',
      '.env.uat',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.prettierrc.js',
      'babel.config.js',
      'jsconfig.json',
      'package.json',
      'postcss.config.js',
      'README.md',
      'vue.config.js',
      'yarn.lock',
    ]
    
    templates.forEach(item => {
      // item => 每个文件路径
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })

  }
}