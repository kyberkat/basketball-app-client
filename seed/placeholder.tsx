export interface ModelInterface {
    players: Player[]
    teams: Team[]
    games: Game[]
}
export interface Player {
    primaryKey: number,
    name: string,
    position: string,
    age: number,
    height: string,
    jersey: number,
    draftYear: number | null
    pick: number | null
    tradeYear: number | null,
    pts: number,
    threepoints: number,
    rebounds: number,
    blocks: number,
    teams: number[]
}

export interface Team {
    id: number,
    name: string
}

// for schema validation and serialization
export interface Game {
    primaryKey: number,
    date: string,
    vs: string,
    result: string,
    score: string,
    record: string,
}

export const data: ModelInterface = {
    players: [
        {
            primaryKey: 1,
            name: "Jayson Tatum",
            position: "F",
            age: 26,
            height: "6' 8\"",
            jersey: 0,
            draftYear: 2017,
            pick: 3,
            tradeYear: 0,
            pts: 25.0,
            threepoints: 28.3,
            rebounds: 9.7,
            blocks: 13,
            teams: [1]
        },
        {
            primaryKey: 2,
            name: "Jaylen Brown",
            position: "F",
            age: 28,
            height: "6' 6\"",
            jersey: 7,
            draftYear: 2016,
            pick: 3,
            tradeYear: 0,
            pts: 23.9,
            threepoints: 32.7,
            rebounds: 5.9,
            blocks: 12,
            teams: [1]
        },
        {
            primaryKey: 3,
            name: "Al Horford",
            position: "C",
            age: 38,
            height: "6' 9\"",
            jersey: 42,
            draftYear: 2007,
            pick: 3,
            tradeYear: 0,
            pts: 9.2,
            threepoints: 36.8,
            rebounds: 7.0,
            blocks: 16,
            teams: [1]
        },
        {
            primaryKey: 4,
            name: "Derrick White",
            position: "G",
            age: 29,
            height: "6' 4\"",
            jersey: 9,
            draftYear: 2017,
            pick: 29,
            tradeYear: 0,
            pts: 16.7,
            threepoints: 40.4,
            rebounds: 4.3,
            blocks: 23,
            teams: [1]
        },
        {
            primaryKey: 5,
            name: "Jrue Holiday",
            position: "G",
            age: 34,
            height: "6' 3\"",
            jersey: 21,
            draftYear: 2009,
            pick: 17,
            tradeYear: 0,
            pts: 13.2,
            threepoints: 40.2,
            rebounds: 6.1,
            blocks: 12,
            teams: [1]
        },
        {
            primaryKey: 6,
            name: "Payton Pritchard",
            position: "G",
            age: 26,
            height: "6' 1\"",
            jersey: 11,
            draftYear: 2020,
            pick: 26,
            tradeYear: 0,
            pts: 6.4,
            threepoints: 38.3,
            rebounds: 1.9,
            blocks: 0,
            teams: [1]
        },
        {
            primaryKey: 7,
            name: "Sam Hauser",
            position: "F",
            age: 26,
            height: "6' 7\"",
            jersey: 55,
            draftYear: 2021,
            pick: 0,
            tradeYear: 0,
            pts: 5.4,
            threepoints: 38.0,
            rebounds: 2.2,
            blocks: 3,
            teams: [1]
        },
        {
            primaryKey: 8,
            name: "Kristaps Porziņģis",
            position: "C",
            age: 29,
            height: "7' 3\"",
            jersey: 6,
            draftYear: 2015,
            pick: 4,
            tradeYear: 0,
            pts: 12.3,
            threepoints: 34.5,
            rebounds: 4.4,
            blocks: 11,
            teams: [1]
        }
    ],
    teams: [
        {
            id: 1,
            name: "Boston Celtics"
        }
    ],
    games: [
        {
            primaryKey: 1,
            date: "10/22",
            vs: "New York Knicks",
            result: "W",
            score: "132-109",
            record: "1-0",
        },
        {
            primaryKey: 2,
            date: "10/24",
            vs: "Washington Wizards",
            result: "W",
            score: "122-102",
            record: "2-0",
        },
        {
            primaryKey: 3,
            date: "10/26",
            vs: "Detroit Pistons",
            result: "W",
            score: "124-118",
            record: "3-0",
        },
        {
            primaryKey: 4,
            date: "10/28",
            vs: "Milwaukee Bucks",
            result: "W",
            score: "119-108",
            record: "4-0",
        },
        {
            primaryKey: 5,
            date: "10/30",
            vs: "Indiana Pacers",
            result: "L",
            score: "132-135",
            record: "4-1",
        },
        {
            primaryKey: 6,
            date: "11/1",
            vs: "Charlotte Hornets",
            result: "W",
            score: "124-109",
            record: "5-1",
        },
        {
            primaryKey: 7,
            date: "11/2",
            vs: "Charlotte Hornets",
            result: "W",
            score: "113-103",
            record: "6-1",
        },
        {
            primaryKey: 8,
            date: "11/4",
            vs: "Atlanta Hawks",
            result: "W",
            score: "123-93",
            record: "7-1",
        }
    ]
}