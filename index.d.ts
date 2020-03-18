interface Human {
    age: number,
    gender: string,
    name: string
}

export interface DEV extends Human {
    machin: string
}

interface Fish extends Human {
    shame: boolean
}
export interface SPTShame {
    gabin: DEV,
    armando: DEV,
    luca: Fish
}
