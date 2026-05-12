const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Increase service card image size
content = content.replace(
  /w-20 h-20 mb-3/g,
  'w-32 h-32 mb-4'
);

fs.writeFileSync('src/App.tsx', content);
