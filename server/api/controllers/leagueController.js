'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.getLeaguesByCountry = function(req, res) {
    let request = unirest("GET", API.url + 'v2/leagues/country/' + req.params.country + '/2020');
    request.headers(API.headers);
    let APIresponse = {
        "statusCode": 200,
        "body": {
            "api": {
                "results": 20,
                "datatype": "league",
                "leagues": [
                    {
                        "league_id": 2652,
                        "name": "Ligue 2",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-22",
                        "season_end": "2021-05-15",
                        "logo": "https://media.api-sports.io/football/leagues/62.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": true,
                                "players_statistics": true
                            },
                            "players": true,
                            "topScorers": true,
                            "predictions": true,
                            "odds": true
                        }
                    },
                    {
                        "league_id": 2664,
                        "name": "Ligue 1",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-21",
                        "season_end": "2021-05-23",
                        "logo": "https://media.api-sports.io/football/leagues/61.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": true,
                                "players_statistics": true
                            },
                            "players": true,
                            "topScorers": true,
                            "predictions": true,
                            "odds": true
                        }
                    },
                    {
                        "league_id": 2665,
                        "name": "National",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-21",
                        "season_end": "2021-05-14",
                        "logo": "https://media.api-sports.io/football/leagues/63.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": true
                        }
                    },
                    {
                        "league_id": 2668,
                        "name": "Feminine Division 1",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-09-05",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/64.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": true
                        }
                    },
                    {
                        "league_id": 2744,
                        "name": "National 2 - Group A",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-22",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/67.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": true
                        }
                    },
                    {
                        "league_id": 2861,
                        "name": "National 3 - Group A",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/461.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2862,
                        "name": "National 3 - Group B",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/462.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2863,
                        "name": "National 3 - Group C",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-06",
                        "logo": "https://media.api-sports.io/football/leagues/463.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2864,
                        "name": "National 3 - Group D",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-05-30",
                        "logo": "https://media.api-sports.io/football/leagues/464.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2865,
                        "name": "National 3 - Group E",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/465.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2866,
                        "name": "National 3 - Group F",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/466.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2867,
                        "name": "National 3 - Group H",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/467.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2868,
                        "name": "National 3 - Group I",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/468.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2869,
                        "name": "National 3 - Group J",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/469.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2870,
                        "name": "National 3 - Group K",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/470.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2871,
                        "name": "National 3 - Group L",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-29",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/471.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2872,
                        "name": "National 3 - Group M",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-30",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/472.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "league_id": 2894,
                        "name": "National 2 - Group B",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-22",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/68.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": true
                        }
                    },
                    {
                        "league_id": 2895,
                        "name": "National 2 - Group C",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-22",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/69.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": true
                        }
                    },
                    {
                        "league_id": 2896,
                        "name": "National 2 - Group D",
                        "type": "League",
                        "country": "France",
                        "country_code": "FR",
                        "season": 2020,
                        "season_start": "2020-08-22",
                        "season_end": "2021-06-05",
                        "logo": "https://media.api-sports.io/football/leagues/70.png",
                        "flag": "https://media.api-sports.io/flags/fr.svg",
                        "standings": 1,
                        "is_current": 1,
                        "coverage": {
                            "standings": true,
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics": false,
                                "players_statistics": false
                            },
                            "players": false,
                            "topScorers": false,
                            "predictions": true,
                            "odds": true
                        }
                    }
                ]
            }
        },
        "headers": {
            "content-type": "application/json",
            "date": "Mon, 12 Oct 2020 12:34:20 GMT",
            "server": "RapidAPI-1.2.6",
            "x-rapidapi-region": "AWS - eu-west-1",
            "x-rapidapi-version": "1.2.6",
            "x-ratelimit-requests-limit": "100",
            "x-ratelimit-requests-remaining": "72",
            "transfer-encoding": "chunked",
            "connection": "Close"
        },
        "request": {
            "uri": {
                "protocol": "https:",
                "slashes": true,
                "auth": null,
                "host": "rapidapi.p.rapidapi.com",
                "port": 443,
                "hostname": "rapidapi.p.rapidapi.com",
                "hash": null,
                "search": null,
                "query": null,
                "pathname": "/v2/leagues/country/france/2020",
                "path": "/v2/leagues/country/france/2020",
                "href": "https://rapidapi.p.rapidapi.com/v2/leagues/country/france/2020"
            },
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "41098e13b0msha7667a314616cddp1b480djsnf2fb9db5e9f1",
                "useQueryString": true
            }
        }
    }
    // request.end(function(err, APIresponse) {
    //     if (err)
    //         res.send(err);
        res.json(APIresponse.body.api);
    // });
};


