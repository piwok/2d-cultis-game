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
    AttackLeft1: 13}

export const projectile_states = {
    Pool: 0,
    Flying_right: 1,
    Flying_left: 2}

export class State {
    constructor(state_name) {
        this.state = state_name}}

/////////////////////////////////////////
/// ////////PLAYER STATES////////////////
/////////////////////////////////////////



export class IdleRight extends (State) {
    constructor(vessel) {
        super('IdleRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/IdleRight.png'
        this.frames_number = 6
        this.image_offset = {x: 47, y: 59}
        this.hitbox = {width: 30, height: 70}
        this.timer = false}
    
    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 0
        this.vessel.double_jump_lock = false
        this.vessel.double_jump_done = false
        }

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.15 && this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.15 && this.vessel.isOnGround()) {
            
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() === true && this.vessel.double_jump_lock === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}
        else if (new_input.X_button_pressed === true && this.vessel.isOnGround() === true) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.AttackRight1)
            this.vessel.current_state.enterState()}
        }
    exitState (new_input) {}
}

export class IdleLeft extends (State) {
    constructor(vessel) {
        super('IdleLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/IdleLeft.png'
        this.frames_number = 6
        this.image_offset = {x: 51, y: 59}
        this.hitbox = {width: 30, height: 70}
        this.timer = false}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 0
        this.vessel.double_jump_lock = false
        this.vessel.double_jump_done = false
        }

    handleInput (new_input) {
        if (new_input.leftRightLS >= 0.15 && this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS <= -0.15 && this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.X_button_pressed === true && this.vessel.isOnGround() === true) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.AttackLeft1)
            console.log(this.vessel.current_state)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
}

export class RunRight extends (State) {
    constructor(vessel) {
        super('RunRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/RunRight.png'
        this.frames_number = 7
        this.image_offset = {x: 33, y: 59}
        this.hitbox = {width: 42, height: 70}
        this.timer = false}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 5
        this.vessel.double_jump_lock = false
        this.vessel.double_jump_done = false
        }

    handleInput (new_input) {
        if (new_input.leftRightLS >= -0.15 && new_input.leftRightLS <= 0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.IdleRight)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DashRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS <= -0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}
        else if (!this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
}

export class RunLeft extends (State) {
    constructor(vessel) {
        super('RunLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/RunLeft.png'
        this.frames_number = 7
        this.image_offset = {x: 52, y: 59}
        this.hitbox = {width: 42, height: 70}
        this.timer = false}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = -5
        this.vessel.double_jump_lock = false
        this.vessel.double_jump_done = false
        }

    handleInput (new_input) {
        if (new_input.leftRightLS >= -0.15 && new_input.leftRightLS <= 0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.IdleLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DashLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}
        else if (!this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
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
            this.vessel.is_on_ground = false}}

    handleInput (new_input) {
        if (new_input.leftRightLS >= 0.15) {this.vessel.speed.x = 3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS <= -0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DashRight)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === false && !this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.double_jump_lock = true}
        else if (new_input.A_button_pressed === true && this.vessel.double_jump_lock === true && !this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DoubleJumpRight)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
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
            this.vessel.is_on_ground = false}}

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.15) {this.vessel.speed.x = -3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS >= 0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DashLeft)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === false && !this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.double_jump_lock = true}
        else if (new_input.A_button_pressed === true && this.vessel.double_jump_lock === true && !this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DoubleJumpLeft)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
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
        this.vessel.current_frame = 0
        this.vessel.is_on_ground = false}

    handleInput (new_input) {
        if (new_input.leftRightLS >= 0.15) {this.vessel.speed.x = 3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS <= -0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}
        else if (this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DashRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === false && !this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.double_jump_lock = true}
        else if (new_input.A_button_pressed === true && this.vessel.double_jump_lock === true && !this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DoubleJumpRight)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
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
        this.vessel.current_frame = 0
        this.vessel.is_on_ground = false}

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.15) {this.vessel.speed.x = -3.5}
        else {this.vessel.speed.x = 0}
        if (new_input.leftRightLS >= 0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}
        else if (this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DashLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === false && !this.vessel.isOnGround() && this.vessel.double_jump_lock === false) {
            this.vessel.double_jump_lock = true}
        else if (new_input.A_button_pressed === true && this.vessel.double_jump_lock === true && !this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DoubleJumpLeft)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
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
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DoubleJumpLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.15 && this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DashRight)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
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
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DoubleJumpRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS <= -0.15 && this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.Right_trigger === true && this.vessel.dash_done === false) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.DashLeft)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}
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
        this.vessel.speed.x = 12
        this.vessel.speed.y = 0
        this.vessel.is_on_ground = false
        if (this.vessel.dash_done === false) {
            this.timer = setTimeout(() => {this.vessel.setState(states.FallLeft)
                        this.vessel.current_state.enterState()
                        this.vessel.dashCooldown()}, 250)
            this.vessel.dash_done = true}}

    handleInput (new_input) {
        if (new_input.Right_trigger === false) {
            clearTimeout(this.timer)
            this.vessel.dashCooldown()
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}

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
        this.vessel.speed.x = -12
        this.vessel.speed.y = 0
        this.vessel.is_on_ground = false
        if (this.vessel.dash_done === false) {
            this.timer = setTimeout(() => {this.vessel.setState(states.FallRight)
                        this.vessel.current_state.enterState()
                        this.vessel.dashCooldown()}, 250)
            this.vessel.dash_done = true}}

    handleInput (new_input) {
        if (new_input.Right_trigger === false) {
            clearTimeout(this.timer)
            this.vessel.dashCooldown()
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}}
    exitState (new_input) {}

}
export class AttackRight1 extends (State) {
    constructor(vessel) {
        super('AttackRight1')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/AttackRight1.png'
        this.frames_number = 5
        this.image_offset = {x: 40, y: 59}
        this.hitbox = {width: 53, height: 70}
        this.attackbox = {width: 128, height: 128}
        this.timer = false}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 0
        this.vessel.speed.y = 0
        }
    handleInput (new_input) {}
    exitState (new_input) {}

}
export class AttackLeft1 extends (State) {
    constructor(vessel) {
        super('AttackLeft1')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/AttackLeft1.png'
        this.frames_number = 5
        this.image_offset = {x: 37, y: 59}
        this.hitbox = {width: 53, height: 70}
        this.attackbox = {width: 128, height: 128}
        this.timer = false}

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 0
        this.vessel.speed.y = 0
        }
    handleInput (new_input) {}
    exitState (new_input) {}


}

//////////////////////////////////////
////////PROJECTILE STATES/////////////
//////////////////////////////////////

export class Pool extends (State) {
    constructor(vessel) {
        super('Pool')
        this.vessel = vessel
        this.vessel.freeze = true
        // this.image = new Image()
        // this.image.src = '../Assets/'
        this.frames_number = 6
        this.image_offset = {x: 0, y: 0}
        this.hitbox = {width: 15, height: 15}
        this.timer = false}
    
    enterState () {
        this.vessel.speed.x = 0
        this.vessel.freeze = true
    }
    handleInput (new_input) {}
    exitState (new_input) {}
}

export class FlyingRight extends (State) {
    constructor(vessel) {
        super('FlyingRight')
        
        this.vessel = vessel
        // this.image = new Image()
        // this.image.src = '../Assets/'
        this.frames_number = 6
        this.image_offset = {x: 0, y: 0}
        this.hitbox = {width: 15, height: 15}
        this.timer = false}
    
    enterState () {
        this.vessel.speed.x = 10
    }
    handleInput (new_input) {
        this.vessel.freeze = false
        this.vessel.speed.x = 10
    }
    exitState (new_input) {}
}

export class FlyingLeft extends (State) {
    constructor(vessel) {
        super('FlyingLeft')
        this.vessel = vessel
        // this.image = new Image()
        // this.image.src = '../Assets/'
        this.frames_number = 6
        this.image_offset = {x: 0, y: 0}
        this.hitbox = {width: 15, height: 15}
        this.timer = false}
    
    enterState () {
        this.vessel.freeze = false
        this.vessel.speed.x = -10
    }
    handleInput (new_input) {
        this.vessel.speed.x = -10
    }
    exitState (new_input) {}
}