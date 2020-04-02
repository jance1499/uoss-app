import { Speedwalk } from "./speedwalk";

export var SPEEDWALKS: Speedwalk[] = [
  {
    id: 1,
    name: "hidonWalk",
    directions: ["s", "s", "ff3", "say hidon"],
    category: "Secret Hunt",
    description: "Hidon Bone"
  },
  {
    id: 2,
    name: "balCastleWalk",
    directions: ["e", "e", "ff5", "airship", "say bal castle"],
    category: "Area",
    description: "Bal Castle"
  },
  {
    id: 3,
    name: "mission1Walk",
    directions: ["n", "n", "ct", "nw", "portal"],
    category: "Mission",
    description: "Chrono's Harem"
  }
];
