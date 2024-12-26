import Project from '@/models/Project';
import Category from '@/models/Category';

const coding_projects = [
    new Project(1, '/assets/project1.png', 
                   'Project 1',
                   Category.CODING,
                   '2021', 
                   'This is a description of project 1'),
];
const modelling_projects = [
    new Project(1, '/assets/project1.png', 
                   'Project 1',
                   Category.MODELLING,
                   '2021', 
                   'This is a description of project 1'),
];
const music_projects = [
    new Project(1, '/assets/project1.png', 
                   'Project 1',
                   Category.MUSIC,
                   '2021', 
                   'This is a description of project 1'),
];

const projects = [
    coding_projects,
    modelling_projects,
    music_projects
];

export default projects;