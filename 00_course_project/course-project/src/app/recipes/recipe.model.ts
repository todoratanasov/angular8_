//модела просто трябва да си е клас, с който да си създадем обект, който експортвайки го си го импортваме където ще се ползва
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
