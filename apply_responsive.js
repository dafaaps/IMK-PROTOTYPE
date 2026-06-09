const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const screens = ['home', 'map', 'report', 'rights', 'profile', 'notifications', 'privacy', 'help', 'about'];
screens.forEach(id => {
  html = html.replace(new RegExp(`id="${id}" class="screen( active)?"`), `id="${id}" class="screen$1 md:ml-64"`);
  
  html = html.replace(new RegExp(`<div id="${id}" class="screen( active)? md:ml-64">\\s*<div class="px-5 pt-12 pb-6( fade-in)?( text-center)?"`), `<div id="${id}" class="screen$1 md:ml-64">\n<div class="px-5 pt-12 pb-6$2$3 md:px-10 md:pt-16 md:max-w-4xl mx-auto"`);
});

// Home screen recent reports
html = html.replace(/<div class="space-y-4">\s*(<!-- Report Card 1 -->)/, '<div class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">\n$1');

// Rights screen cards
html = html.replace(/<div class="space-y-4">\s*(<div class="bg-card rounded-xl p-4)/, '<div class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">\n$1');

// Profile sub menus
html = html.replace(/<h3 class="font-semibold mb-3">Pengaturan<\/h3>\s*<div class="space-y-2">/, '<h3 class="font-semibold mb-3">Pengaturan</h3>\n<div class="space-y-2 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">');

fs.writeFileSync('index.html', html);
