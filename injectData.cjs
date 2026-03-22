const fs = require('fs');
const path = './src/app/data/projects.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('    amenities: [');
const endIdx = content.indexOf('  },\n  {\n    id: \'Revelstoke\'');

if (startIdx === -1 || endIdx === -1) {
    console.log("Could not find start/end bounds for Clover's data");
    process.exit(1);
}

const cloverContent = content.substring(startIdx, endIdx);

const projectsToUpdate = [
    'Clover',
    'Revelstoke',
    'Capella',
    'WestHaven',
    'AftertheApplause',
    'Serpent&Silk',
    'TheEyrieHotel'
];

content = content.replace(
    /amenities: \[\s*\{\s*title: 'Collins Creek Fitness Studio'[\s\S]*?\}\s*\]/,
    cloverContent.trim()
);

for (const proj of projectsToUpdate) {
    const regex = new RegExp(`(id:\\s*'${proj.replace('&', '\\\\&')}'[\\s\\S]*?link:\\s*'/work/${proj.replace('&', '\\\\&')}',?\\s*)(\\},?)`);
    content = content.replace(regex, `$1  ${cloverContent.trim()}\n$2`);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Success');
