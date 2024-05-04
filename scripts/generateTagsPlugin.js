// hexo.extend.filter.register('before_post_render', function(data){
//     const content = data.content;
//     const lines = content.split('\n');
    
//     if (lines.length >= 3) {
//         const tags = (lines[2].match(/#(\w+)/g) || []).map(tag => tag.slice(1));
//         data.tags = tags;
//     }

//     return data;
// });


// hexo.extend.filter.register('before_post_render', function(data){
//     const content = data.content;
//     const lines = content.split('\n');
    
//     if (lines.length >= 3) {
//         const tags = (lines[2].match(/#(\w+)/g) || []).map(tag => tag.slice(1));
//         data.tags = tags;

//         // Add original content to new Front-matter
//         const newFrontMatter = `---\n${lines[2]}\n${data.content}\n---\n`;
//         data.content = newFrontMatter;
//     }

//     return data;
// });


// hexo.extend.filter.register('before_post_render', function(data){
//     const content = data.content;
//     const lines = content.split('\n');
    
//     if (lines.length >= 3) {
//         const tagsLine = lines[2];
//         const tags = tagsLine.match(/#(\w+)/g);
        
//         if (tags) {
//             data.tags = tags.map(tag => tag.substring(1));
//         }
//     }

//     return data;
// });