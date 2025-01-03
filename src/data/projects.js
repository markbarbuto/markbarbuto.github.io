import Project from '@/models/project';
import Category from '@/models/category';

function getDate(year, month, day) { return new Date().setFullYear(year, month-1, day); }

const coding_projects = [
    new Project('music-journal-app', '/assets/music-journal-app.png', 
                'Music Journal App',
                Category.CODING,
                getDate(2024, 5, 1),
                null,
                'An app where you can journal about your favourite songs'),
];
const modelling_projects = [
    new Project('home-office-3d-design', '/assets/home-office-3d-design.jpg', 
                'Home Office & Lounge',
                Category.MODELLING,
                getDate(2024, 12, 1),
                null,
                '3D design of my home office & lounge that I would like to renovate'),
];
const music_projects = [
    new Project('overdrive-postmalone-song', '/assets/overdrive-postmalone-song.png',
                'Overdrive - Post Malone',
                Category.MUSIC,
                getDate(2024, 6, 12), 
                getDate(2024, 7, 7),
                'My recreation of this song in FL Studio'
    ),
    new Project('te-lo-mereces-juanlumontoya-song', '/assets/te-lo-mereces-juanlumontoya-song.png', 
                'Te Lo Mereces - Juanlu Montoya',
                Category.MUSIC,
                getDate(2024, 10, 18),
                null,
                'My recreation of this song in FL Studio'),
    new Project('somestevelacy-song', '/assets/some-song.png', 
                'Some - Steve Lacy',
                Category.MUSIC,
                getDate(2024, 4, 4),
                getDate(2024, 5, 21),
                'My recreation of this song in FL Studio'),
];

const featured = [
    coding_projects.find(project => project.id === 'music-journal-app'),
    modelling_projects.find(project => project.id === 'home-office-3d-design'),
    music_projects.find(project => project.id === 'overdrive-postmalone-song')
];

function getCompletedDate(project) { return project.completedDate ?? project.createdDate; }
const projects = {
    coding_projects: coding_projects.sort((a, b) => getCompletedDate(b) - getCompletedDate(a)),
    modelling_projects: modelling_projects.sort((a, b) => getCompletedDate(b) - getCompletedDate(a)),
    music_projects: music_projects.sort((a, b) => getCompletedDate(b) - getCompletedDate(a)),
    featured
};

export default projects;