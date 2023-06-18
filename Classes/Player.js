import {State, IdleRight, IdleLeft, RunRight, RunLeft, JumpRight, JumpLeft, FallRight, FallLeft, states} from './States.js'

export default class Player {
    constructor (game_width, game_height) {
        this.game_width = game_width
        this.game_height = game_height
        this.states = [new IdleRight(this), new IdleLeft(this), new RunRight(this), new RunLeft(this),
            new JumpRight(this), new JumpLeft(this), new FallRight(this), new FallLeft(this)]
        this.current_state = this.states[0]
        this.crop_frame_width = 128
        this.crop_frame_height = 128
        this.pos_x = this.game_width/2 - this.crop_frame_width/2
        this.pos_y = this.crop_frame_height
        this.hitbox_width = 30
        this.hitbox_height = 70
        this.current_frame = 0
        this.max_frames = 6
        this.weight = 1
        this.speed_x = 0
        this.speed_y = 0
        this.fps = 30
        this.delta_timer = 0
        this.frame_interval = 1000/this.fps
    }

    isOnGround() {
        if (this.speed_y === 0) {return true}
    }

    draw (context_2D, delta_time) {

        if (this.delta_timer > this.frame_interval) {
            if (this.current_frame < this.max_frames - 1) {this.current_frame += 1}
            else {this.current_frame = 0}
            this.delta_timer = 0}
        else {this.delta_timer += delta_time}
        context_2D.fillStyle = 'red'
        context_2D.fillRect(this.pos_x + 47, this.pos_y + 57, this.hitbox_width, this.hitbox_height)
        context_2D.drawImage(this.current_state.image, this.crop_frame_width*this.current_frame, 0,
        this.crop_frame_width, this.crop_frame_height, this.pos_x, this.pos_y, this.crop_frame_width, this.crop_frame_height)
        
        
    }

    update (new_input) {
        this.current_state.handleInput(new_input)
        //horizontal movement
        this.pos_x += this.speed_x
        //vertical movement
        this.speed_y += this.weight
        this.pos_y += this.speed_y
        if (this.pos_y > this.game_height - this.crop_frame_height) {
            this.speed_y = 0
            this.pos_y = this.game_height - this.crop_frame_height}
    }

    setState (new_state) {
        
        this.current_state = this.states[new_state]
        
    }
}