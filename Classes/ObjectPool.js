import Projectile from './Projectile.js'

export class ObjectPool {
    constructor(num_projectiles) {
        this.pool = []
        this.num_projectiles = num_projectiles
    }

    addProjectiles () {
        for (i = 0; i < this-this.num_projectiles; i++) {
            this.pool.push(new Projectile)}}
    
    fetchProjectile () {
        for(i = 0; i < this.num_projectiles; i++) {
            if (this.pool[i].in_game === false) {
                this.pool[i].in_game = true
                return this.pool[i]}}}
    
    getProjectile (projectile) {
        projectile.position = {x: 0, y: 0}
        projectile.speed = {x: 0, y:0}
        projectile.in_game = false
    }
}