class polygon{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        polygon = Bodies.circle(50, 200, 20);
        World.add(world, polygon);
         
        slingShot = new Slingshot(this.polygon, {x:100, y:200});
        
        imageMode(CENTER);
        image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
    }
}