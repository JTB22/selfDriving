class Tree {
    constructor(center, size) {
        this.center = center;
        this.size = size; // base
        
    }
    draw(ctx) {
        this.center.draw(ctx, {size: this.size, color: "green"});
    }
}