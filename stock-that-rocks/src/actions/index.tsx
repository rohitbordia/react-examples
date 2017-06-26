export type Action = {
    type: 'DEFAULT_PROFILE',
    profile: string
} | {
        type: 'CHANGE_PROFILE',
        profile: string
    }

export const defaultProfile = (): Action => ({
    type: 'DEFAULT_PROFILE',
    profile: 'generalUser'
})

export const changeProfile = (profile: string): Action => ({
    type: 'CHANGE_PROFILE',
    profile
})