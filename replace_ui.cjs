const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Sub-banner Line Height
content = content.replace(
  '<h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">',
  '<h2 className="font-display font-bold text-3xl md:text-5xl leading-none">'
);

// 2. Experience Image Aspect Ratio
content = content.replace(
  'className="relative aspect-square w-full max-w-[800px] mx-auto self-center overflow-hidden z-10 lg:diagonal-overlay-left"',
  'className="relative aspect-[4/3] w-full max-w-[800px] mx-auto self-center overflow-hidden z-10 lg:diagonal-overlay-left"'
);

// 3. Service Cards Hover Effect
content = content.replace(
  /className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden"/g,
  'className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-xl group relative overflow-hidden"'
);

content = content.replace(
  /<div className="absolute right-0 bottom-0 w-24 h-24 bg-gray-50 rounded-tl-full -z-0"><\/div>/g,
  '<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gray-50 rounded-full z-0 group-hover:scale-[25] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>'
);

content = content.replace(
  /className="w-20 h-20 mb-3 object-contain drop-shadow-sm"/g,
  'className="w-20 h-20 mb-3 object-contain drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-500 relative z-10"'
);

content = content.replace(
  /<h4 className="font-subdisplay font-bold text-xl uppercase mb-3">/g,
  '<h4 className="font-subdisplay font-bold text-xl uppercase mb-3 group-hover:text-white transition-colors duration-500 relative z-10">'
);

content = content.replace(
  /<p className="text-gray-600 text-sm mb-6 leading-relaxed">/g,
  '<p className="text-gray-600 group-hover:text-gray-300 text-sm mb-6 leading-relaxed transition-colors duration-500 relative z-10">'
);

content = content.replace(
  /className="font-bold text-sm tracking-wide flex items-center gap-2 group-hover:text-jac-green transition-colors"/g,
  'className="font-bold text-sm tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 relative z-10"'
);

fs.writeFileSync('src/App.tsx', content);
