type SponsorId = 
| "vicio"
| "revolut"
| "alsa"
| "spotify"
| "cerave"
| "grefusa"
| "maxibon"
| "infojobs"
| "coca-cola"
| "mahou"
| "nothing"

type SponsorName = 
| "vicio"
| "revolut"
| "alsa"
| "spotify"
| "cerave"
| "grefusa"
| "maxibon"
| "infojobs"
| "coca-cola"
| "mahou"
| "nothing"

export interface Sponsors {
    id: SponsorId,
    name: SponsorName,
    url: string,
    image: {
        logo: any,
        width: number,
        height: number
    }
}