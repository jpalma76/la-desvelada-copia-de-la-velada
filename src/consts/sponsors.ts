import type { Sponsors } from "../types/sponsors.ts";

import Alsa from "../assets/sponsors/Alsa.svg";
import Cerave from "../assets/sponsors/Cerave.svg";
import CocaCola from "../assets/sponsors/CocaCola.svg";
import Grefusa from "../assets/sponsors/Grefusa.svg";
import InfoJobs from "../assets/sponsors/Infojobs.svg";
import Maxibon from "../assets/sponsors/Maxibon.svg";
import Mahou from "../assets/sponsors/Mahou.svg";
import Nothing from "../assets/sponsors/Nothing.svg";
import Revolut from "../assets/sponsors/Revolut.svg";
import Spotify from "../assets/sponsors/Spotify.svg";
import Vicio from "../assets/sponsors/Vicio.svg";

export const SPONSORS: Sponsors[] = [
  {
    id: "alsa",
    name: "Alsa",
    url: "https://www.alsa.es/",
    image: {
      logo: Alsa,
      width: 200,
      height: 200,
    },
  },
  {
    id: "vicio",
    name: "Vicio",
    url: "https://www.vicio.es/",
    image: {
      logo: Vicio,
      width: 200,
      height: 200,
    },
  },
  {
    id: "revolut",
    name: "Revolut",
    url: "https://www.revolut.com/es-ES/",
    image: {
      logo: Revolut,
      width: 200,
      height: 200,
    },
  },
  {
    id: "spotify",
    name: "Spotify",
    url: "https://www.spotify.com/es/",
    image: {
      logo: Spotify,
      width: 200,
      height: 200,
    },
  },
  {
    id: "cerave",
    name: "Cerave",
    url: "https://www.cerave.es/",
    image: {
      logo: Cerave,
      width: 200,
      height: 200,
    },
  },
  {
    id: "grefusa",
    name: "Grefusa",
    url: "https://www.grefusa.com/",
    image: {
      logo: Grefusa,
      width: 200,
      height: 200,
    },
  },
  {
    id: "maxibon",
    name: "Maxibon",
    url: "https://www.maxibon.es/",
    image: {
      logo: Maxibon,
      width: 200,
      height: 200,
    },
  },
  {
    id: "infojobs",
    name: "InfoJobs",
    url: "https://www.infojobs.net/",
    image: {
      logo: InfoJobs,
      width: 200,
      height: 200,
    },
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    url: "https://www.coca-cola.es/",
    image: {
      logo:CocaCola ,
      width :200 ,
      height :200 ,
     } ,
   },
   {
    id: "mahou",
    name: "Mahou",
    url: "https://www.mahou.es/",
    image: {
      logo:Mahou ,
      width :200 ,
      height :200 ,
     } ,
   } ,
   {
    id: "nothing",
    name: "Nothing",
    url: "https://www.nothing.tech/",
    image: {
      logo:Nothing,
      width :200,
      height :200,
     }
   }
] as const;