hexo.extend.filter.register('after_post_render', function(data) {
  if (!data.tags || data.tags.length === 0) {
    // 如果文章没有tags，则添加默认的tags
    data.tags = ['默认标签']; // 修改这里以设置你想要的默认tags
  }
  return data;
});