class Image {
  get name() {
    return 'images';
  }
  get deps() {
    return [];
  }
  get fn() {
    return () => {
      let task = gulp.src(config.source.img + '/**/*');

      if (config.cache) {
        return task.pipe(gulp.dest(config.cacheDir + '/' + config.paths.target.img));
      } else {
        return task.pipe(gulp.dest(config.target.img));
      }
    };
  }
}

export default Image;
