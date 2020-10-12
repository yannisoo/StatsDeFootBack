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


exports.getTeamsByLeague = function(req, res) {
    let request = unirest("GET", API.url + 'v2/teams/league/' + req.params.league_id );
    request.headers(API.headers);
    let APIresponse = {
        "statusCode": 200,
        "body": {
            "api": {
                "results": 20,
                "datatype": "team",
                "teams": [
                    {
                        "team_id": 97,
                        "name": "Lorient",
                        "code": null,
                        "logo": "https://media.api-sports.io/football/teams/97.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1926,
                        "venue_name": "Stade Yves Allainmat - Le Moustoir",
                        "venue_surface": "artificial turf",
                        "venue_address": "11, rue Jean Le Coutaller",
                        "venue_city": "Lorient",
                        "venue_capacity": 18970
                    },
                    {
                        "team_id": 95,
                        "name": "Strasbourg",
                        "code": "STR",
                        "logo": "https://media.api-sports.io/football/teams/95.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1906,
                        "venue_name": "Stade de la Meinau",
                        "venue_surface": "grass",
                        "venue_address": "12, rue de l&apos;Extenwoerth",
                        "venue_city": "Strasbourg",
                        "venue_capacity": 26109
                    },
                    {
                        "team_id": 79,
                        "name": "Lille",
                        "code": "LIL",
                        "logo": "https://media.api-sports.io/football/teams/79.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1944,
                        "venue_name": "Stade Pierre-Mauroy",
                        "venue_surface": "grass",
                        "venue_address": "261, Boulevard de Tournai, l&apos;Hôtel de Ville",
                        "venue_city": "Villeneuve d&apos;Ascq",
                        "venue_capacity": 50083
                    },
                    {
                        "team_id": 94,
                        "name": "Rennes",
                        "code": "REN",
                        "logo": "https://media.api-sports.io/football/teams/94.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1901,
                        "venue_name": "Roazhon Park",
                        "venue_surface": "grass",
                        "venue_address": "111, route de Lorient",
                        "venue_city": "Rennes",
                        "venue_capacity": 31127
                    },
                    {
                        "team_id": 89,
                        "name": "Dijon",
                        "code": "DIJ",
                        "logo": "https://media.api-sports.io/football/teams/89.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1936,
                        "venue_name": "Stade Gaston-Gérard",
                        "venue_surface": "grass",
                        "venue_address": "Rue du Stade",
                        "venue_city": "Dijon",
                        "venue_capacity": 16098
                    },
                    {
                        "team_id": 77,
                        "name": "Angers",
                        "code": "ANG",
                        "logo": "https://media.api-sports.io/football/teams/77.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1919,
                        "venue_name": "Stade Raymond-Kopa",
                        "venue_surface": "grass",
                        "venue_address": "73, boulevard Pierre de Coubertin",
                        "venue_city": "Angers",
                        "venue_capacity": 17835
                    },
                    {
                        "team_id": 78,
                        "name": "Bordeaux",
                        "code": "BOR",
                        "logo": "https://media.api-sports.io/football/teams/78.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1881,
                        "venue_name": "Stade Matmut-Atlantique",
                        "venue_surface": "grass",
                        "venue_address": "Cours Jules Ladoumegue",
                        "venue_city": "Bordeaux",
                        "venue_capacity": 42115
                    },
                    {
                        "team_id": 83,
                        "name": "Nantes",
                        "code": "NAN",
                        "logo": "https://media.api-sports.io/football/teams/83.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1943,
                        "venue_name": "Stade de la Beaujoire - Louis Fonteneau",
                        "venue_surface": "grass",
                        "venue_address": "5, boulevard de la Beaujoire",
                        "venue_city": "Nantes",
                        "venue_capacity": 38285
                    },
                    {
                        "team_id": 81,
                        "name": "Marseille",
                        "code": "OLM",
                        "logo": "https://media.api-sports.io/football/teams/81.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1899,
                        "venue_name": "Orange Vélodrome",
                        "venue_surface": "grass",
                        "venue_address": "3, boulevard Michelet",
                        "venue_city": "Marseille",
                        "venue_capacity": 67394
                    },
                    {
                        "team_id": 1063,
                        "name": "Saint Etienne",
                        "code": "STE",
                        "logo": "https://media.api-sports.io/football/teams/1063.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1920,
                        "venue_name": "Stade Geoffroy-Guichard",
                        "venue_surface": "grass",
                        "venue_address": "14, rue Pierre et Paul Guichard",
                        "venue_city": "Saint-Ètienne",
                        "venue_capacity": 41965
                    },
                    {
                        "team_id": 91,
                        "name": "Monaco",
                        "code": "AMO",
                        "logo": "https://media.api-sports.io/football/teams/91.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1919,
                        "venue_name": "Stade Louis II",
                        "venue_surface": "grass",
                        "venue_address": "7, avenue des Castelans",
                        "venue_city": "Monaco",
                        "venue_capacity": 18523
                    },
                    {
                        "team_id": 93,
                        "name": "Reims",
                        "code": "REI",
                        "logo": "https://media.api-sports.io/football/teams/93.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1909,
                        "venue_name": "Stade Auguste-Delaune II",
                        "venue_surface": "grass",
                        "venue_address": "33, Chaussée Bocquaine",
                        "venue_city": "Reims",
                        "venue_capacity": 21684
                    },
                    {
                        "team_id": 92,
                        "name": "Nimes",
                        "code": "NIM",
                        "logo": "https://media.api-sports.io/football/teams/92.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1937,
                        "venue_name": "Stade des Costières",
                        "venue_surface": "grass",
                        "venue_address": "123, avenue de la Bouvine",
                        "venue_city": "Nîmes",
                        "venue_capacity": 18482
                    },
                    {
                        "team_id": 106,
                        "name": "Stade Brestois 29",
                        "code": null,
                        "logo": "https://media.api-sports.io/football/teams/106.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1950,
                        "venue_name": "Stade Francis-Le Blé",
                        "venue_surface": "grass",
                        "venue_address": "26, rue de Quimper",
                        "venue_city": "Brest",
                        "venue_capacity": 15931
                    },
                    {
                        "team_id": 84,
                        "name": "Nice",
                        "code": "NCE",
                        "logo": "https://media.api-sports.io/football/teams/84.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1904,
                        "venue_name": "Allianz Riviera",
                        "venue_surface": "grass",
                        "venue_address": "Boulevard des Jardiniers",
                        "venue_city": "Nice",
                        "venue_capacity": 35624
                    },
                    {
                        "team_id": 116,
                        "name": "Lens",
                        "code": null,
                        "logo": "https://media.api-sports.io/football/teams/116.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1906,
                        "venue_name": "Stade Bollaert-Delelis",
                        "venue_surface": "grass",
                        "venue_address": "83, rue Maurice-Carton",
                        "venue_city": "Lens",
                        "venue_capacity": 41233
                    },
                    {
                        "team_id": 82,
                        "name": "Montpellier",
                        "code": "MPL",
                        "logo": "https://media.api-sports.io/football/teams/82.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1974,
                        "venue_name": "Stade de la Mosson",
                        "venue_surface": "grass",
                        "venue_address": "Avenue de Heidelberg",
                        "venue_city": "Montpellier",
                        "venue_capacity": 32939
                    },
                    {
                        "team_id": 80,
                        "name": "Lyon",
                        "code": "LYO",
                        "logo": "https://media.api-sports.io/football/teams/80.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1950,
                        "venue_name": "Groupama Stadium",
                        "venue_surface": "grass",
                        "venue_address": "Chemin du Montout",
                        "venue_city": "Décines-Charpieu",
                        "venue_capacity": 59186
                    },
                    {
                        "team_id": 85,
                        "name": "Paris Saint Germain",
                        "code": "PSG",
                        "logo": "https://media.api-sports.io/football/teams/85.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1970,
                        "venue_name": "Parc des Princes",
                        "venue_surface": "grass",
                        "venue_address": "24, rue du Commandant Guilbaud",
                        "venue_city": "Paris",
                        "venue_capacity": 47929
                    },
                    {
                        "team_id": 112,
                        "name": "Metz",
                        "code": null,
                        "logo": "https://media.api-sports.io/football/teams/112.png",
                        "country": "France",
                        "is_national": false,
                        "founded": 1932,
                        "venue_name": "Stade Saint-Symphorien",
                        "venue_surface": "grass",
                        "venue_address": "3, allée Saint-Symphorien",
                        "venue_city": "Longeville-lès-Metz",
                        "venue_capacity": 25636
                    }
                ]
            }
        },
        "headers": {
            "content-type": "application/json",
            "date": "Mon, 12 Oct 2020 13:23:27 GMT",
            "server": "RapidAPI-1.2.6",
            "x-rapidapi-region": "AWS - eu-west-1",
            "x-rapidapi-version": "1.2.6",
            "x-ratelimit-requests-limit": "100",
            "x-ratelimit-requests-remaining": "70",
            "content-length": "6412",
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
                "pathname": "/v2/teams/league/2664",
                "path": "/v2/teams/league/2664",
                "href": "https://rapidapi.p.rapidapi.com/v2/teams/league/2664"
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
}

