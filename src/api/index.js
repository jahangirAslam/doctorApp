import { LEAGUE_TABLE } from "./endpoints"
import {get } from "./fetch"

export const getTeams = () => {
    return get({ url: LEAGUE_TABLE })
}