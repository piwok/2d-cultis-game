import {State,Pool, FlyingRight, FlyingLeft, projectile_states} from './States.js'
import {detectCollision} from '../utils.js'

export default class Projectile {
    constructor (game_width, game_height) {
        this.game = {width: game_width, height: game_height}
        this.states = [new Pool(this), new FlyingRight(this), new FlyingLeft(this)]
        this.current_state = this.states[1]
        this.position = {x: 0, y: this.game.height/2}
        this.freeze = true
        this.current_frame = 0
        this.max_frames = 6
        this.weight = 0
        this.speed = {x: 0, y: 0}
        this.collision_blocks = []
        this.fps = 30
        this.delta_timer = 0
        this.frame_interval = 1000/this.fps
    }

    addBlock(new_block) {
        this.collision_blocks.push(new_block)}

    draw (context_2D, delta_time) {
        if (!this.freeze) {
        context_2D.fillStyle = 'yellow'
        context_2D.fillRect(this.position.x, this.position.y, this.current_state.hitbox.width, this.current_state.hitbox.height)}
    }

    update (new_input) {
        this.current_state.handleInput(new_input)
        //horizontal movement
        this.position.x += this.speed.x
        this.detectHorizontalCollisions()
        //vertical movement
        this.speed.y += this.weight
        this.position.y += this.speed.y
        this.detectVerticalCollisions()
        
        }
    
    detectHorizontalCollisions () {
        this.collision_blocks.forEach((block) => {
            if (detectCollision(this, block)) {
                if (this.position.x + this.speed.x <= block.position.x + block.size.width && this.position.x + this.speed.x + this.current_state.hitbox.width > block.position.x && this.speed.x < 0) {
                    
                    this.setState(projectile_states.Pool)
                    this.current_state.enterState()
                }
                else if (this.position.x + this.speed.x +this.current_state.hitbox.width >= block.position.x && this.position.x + this.speed.x < block.position.x + block.size.width && this.speed.x > 0) {
                
                    this.setState(projectile_states.Pool)
                    this.current_state.enterState()
                }
            }
        })
    }

    detectVerticalCollisions () {
        let ground_collision = false
        this.collision_blocks.forEach((block) => {
            if (detectCollision(this, block)) {
                if (this.speed.y > 0 && this.position.y + this.speed.y + this.current_state.hitbox.height >= block.position.y && this.position.y + this.speed.y < block.position.y + block.size.height) {
                    this.speed.y = 0
                    this.position.y = block.position.y - this.current_state.hitbox.height - 0.01
                    this.is_on_ground = true
                    ground_collision = true
                }
                else if (this.speed.y < 0 && this.position.y + this.speed.y <= block.position.y + block.size.height && this.position.y + this.speed.y + this.current_state.hitbox.height > block.position.y) {
                    
                    this.speed.y = 0
                    this.position.y = block.position.y + block.size.height + 0.01
                    
                }
            }
        })
        if (ground_collision === false) {this.is_on_ground = false}
    }
        

    






    setState (new_state) {
        
        this.current_state = this.states[new_state]
        
    }
}