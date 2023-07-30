import {State, IdleRight, IdleLeft, RunRight, RunLeft, JumpRight, JumpLeft, FallRight, FallLeft, DoubleJumpRight, DoubleJumpLeft, DashRight, DashLeft,
    AttackRight1, AttackLeft1, AttackRight2, AttackLeft2, states} from './States.js'
import {detectCollision} from '../utils.js'

export default class Player {
    constructor (game_width, game_height) {
        this.game = {width: game_width, height: game_height}
        this.states = [new IdleRight(this), new IdleLeft(this),
            new RunRight(this), new RunLeft(this),
            new JumpRight(this), new JumpLeft(this),
            new FallRight(this), new FallLeft(this),
            new DoubleJumpRight(this), new DoubleJumpLeft(this),
            new DashRight(this), new DashLeft(this),
            new AttackRight1(this), new AttackLeft1(this),
            new AttackRight2(this), new AttackLeft2(this)]
        this.current_state = this.states[0]
        this.crop_frame = {width: 128, height: 128}
        this.position = {x:this.game.width/2 - this.crop_frame.width/2, y: this.crop_frame.height}
        this.is_on_ground = false
        this.current_frame = 0
        this.max_frames = 6
        this.weight = 0.999
        this.speed = {x: 0, y: 0}
        this.attack = false    
        this.double_jump_lock = false
        this.double_jump_done = false
        this.dash_done = false
        this.dash_timer = false
        this.collision_blocks = []
        this.fps = 30
        this.delta_timer = 0
        this.frame_interval = 1000/this.fps
    }

    isOnGround() {
        if (this.speed.y === 0.000 && !(this.current_state.state === 'DashRight') && !(this.current_state.state === 'DashLeft')) {return true}
        else {return false}
    }

    dashCooldown() {
        if (this.dash_timer === false) {
        this.dash_timer = setTimeout(() => {
            this.dash_done = false
            this.dash_timer = false},1000)}
    }

    addBlock(new_block) {
        this.collision_blocks.push(new_block)}

    draw (context_2D, delta_time) {

        if (this.delta_timer > this.frame_interval) {
            if (this.current_frame < this.max_frames - 1) {this.current_frame += 1}
            else {this.current_frame = 0}
            this.delta_timer = 0}
        else {this.delta_timer += delta_time}
        context_2D.fillStyle = 'red'
        context_2D.fillRect(this.position.x, this.position.y, this.current_state.hitbox.width, this.current_state.hitbox.height)
        if (this.attack === true) {
            context_2D.fillStyle = 'yellow'
            context_2D.fillRect(this.position.x + this.current_state.hitbox.width, this.position.y + 25, this.current_state.attackbox.width, this.current_state.attackbox.height)
        }
        context_2D.drawImage(this.current_state.image, this.crop_frame.width*this.current_frame + this.current_state.image_offset.x, this.current_state.image_offset.y,
        this.current_state.hitbox.width, this.current_state.hitbox.height, this.position.x, this.position.y, this.current_state.hitbox.width, this.current_state.hitbox.height)
        
        
    }

    update (new_input) {
        this.current_state.handleInput(new_input)
        //horizontal movement
        this.position.x += this.speed.x
        this.detectHorizontalCollisions()
        //vertical movement
        if (!(this.current_state.state === 'DashRight' || this.current_state.state === 'DashLeft')) {
            this.speed.y += this.weight}
        this.position.y += this.speed.y
        this.detectVerticalCollisions()}
    
    detectHorizontalCollisions () {
        this.collision_blocks.forEach((block) => {
            if (detectCollision(this, block)) {
                if (this.position.x + this.speed.x <= block.position.x + block.size.width && this.position.x + this.speed.x + this.current_state.hitbox.width > block.position.x && this.speed.x < 0) {
                    this.position.x = block.position.x + block.size.width + 0.01
                }
                else if (this.position.x + this.speed.x +this.current_state.hitbox.width >= block.position.x && this.position.x + this.speed.x < block.position.x + block.size.width && this.speed.x > 0) {
                    this.position.x = block.position.x - this.current_state.hitbox.width - 0.01
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