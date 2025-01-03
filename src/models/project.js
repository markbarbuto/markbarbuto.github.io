export default class Project {
    constructor(id, image, title, category, createdDate, completedDate, description) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.category = category;
        this.createdDate = createdDate;
        this.completedDate = completedDate;
        this.description = description;
    }
}