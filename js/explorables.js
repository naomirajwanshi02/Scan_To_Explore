// The one place that lists the things you can explore. Each one is its OWN project/repo and its
// own GitHub Pages site: edit and push it there and this hub opens the new version straight away
// (the hub only redirects to it, it holds no copy of the pagoda, shrine, ramen or sushi).
//
// `index` is the position of the picture inside targets.mind (tools/make-target.html builds
// it in this order). To add one: add it here AND rebuild targets.mind.
//
// `demo: true` opens the project with its own card scan skipped, because the picture
// has already been recognised here. Turn it off for a project that has no such option.

const BASE = 'https://naomirajwanshi02.github.io/';

export const EXPLORABLES = [
  { index: 0, id: 'pagoda', name: 'Pagoda', line: 'Take it apart', demo: true,
    url: BASE + 'Pagoda/', picture: BASE + 'Pagoda/target.png' },
  { index: 1, id: 'shrine', name: 'Shrine', line: 'Turn and tap every part', demo: true,
    url: BASE + 'Shinto_Shrine/', picture: BASE + 'Shinto_Shrine/target.png' },
  { index: 2, id: 'ramen', name: 'Ramen', line: 'See it exploded', demo: false,
    url: BASE + 'Ramen_Anatomy/', picture: BASE + 'Ramen_Anatomy/target.png' },
  { index: 3, id: 'sushi', name: 'Sushi', line: 'Look inside', demo: true,
    url: BASE + 'sushi-ar-explore/', picture: BASE + 'sushi-ar-explore/sushi_main.jpeg' },
];

export const openUrl = (e) => e.url + (e.demo ? '?demo=1&from=hub' : '?from=hub');
