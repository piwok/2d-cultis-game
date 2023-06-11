import {State, IdleRight, IdleLeft, RunRight, RunLeft, states} from './States.js'

export default class Player {
    constructor (game_width, game_height) {
        this.game_width = game_width
        this.game_height = game_height
        this.states = [new IdleRight(this), new IdleLeft(this), new RunRight(this), new RunLeft(this)]
        this.current_state = this.states[0]
        this.crop_frame_width = 128
        this.crop_frame_height = 128
        this.x = this.game_width/2 - this.crop_frame_width/2
        this.y = this.game_height/2 - this.crop_frame_height/2
        this.current_frame = 0
    }

    draw (context_2D) {
        context_2D.drawImage(this.current_state.image, this.crop_frame_width*this.current_frame, 0, this.crop_frame_width, this.crop_frame_height, this.x, this.y, this.crop_frame_width, this.crop_frame_height)

    }

    update (input) {
        this.current_state.handleInput(input)
    }

    setState (new_state) {
        console.log(this.states[new_state])
        this.current_state = this.states[new_state]
        
    }
}
