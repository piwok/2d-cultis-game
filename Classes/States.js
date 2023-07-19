export const states = {
    IdleRight: 0,
    IdleLeft: 1,
    RunRight: 2,
    RunLeft: 3,
    JumpRight: 4,
    JumpLeft: 5,
    FallRight: 6,
    FallLeft: 7,
    DoubleJumpRight: 8,
    DoubleJumpLeft: 9,
    DashRight: 10,
    DashLeft: 11,
    AttackRight1: 12,
    AttackLeft1: 13
}

export class State {
    constructor(state_name) {
        this.state = state_name}
}

export class IdleRight extends (State) {
    constructor(vessel) {
        super('IdleRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/IdleRight.png'
        this.frames_number = 6
        this.image_offset = {x: 47, y: 59}
        this.hitbox = {width: 30, height: 70}}
    
    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 0
        this.vessel.double_jump_lock = false
        this.vessel.double_jump_done = false
        this.vessel.dash_done = false}

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.15 && this.vessel.isOnGround()) {
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.15 && this.vessel.isOnGround()) {
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() === true && this.vessel.double_jump_lock === false) {
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}}
}

export class IdleLeft extends (State) {
    constructor(vessel) {
        super('IdleLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/IdleLeft.png'
        this.frames_number = 6
        this.image_offset = {x: 51, y: 59}
        this.hitbox = {width: 30, height: 70}}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 0
        this.vessel.double_jump_lock = false
        this.vessel.double_jump_done = false
        this.vessel.dash_done = false}

    handleInput (new_input) {
        if (new_input.leftRightLS >= 0.15 && this.vessel.isOnGround()) {
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS <= -0.15 && this.vessel.isOnGround()) {
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}}
}

export class RunRight extends (State) {
    constructor(vessel) {
        super('RunRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/RunRight.png'
        this.frames_number = 7
        this.image_offset = {x: 33, y: 59}
        this.hitbox = {width: 42, height: 70}}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 5
        this.vessel.double_jump_lock = false
        this.vessel.double_jump_done = false
        this.vessel.dash_done = false}

    handleInput (new_input) {
        if (new_input.leftRightLS >= -0.15 && new_input.leftRightLS <= 0.15) {
            this.vessel.setState(states.IdleRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS <= -0.15) {
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}
        else if (!this.vessel.isOnGround()) {
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}}
}

export class RunLeft extends (State) {
    constructor(vessel) {
        super('RunLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/RunLeft.png'
        this.frames_number = 7
        this.image_offset = {x: 52, y: 59}
        this.hitbox = {width: 42, height: 70}}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = -5
        this.vessel.double_jump_lock = false
        this.vessel.double_jump_done = false
        this.vessel.dash_done = false}

    handleInput (new_input) {
        if (new_input.leftRightLS >= -0.15 && new_input.leftRightLS <= 0.15) {
            this.vessel.setState(states.IdleLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.15) {
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}
        else if (!this.vessel.isOnGround()) {
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}}
}

export class JumpRight extends (State) {
    constructor(vessel) {
        super('JumpRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightRight.png'
        this.frames_number = 6
        this.image_offset = {x: 34, y: 59}
        this.hitbox = {width: 51, height: 70}}
        

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        if (this.vessel.isOnGround()) {
            this.vessel.speed.y = -25
        }
    }

    handleInput (new_input) {
        if (new_input.leftRightLS >= 0.15) {this.vessel.speed.x = 3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS <= -0.15) {
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.setState(states.DashRight)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === false && !this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.double_jump_lock = true}
        else if (new_input.A_button_pressed === true && this.vessel.double_jump_lock === true && !this.vessel.isOnGround()) {
            this.vessel.setState(states.DoubleJumpRight)
            this.vessel.current_state.enterState()}}
}

export class JumpLeft extends (State) {
    constructor(vessel) {
        super('JumpLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightLeft.png'
        this.frames_number = 6
        this.image_offset = {x: 46, y: 59}
        this.hitbox = {width: 51, height: 70}}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        if (this.vessel.isOnGround() === true) {
            this.vessel.speed.y = -25
        }
    }

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.15) {this.vessel.speed.x = -3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS >= 0.15) {
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.setState(states.DashLeft)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === false && !this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.double_jump_lock = true}
        else if (new_input.A_button_pressed === true && this.vessel.double_jump_lock === true && !this.vessel.isOnGround()) {
            this.vessel.setState(states.DoubleJumpLeft)
            this.vessel.current_state.enterState()}}
}

export class FallRight extends (State) {
    constructor(vessel) {
        super('FallRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightRight.png'
        this.frames_number = 6 
        this.image_offset = {x: 34, y: 59}
        this.hitbox = {width: 51, height: 70}}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0}

    handleInput (new_input) {
        if (new_input.leftRightLS >= 0.15) {this.vessel.speed.x = 3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS <= -0.15) {
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}
        else if (this.vessel.isOnGround()) {
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.setState(states.DashRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === false && !this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.double_jump_lock = true}
        else if (new_input.A_button_pressed === true && this.vessel.double_jump_lock === true && !this.vessel.isOnGround()) {
            this.vessel.setState(states.DoubleJumpRight)
            this.vessel.current_state.enterState()}}
}

export class FallLeft extends (State) {
    constructor(vessel) {
        super('FallLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightLeft.png'
        this.frames_number = 6
        this.image_offset = {x: 46, y: 59}
        this.hitbox = {width: 51, height: 70}}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0}

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.15) {this.vessel.speed.x = -3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS >= 0.15) {
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}
        else if (this.vessel.isOnGround()) {
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.setState(states.DashLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === false && !this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.double_jump_lock = true}
        else if (new_input.A_button_pressed === true && this.vessel.double_jump_lock === true && !this.vessel.isOnGround()) {
            this.vessel.setState(states.DoubleJumpLeft)
            this.vessel.current_state.enterState()}}
}

export class DoubleJumpRight extends (State) {
    constructor(vessel) {
        super('DoubleJumpRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightRight.png'
        this.frames_number = 6
        this.image_offset = {x: 34, y: 59}
        this.hitbox = {width: 51, height: 70}}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        if (this.vessel.double_jump_done === false) {
            this.vessel.speed.y = -25
            this.vessel.double_jump_done = true}}

    handleInput (new_input) {
        if (new_input.leftRightLS >= 0.15) {this.vessel.speed.x = 3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS <= -0.15) {
            this.vessel.setState(states.DoubleJumpLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.15 && this.vessel.isOnGround()) {
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.setState(states.DashRight)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}}
}

export class DoubleJumpLeft extends (State) {
    constructor(vessel) {
        super('DoubleJumpLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightLeft.png'
        this.frames_number = 6
        this.image_offset = {x: 46, y: 59}
        this.hitbox = {width: 51, height: 70}}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        if (this.vessel.double_jump_done === false) {
            this.vessel.speed.y = -25
            this.vessel.double_jump_done = true}}
            

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.15) {this.vessel.speed.x = -3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS >= 0.15) {
            this.vessel.setState(states.DoubleJumpRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS <= -0.15 && this.vessel.isOnGround()) {
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.setState(states.DashLeft)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}}
}

export class DashRight extends (State) {
    constructor(vessel) {
        super('DashRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightRight.png'
        this.frames_number = 6
        this.image_offset = {x: 26, y: 59}
        this.hitbox = {width: 70, height: 30}
        this.timer = false}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 7
        this.vessel.speed.y = 0
        if (this.vessel.dash_done === false) {
            this.timer = setTimeout(() => {this.vessel.setState(states.FallLeft)
                        this.vessel.current_state.enterState()}, 1000)
            this.vessel.dash_done = true}}

    handleInput (new_input) {
        if (new_input.Right_trigger === false) {
            clearTimeout(this.timer)
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}
        }

}
export class DashLeft extends (State) {
    constructor(vessel) {
        super('DashLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightLeft.png'
        this.frames_number = 6
        this.image_offset = {x: 26, y: 59}
        this.hitbox = {width: 70, height: 30}
        this.timer = false}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = -7
        this.vessel.speed.y = 0
        if (this.vessel.dash_done === false) {
            this.timer = setTimeout(() => {this.vessel.setState(states.FallRight)
                        this.vessel.current_state.enterState()}, 1000)
            this.vessel.dash_done = true}}

    handleInput (new_input) {
        if (new_input.Right_trigger === false) {
            clearTimeout(this.timer)
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}
        }

}
export class AttackRight1 extends (State) {
    constructor(vessel) {
        super('AttackRight1')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/AttackRight1.png'
        this.frames_number = 5
        this.image_offset = {x: 26, y: 59}
        this.hitbox = {width: 70, height: 30}
        this.timer = false}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = -7
        this.vessel.speed.y = 0
        if (this.vessel.dash_done === false) {
            this.timer = setTimeout(() => {this.vessel.setState(states.FallRight)
                        this.vessel.current_state.enterState()}, 1000)
            this.vessel.dash_done = true}}

}
export class AttackLeft1 extends (State) {

}