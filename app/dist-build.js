const gulp = require('gulp');
const njkRender = require('gulp-nunjucks-render');
const Filehound = require('filehound');
const config = require('../config/config');
const fs = require('fs-extra');
const prepend = require('prepend');

// remove public
function deletePublic() {
  fs.remove(config.paths.public_dir)
    .then(() => {
      console.log('deleted public success!');
      createPublic();
    })
    .catch(err => {
      console.error(err)
    })
}

// create public
function createPublic() {
  fs.ensureDir(config.paths.public_dir)
    .then(() => {
      console.log('dir create success!')
      //createStatic();
      CSSTimeStamp();
    })
    .catch(err => {
      console.error(err)
    })
}

// add design system timestamp to site.css
function CSSTimeStamp() {
  var version = config.njk.templateVars.version;
  var published = config.njk.templateVars.publishdate;
  var CSScomment = "/*  " + version + " Last Built: " + published + "  */";
  
  prepend(config.paths.assets_dir + "/css/site.css", CSScomment , function (error) {
    if (error) {
      console.error(error.message);
    }
    createStatic();
  });
}

// copy over static files
function createStatic() {
  fs.copy(config.paths.assets_dir, config.paths.public_dir + "/" + config.paths.public_assets_dir)
    .then(() => {
      renderToPublic();
    })
    .catch(err => {
      console.error(err)
    })
}


// build directories and compile Nunjuck templates.
function renderToPublic() {
  var dist_directories;
  Filehound.create()
    .path(config.paths.views_dir)
    .directory()
    .find()
    .then((subdirectories) => {
      dist_directories = subdirectories;
      dist_directories.push(config.paths.public_dir);
      let arrayLength = dist_directories.length;

      for (var i = 0; i < arrayLength; i++) {
        var shortDir = dist_directories[i].split('pages/')[1];
        if (shortDir !== undefined) {
          var srcdirectory = dist_directories[i] + '/*.@(html|njk)';
          var destdirectory = config.paths.public_dir + '/' + shortDir;
        } else {
          var srcdirectory = config.paths.views_dir + '/*.@(html|njk)';
          var destdirectory = config.paths.public_dir;
        }

        gulp.src(srcdirectory)
          .pipe(
            njkRender({
              path: ['pages', 'templates'],
              data: config.njk.templateVars,
            })
          )
          .pipe(gulp.dest(destdirectory));
      }
    });





}



module.exports = {
  // init
  build: function () {
    deletePublic();
  }

}