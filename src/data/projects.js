import Project from '@/models/project';
import Category from '@/models/category';

const coding_projects = [
    new Project('music-journal-app', '/assets/music-journal-app.png', 
                'Music Journal App',
                Category.CODING,
                Date.UTC(2024, 5),
                false,
                'An app where you can journal about your favourite songs'),
];
const modelling_projects = [
    new Project('home-office-3d-design', '/assets/home-office-3d-design.jpg', 
                'Home Office & Lounge',
                Category.MODELLING,
                Date.UTC(2024, 12),
                false,
                '3D design of my home office & lounge that I would like to renovate'),
];
const music_projects = [
    new Project('overdrive-song', '/assets/overdrive-song.png',
                'Overdrive - Post Malone',
                Category.MUSIC,
                Date.UTC(2024, 7), 
                true,
                'My recreation of this song in FL Studio'
    ),
    new Project('te-lo-mereces-song', '/assets/te-lo-mereces-song.png', 
                'Te Lo Mereces - Juanlu Montoya',
                Category.MUSIC,
                Date.UTC(2024, 10),
                false,
                'My recreation of this song in FL Studio'),
];

const featured = [
    coding_projects.find(project => project.id === 'music-journal-app'),
    modelling_projects.find(project => project.id === 'home-office-3d-design'),
    music_projects.find(project => project.id === 'overdrive-song')
];

const projects = {
    coding_projects: coding_projects.sort((a, b) => b.date - a.date),
    modelling_projects: modelling_projects.sort((a, b) => b.date - a.date),
    music_projects: music_projects.sort((a, b) => b.date - a.date),
    featured
};

export default projects;