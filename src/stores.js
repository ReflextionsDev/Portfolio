import { writable } from "svelte/store";

export const url = "http://localhost:8080";

export const iconSize = writable(64)

export const theme = {
    bgColors: {
        primary: "#1a1a1a",
        secondary: "#361f83",
        gradientSilver: "linear-gradient(120deg, rgba(113,120,125,1) 0%, rgba(112,145,170,1) 100%)",
    },
    skewAngle: -3,
    bgImages: {
        space: "url(\"/assets/backgrounds/nasa.jpg\")"
    },
    bgMasks: {
        green: 'rgba(0, 128, 0, 0.329)',
        blue: '#1c2f858a'
    }
}

export const gameTags = ["all", "featured", "freelance", "web", "mobile", "jam", "sale"]

// Sizes are normal, tall, big, small, wide (unused)
// Add freelance bool
// Add embedded bool (preview)
// Show year of production?
export const games = [
    // Protoshift
    // Include Video
    // https://steamdb.info/app/398070/
    // https://web.archive.org/web/*/https://store.steampowered.com/app/398070
    // https://steamcommunity.com/groups/Protoshift
    {
        date: "Jan 2017",
        title: "Protoshift",
        cover: "/assets/games/protoshift/protoshiftcover.png",
        gif: "/assets/games/protoshift/protoshift.gif",
        tags: ["featured", "web"],
        images: [
            {
                src: "/assets/games/protoshift/card1BG.png",
                alt: "protoshift screenshot",
            },
            {
                src: "/assets/games/protoshift/card2BG.png",
                alt: "protoshift screenshot",
            },
            {
                src: "/assets/games/protoshift/card3BG.jpg",
                alt: "protoshift screenshot",
            },
            {
                src: "/assets/games/protoshift/card4BG.jpg",
                alt: "protoshift screenshot",
            },
            {
                src: "/assets/games/protoshift/card6BG.jpg",
                alt: "protoshift screenshot",
            },
        ],
        desc: "protoshift description, mention steam, etc",
        platform: "laptop",
        src: "",
        size: "big",
    },
    // Soul Grinder
    {
        date: "",
        title: "Soul Grinder",
        tags: ["featured", "mobile", "web", "jam", "sale"],
        cover: "/assets/games/soulgrinder/cover.png",
        gif: "/assets/games/soulgrinder/soulgrinder.gif",
        desc: "Sould Grinder is blah blah lorem lorem blah ipsum and stuff. soulgrinder description, talk about self imposed crunch, could include post-mortem, can talk about thrall features and stuff not added",
        platform: "laptop",
        src: "https://itch.io/embed-upload/5436086?color=1C0C42",
        size: "big",
        images: [
            {
                src: "/assets/games/soulgrinder/1.png",
                alt: "soulgrinder screenshot",
            },
            {
                src: "/assets/games/soulgrinder/2.png",
                alt: "soulgrinder screenshot",
            },
            {
                src: "/assets/games/soulgrinder/3.png",
                alt: "soulgrinder screenshot",
            },
            {
                src: "/assets/games/soulgrinder/4.png",
                alt: "soulgrinder screenshot",
            },
        ],

        videos: [
            {
                label: "Trailer 1",
                src: "https://www.youtube.com/embed/m_qlgFQs7E4",
            },
            {
                label: "Trailer 2",
                src: "https://www.youtube.com/embed/USmpeevo_wg",
            },
        ],
        links: [
            {
                label: "Scirra Arcade",
                link: "",
            },
            {
                label: "Another Link",
                link: "",
            },
            {
                label: "Itch.io",
                link: "https://reflextions.itch.io/soul-grinder",
            },
            {
                label: "Crazy Games",
                link: "https://www.crazygames.com/game/soul-grinder",
            }
        ]

    },
    // Adder
    {
        date: "",
        title: "Adder",
        tags: ["featured"],
        cover: "/assets/games/adder/cover.png",
        gif: "/assets/games/adder/adder.gif",
        images: [
            // {
            // 	src: "/assets/games/adder/1.png",
            // 	alt: "adder screenshot",
            // },
            // {
            // 	src: "/assets/games/adder/2.png",
            // 	alt: "adder screenshot",
            // },
            // {
            // 	src: "/assets/games/adder/3.png",
            // 	alt: "adder screenshot",
            // },
            // {
            // 	src: "/assets/games/adder/4.png",
            // 	alt: "adder screenshot",
            // }
        ],
        desc: "adder description",
        platform: "laptop",
        src: "",
        size: "big",
    },
    // Roadway Repair
    {
        title: "Roadway Repair",
        tags: ["featured", "mobile", "web", "sale"],
        cover: "/assets/games/roadwayrepair/roadwayCover.png",
        gif: "/assets/games/roadwayrepair/roadway.gif",
        desc: "Roadway Repair is a pipes-stlye puzzle game themed around... well, roads. It is part of a mobile web game suite I did in 2016. I think was the first game I spent money outsourcing the art on.",
        platform: "phone",
        src: "https://tangerine-duckanoo-61afbc.netlify.app/",
        size: "tall",
        images: [
            {
                src: "/assets/games/roadwayrepair/rrmenu.png",
                alt: "roadway repair menu screen",
            },
            {
                src: "/assets/games/roadwayrepair/roadway1.png",
                alt: "roadway repair menu, levels, and tutorial screen",
            },
            {
                src: "/assets/games/roadwayrepair/roadway2.png",
                alt: "roadway level screens",
            },
        ],
        links: [
            {
                label: "Scirra Arcade",
                link: "",
            },
            {
                label: "Another Link",
                link: "",
            },
            {
                label: "Itch.io",
                link: "https://reflextions.itch.io/soul-grinder",
            },
            {
                label: "Crazy Games",
                link: "https://www.crazygames.com/game/soul-grinder",
            }
        ],

    },
    // Bouncy Balloons
    {
        title: "Bouncy Balloons",
        // cover: "/assets/games/bouncyballoons/bouncyballoons1.png",
        // cover: "/assets/test.png",
        tags: ["featured", "mobile", "web", "sale"],
        cover: "assets/games/bouncyballoons/bouncyballoonsportrait.png",
        gif: "assets/games/bouncyballoons/balloons.gif",
        images: [
            {
                src: "/assets/games/bouncyballoons/bouncyballoons1.png",
                alt: "bouncy balloons menu screen",
            },
            {
                src: "/assets/games/bouncyballoons/bouncyballoons2.png",
                alt: "bouncy ballons screenshot (1)",
            },
            {
                src: "/assets/games/bouncyballoons/bouncyballoons3.png",
                alt: "bouncy ballons screenshot (2)",
            },
        ],
        desc: "Bouncy Balloons is a physics based puzzle game. It is part of a mobile web game suite I did in 2016. It features 20 levels with increasing mechanics and difficulty.",
        platform: "phone",
        src: "https://stupendous-cobbler-26964c.netlify.app/",
        size: "tall",
    },
    // Brix Builder
    {
        title: "Brix Builder",
        tags: ["featured", "mobile", "web", "sale"],
        cover: "/assets/games/brixbuilder/brixCover.png",
        gif: "/assets/games/brixbuilder/brix.gif",
        images: [
            {
                src: "/assets/games/brixbuilder/brixbuilder1.png",
                alt: "Brix Builder menu screen",
            },
            {
                src: "/assets/games/brixbuilder/brixbuilder2.png",
                alt: "Brix Builder screenshot (1)",
            },
            {
                src: "/assets/games/brixbuilder/brixbuilder3.png",
                alt: "Brix Builder screenshot (2)",
            },
        ],
        desc: "Brix Builder is an arcade inspired stacking game. It is part of a mobile web game suite I did in 2016. It features 3 difficulties with 7 levels each.",
        platform: "phone",
        src: "https://deluxe-haupia-237473.netlify.app/",
        size: "tall",
    },
    // Rocket Runner
    {
        title: "Rocket Runner",
        tags: ["featured", "mobile", "web", "sale"],
        cover: "/assets/games/rocketrunner/rocketCover.png",
        gif: "/assets/games/rocketrunner/rocket.gif",
        images: [
            {
                src: "/assets/games/rocketrunner/rocketrunner1.png",
                alt: "Rocket Runner menu screen",
            },
            {
                src: "/assets/games/rocketrunner/rocketrunner2.png",
                alt: "Rocket Runner screenshot (1)",
            },
            {
                src: "/assets/games/rocketrunner/rocketrunner3.png",
                alt: "Rocket Runner screenshot (2)",
            },
        ],
        desc: "Rocket Runner is an simple dodging game with unlockable skins and currency. It is part of a mobile web game suite I did in 2016.",
        platform: "phone",
        src: "https://deluxe-haupia-237473.netlify.app/",
        size: "tall",
    },
    // Voter Suppression
    {
        title: "The Voter Suppression Trail",
        tags: ["featured", "mobile", "web", "freelance"],
        cover: "/assets/games/voter/voterCover.png",
        gif: "/assets/games/voter/voter.gif",
        images: [
            {
                src: "/assets/games/voter/voter1.png",
                alt: "Voter Suppression Trail menu screen",
            },
            {
                src: "/assets/games/voter/voter2.png",
                alt: "Voter Suppression Trail screenshot (1)",
            },
            {
                src: "/assets/games/voter/voter3.png",
                alt: "Voter Suppression Trail screenshot (2)",
            },
            {
                src: "/assets/games/voter/voter4.png",
                alt: "Voter Suppression Trail screenshot (4)",
            },
            {
                src: "/assets/games/voter/voter5.png",
                alt: "Voter Suppression Trail screenshot (5)",
            },
        ],
        desc: "Voter Description",
        platform: "laptop",
        // Need to account for linked content
        src: "https://deluxe-haupia-237473.netlify.app/",
        size: "big",
    },
    // MTA Country
    {
        title: "MTA Country",
        tags: ["featured", "mobile", "web", "freelance"],
        cover: "/assets/games/mta/mtaCover.png",
        gif: "/assets/games/mta/mta.gif",
        images: [
            {
                src: "/assets/games/mta/mta.png",
                alt: "MTA Country menu screen",
            },
            {
                src: "/assets/games/mta/mta2.png",
                alt: "MTA Country screenshot (1)",
            },
            {
                src: "/assets/games/mta/mta3.png",
                alt: "MTA Country screenshot (2)",
            },
            {
                src: "/assets/games/mta/mta4.png",
                alt: "MTA Country screenshot (3)",
            },
        ],
        desc: "MTA description",
        platform: "laptop",
        // Need to account for linked content
        src: "https://deluxe-haupia-237473.netlify.app/",
        size: "small",
    },
    // Fantaknee Football
    {
        title: "Fantaknee Football",
        tags: ["featured", "mobile", "web", "freelance"],
        cover: "/assets/games/fantaknee/fantakneeCover.png",
        gif: "/assets/games/fantaknee/fantaknee.gif",
        images: [
            {
                src: "/assets/games/fantaknee/fantaknee1.png",
                alt: "Fantaknee Football menu screen",
            },
            {
                src: "/assets/games/fantaknee/fantaknee2.png",
                alt: "Fantaknee Football screenshot (1)",
            },
            {
                src: "/assets/games/fantaknee/fantaknee3.png",
                alt: "Fantaknee Football screenshot (2)",
            },
            {
                src: "/assets/games/fantaknee/fantaknee4.png",
                alt: "Fantaknee Football screenshot (3)",
            },
        ],
        desc: "fantaknee description",
        platform: "laptop",
        // Need to account for linked content
        src: "https://deluxe-haupia-237473.netlify.app/",
        size: "small",
    },
    // KCPS
    {
        title: "Kitty Cat Poker Slots",
        tags: ["featured", "mobile", "freelance"],
        cover: "/assets/games/kcps/kcpsCover.png",
        gif: "/assets/games/kcps/kcps.gif",
        images: [
            {
                src: "/assets/games/kcps/kcps1.png",
                alt: "Kitty Cat Poker Slots menu screen",
            },
            {
                src: "/assets/games/kcps/kcps2.png",
                alt: "Kitty Cat Poker Slots screenshot (1)",
            },
            {
                src: "/assets/games/kcps/kcps3.png",
                alt: "Kitty Cat Poker Slots screenshot (2)",
            },
            {
                src: "/assets/games/kcps/kcps4.png",
                alt: "Kitty Cat Poker Slots screenshot (3)",
            },
            {
                src: "/assets/games/kcps/kcps5.png",
                alt: "Kitty Cat Poker Slots screenshot (4)",
            },
            {
                src: "/assets/games/kcps/kcps6.png",
                alt: "Kitty Cat Poker Slots screenshot (5)",
            },
        ],
        desc: "kcps description, discus google play work and stuff, firebase accounts, etc",
        platform: "phone",
        // Need to account for linked content
        src: "https://play.google.com/store/apps/details?id=com.Go2No1.KittyCat",
        size: "big",
    },
    // Tower Defense
    {
        date: "Aug 2019",
        title: "Tower Defense Prototype",
        tags: ["freelance"],
        cover: "/assets/games/tower/towerCover.png",
        gif: "/assets/games/tower/tower.gif",
        images: [
            {
                src: "/assets/games/tower/tower1.png",
                alt: "Tower Defense prototype menu screen",
            },
            {
                src: "/assets/games/tower/tower2.png",
                alt: "Tower Defense prototype screenshot (1)",
            },
            {
                src: "/assets/games/tower/tower3.png",
                alt: "Tower Defense prototype screenshot (2)",
            },
        ],
        desc: "tower description, discuss prototyping, client didn't go forward or something",
        platform: "phone",
        // Need to account for linked content
        src: "",
        size: "small",
    },
    // Chem Game
    {
        date: "June 2017",
        title: "Chemistry Hotspot Quiz",
        tags: ["freelance"],
        cover: "/assets/games/chem/chemCover.png",
        gif: "/assets/games/chem/chem.gif",
        images: [
            {
                src: "/assets/games/chem/chem1.png",
                alt: "Chemistry Hotspot Quiz menu screen",
            },
            {
                src: "/assets/games/chem/chem2.png",
                alt: "Chemistry Hotspot Quiz screenshot (1)",
            },
            {
                src: "/assets/games/chem/chem3.png",
                alt: "Chemistry Hotspot Quiz screenshot (2)",
            },
            {
                src: "/assets/games/chem/chem4.png",
                alt: "Chemistry Hotspot Quiz screenshot (3)",
            },
        ],
        desc: "chem description, discuss prototyping, client didn't go forward or something",
        platform: "phone",
        // Need to account for linked content
        src: "",
        size: "small",
    },
    // Nomzilla
    {
        date: "Dec 2016",
        title: "Monster's Mayhem",
        tags: ["freelance"],
        cover: "/assets/games/nom/nomCover.png",
        gif: "/assets/games/nom/nom.gif",
        images: [
            {
                src: "/assets/games/nom/nom1.png",
                alt: "Monster's Mayhem menu screen",
            },
            {
                src: "/assets/games/nom/nom2.png",
                alt: "Monster's Mayhem screenshot (1)",
            },
            {
                src: "/assets/games/nom/nom3.png",
                alt: "Monster's Mayhem screenshot (2)",
            },
            {
                src: "/assets/games/nom/nom4.png",
                alt: "Monster's Mayhem screenshot (3)",
            },
        ],
        desc: "nom description, discuss prototyping, client didn't go forward or something",
        platform: "phone",
        // Need to account for linked content
        src: "",
        size: "small",
    },
    // RTR
    {
        date: "2013",
        title: "Red Tie Runner",
        tags: ["featured", "mobile", "web", "sale"],
        cover: "/assets/games/rtr/rtrCover.png",
        gif: "/assets/games/rtr/rtr.gif",
        images: [
            {
                src: "/assets/games/rtr/ss1.png",
                alt: "Red Tie Runner menu screen",
            },
            {
                src: "/assets/games/rtr/ss2.png",
                alt: "Red Tie Runner screenshot (1)",
            },
            {
                src: "/assets/games/rtr/ss3.png",
                alt: "Red Tie Runner screenshot (2)",
            },
            {
                src: "/assets/games/rtr/ss4.png",
                alt: "Red Tie Runner screenshot (4)",
            },
            {
                src: "/assets/games/rtr/ss5.png",
                alt: "Red Tie Runner screenshot (5)",
            },
            {
                src: "/assets/games/rtr/ss6.png",
                alt: "Red Tie Runner screenshot (6)",
            },
            {
                src: "/assets/games/rtr/ss7.png",
                alt: "Red Tie Runner screenshot (7)",
            },
        ],
        desc: "rtr description",
        // Need to account for linked content
        platform: "laptop",
        src: "",
        size: "big",
    },
    // Don't Fall
    {
        date: "2013",
        title: "Don't Fall!",
        tags: ["featured", "web", "sale"],
        cover: "/assets/games/dontfall/dfCover.png",
        gif: "/assets/games/dontfall/df.gif",
        images: [
            {
                src: "/assets/games/dontfall/df1.png",
                alt: "Don't Fall! screenshot",
            },
            {
                src: "/assets/games/dontfall/df2.png",
                alt: "Don't Fall! screenshot",
            },
            {
                src: "/assets/games/dontfall/df3.png",
                alt: "Don't Fall! screenshot",
            },
        ],
        desc: "dontfall description",
        // Need to account for linked content
        platform: "laptop",
        src: "",
        size: "small",
    },
    //  Jet Attack
    {
        date: "2013",
        title: "Jet Attack!",
        tags: ["featured", "web", "sale"],
        desc: "jetattack description",
        platform: "laptop",
        src: "",
        size: "small",
        cover: "/assets/games/jetattack/jaCover3.png",
        gif: "/assets/games/jetattack/ja.gif",
        images: [
            {
                src: "/assets/games/jetattack/ss1.png",
                alt: "Jet Attack! screenshot",
            },
            {
                src: "/assets/games/jetattack/ss2.png",
                alt: "Jet Attack! screenshot",
            },
            {
                src: "/assets/games/jetattack/ss3.png",
                alt: "Jet Attack! screenshot",
            },
            {
                src: "/assets/games/jetattack/ss4.png",
                alt: "Jet Attack! screenshot",
            },
        ],
    },
    // Rocket Strike
    {
        date: "",
        title: "Rocket Strike!",
        tags: ["featured", "web", "sale"],
        cover: "/assets/games/rocketstrike/rocketstrikeCover.png",
        gif: "/assets/games/rocketstrike/rocketstrike.gif",
        images: [
            {
                src: "/assets/games/rocketstrike/ss1.png",
                alt: "Rocket Strike! screenshot",
            },
            {
                src: "/assets/games/rocketstrike/ss3.png",
                alt: "Rocket Strike! screenshot",
            },
            {
                src: "/assets/games/rocketstrike/ss4.png",
                alt: "Rocket Strike! screenshot",
            },
            {
                src: "/assets/games/rocketstrike/ss5.png",
                alt: "Rocket Strike! screenshot",
            },
        ],
        desc: "rocketstrike description, released seperately as web with local multiplayer 1-4 and mobile",
        platform: "laptop",
        src: "",
        size: "small",
    },
    // Sam
    {
        date: "",
        title: "Sam",
        tags: ["featured", "web", "jam"],
        cover: "/assets/games/sam/samCover.png",
        gif: "/assets/games/sam/sam.gif",
        images: [
            {
                src: "/assets/games/sam/1.png",
                alt: "Sam screenshot",
            },
            {
                src: "/assets/games/sam/2.png",
                alt: "Sam screenshot",
            },
            {
                src: "/assets/games/sam/3.png",
                alt: "Sam screenshot",
            },
            {
                src: "/assets/games/sam/4.png",
                alt: "Sam screenshot",
            },
        ],
        desc: "sam description",
        platform: "laptop",
        src: "",
        size: "small",
    },
    // Minos' Pond
    {
        date: "",
        title: "Mino's Pond",
        tags: ["web", "jam"],
        cover: "/assets/games/minos/minosCover.png",
        gif: "/assets/games/minos/minos.gif",
        images: [
            {
                src: "/assets/games/minos/ss1.png",
                alt: "minos screenshot",
            },
            {
                src: "/assets/games/minos/ss3.png",
                alt: "minos screenshot",
            },
            {
                src: "/assets/games/minos/ss4.png",
                alt: "minos screenshot",
            },
            {
                src: "/assets/games/minos/ss2.png",
                alt: "minos screenshot",
            },
            {
                src: "/assets/games/minos/ss5.gif",
                alt: "minos screenshot",
            },
        ],
        desc: "minos description",
        platform: "laptop",
        src: "",
        size: "small",
    },
    // Gridlock Dash
    {
        date: "",
        title: "Gridlock Dash",
        tags: ["featured", "web", "jam", "sale"],
        cover: "/assets/games/gridlock/gdCover.png",
        gif: "/assets/games/gridlock/gridlock.gif",
        images: [
            {
                src: "/assets/games/gridlock/ss5.png",
                alt: "gridlock screenshot",
            },
            {
                src: "/assets/games/gridlock/ss1.png",
                alt: "gridlock screenshot",
            },
            {
                src: "/assets/games/gridlock/ss2.png",
                alt: "gridlock screenshot",
            },
            {
                src: "/assets/games/gridlock/ss4.png",
                alt: "gridlock screenshot",
            },
            {
                src: "/assets/games/gridlock/ss3.png",
                alt: "gridlock screenshot",
            },
        ],
        desc: "gridlock description",
        platform: "laptop",
        src: "",
        size: "small",
    },
]