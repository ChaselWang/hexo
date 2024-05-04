
const fs = require('fs');
const path = require('path');

const postsDir = 'source/_posts';

function extractTags(content) {
    const lines = content.split('\n');
    if (lines.length >= 3) {
        const tagsLine = lines[2];
        const tags = tagsLine.match(/#(\w+)/g);
        if (tags) {
            return tags.map(tag => tag.substring(1));
        }
    }
    return [];
}

function updateFrontMatter(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const tags = extractTags(content);

    let newContent = content;
    if (!content.startsWith('---')) {
        newContent = `---\n${newContent}`;
    }

    newContent = newContent.replace(/tags:[\s\S]*?\n/, `tags:\n${tags.map(tag => `  - ${tag}`).join('\n')}\n`);

    fs.writeFileSync(filePath, newContent, 'utf8');
}

fs.readdir(postsDir, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(postsDir, file);
        updateFrontMatter(filePath);
    });
});