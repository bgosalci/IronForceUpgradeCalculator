'use strict';
angular.module('myApp.dataProvider', [])
    .constant('TANKS', {
        tanks: [
            {
                name:   'HYDRUS',
                tier:   1,
                price:  'free',
                payType:'',
                image:  'hydrus.png',
                basicInfo: {
                    attack:     48,
                    armor:      250,
                    fireSpeed:  11.5,
                    movement:   55.0
                }
            },
            {
                name:   'DORADO',
                tier:   1,
                price:  '20,000',
                payType:'($)',
                image:  '',
                basicInfo: {
                    attack:     55,
                    armor:      350,
                    fireSpeed:  12.5,
                    movement:   60.0
                }
            },
            {
                name:   'DRACO',
                tier:   1,
                price:  20,
                payType:'(G)',
                image:  'draco.png',
                basicInfo: {
                    attack:     68,
                    armor:      400,
                    fireSpeed:  11.0,
                    movement:   56.0
                }
            },
            {
                name:   'URSA',
                tier:   2,
                price:  '100,000',
                payType:'($)',
                image:  'ursa.png',
                basicInfo: {
                    attack:     80,
                    armor:      500,
                    fireSpeed:  10.5,
                    movement:   55.0
                }
            },
            {
                name:   'APUS',
                tier:   2,
                price:  'In-app purchase',
                payType:'',
                image:  'apus.png',
                basicInfo: {
                    attack:     84,
                    armor:      550,
                    fireSpeed:  11.5,
                    movement:   62.0
                }
            },
            {
                name:   'SIRUS',
                tier:   2,
                price:  85,
                payType:'(G)',
                image:  '',
                basicInfo: {
                    attack:     100,
                    armor:      600,
                    fireSpeed:  8.6,
                    movement:   55.0
                }
            },
            {
                name:   'AQUILA',
                tier:   3,
                price:  '1,000,000',
                payType:'($)',
                image:  'aquila.png',
                basicInfo: {
                    attack:     110,
                    armor:      600,
                    fireSpeed:  9.5,
                    movement:   60.0
                }
            }
            ,
            {
                name:   'LUPUS',
                tier:   3,
                price:  375,
                payType:'(G)',
                image:  '',
                basicInfo: {
                    attack:     135,
                    armor:      650,
                    fireSpeed:  9.0,
                    movement:   58.0
                }
            },
            {
                name:   'CORVUS',
                tier:   3,
                price:  600,
                payType:'(G)',
                image:  '',
                basicInfo: {
                    attack:     140,
                    armor:      700,
                    fireSpeed:  9.5,
                    movement:   62.0
                }
            },
            {
                name:   'LYNX',
                tier:   4,
                price:  '1,000',
                payType:'(G)',
                image:  '',
                basicInfo: {
                    attack:     150,
                    armor:      800,
                    fireSpeed:  9.2,
                    movement:   62.0
                }
            },
            {
                name:   'S.LYNX',
                tier:   4,
                price:  'MAX LYNX',
                payType:'',
                image:  '',
                basicInfo: {
                    attack:     366,
                    armor:      2250,
                    fireSpeed:  9.5,
                    movement:   65.0
                }
            },
            {
                name:   'VULPECULA',
                tier:   4,
                price:  '5,000,000',
                payType:'($)',
                image:  'vuplecula.png',
                basicInfo: {
                    attack:     130,
                    armor:      800,
                    fireSpeed:  9.5,
                    movement:   60.0
                }
            },
            {
                name:   'S.VULPECULA',
                tier:   4,
                price:  'MAX VULPECULA',
                payType:'',
                image:  '',
                basicInfo: {
                    attack:     345,
                    armor:      2150,
                    fireSpeed:  9.6,
                    movement:   67.0
                }
            },
            {
                name:   'LACERTA',
                tier:   4,
                price:  '2,250',
                payType:'(G)',
                image:  '',
                basicInfo: {
                    attack:     188,
                    armor:      1050,
                    fireSpeed:  10.0,
                    movement:   64.0
                }
            },
            {
                name:   'S.LACERTA',
                tier:   4,
                price:  'MAX LACERTA',
                payType:'',
                image:  '',
                basicInfo: {
                    attack:     425,
                    armor:      2450,
                    fireSpeed:  10.5,
                    movement:   69.0
                }
            },
            {
                name:   'SCORPIUS',
                tier:   5,
                price:  '4,500',
                payType:'(G)',
                image:  '',
                basicInfo: {
                    attack:     170,
                    armor:      1350,
                    fireSpeed:  9.5,
                    movement:   66.0
                }
            },
            {
                name:   'S.SCORPIUS',
                tier:   5,
                price:  'MAX SCORPIUS',
                payType:'',
                image:  '',
                basicInfo: {
                    attack:     488,
                    armor:      2400,
                    fireSpeed:  9.8,
                    movement:   72.0
                }
            },
            {
                name:   'PAVO',
                tier:   5,
                price:  '4,500',
                payType:'(G)',
                image:  '',
                basicInfo: {
                    attack:     120,
                    armor:      1250,
                    fireSpeed:  13.5,
                    movement:   60.0
                }
            },
            {
                name:   'S.PAVO',
                tier:   5,
                price:  'MAX PAVO',
                payType:'',
                image:  '',
                basicInfo: {
                    attack:     366,
                    armor:      2650,
                    fireSpeed:  12.5,
                    movement:   70.0
                }
            },
            {
                name:   'MONOCEROS',
                tier:   5,
                price:  '5,000',
                payType:'(G)',
                image:  '',
                basicInfo: {
                    attack:     300,
                    armor:      1755,
                    fireSpeed:  9.0,
                    movement:   62.0
                }
            },
            {
                name:   'S.MONOCEROS',
                tier:   5,
                price:  'MAX MONOSEROS',
                payType:'',
                image:  '',
                basicInfo: {
                    attack:     566,
                    armor:      3600,
                    fireSpeed:  9.5,
                    movement:   67.0
                }
            }
        ],
        tankDetails: {
            "HYDRUS":   {
                "turret": [
                    {
                        level:      1,
                        attack:     6,
                        fireSpeed:  0,
                        time:       '1m',
                        calcTime:   3600,
                        price:      2500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '15m',
                        calcTime:   3600 * 15,
                        price:      4050,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '1h',
                        calcTime:   3600 * 60,
                        price:      6550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '3h',
                        calcTime:   3600 * 180,
                        price:      10600,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '3h 50m',
                        calcTime:   3600 * 240,
                        price:      17150,
                        diamonds:   14
                    }
                ],
                "barrel": [
                    {
                        level:      1,
                        attack:     0,
                        fireSpeed:  0.6,
                        time:       '1m',
                        calcTime:   3600,
                        price:      2250,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '15m',
                        calcTime:   3600 * 15,
                        price:      3650,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '1h',
                        calcTime:   3600 * 60,
                        price:      5900,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '3h',
                        calcTime:   3600 * 180,
                        price:      9550,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '3h 50m',
                        calcTime:   3600 * 240,
                        price:      15450,
                        diamonds:   14
                    }
                ],
                "armor": [
                    {
                        level:      1,
                        armor:      12,
                        movement:   0,
                        time:       '1m',
                        calcTime:   3600,
                        price:      2150,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      12,
                        movement:   0,
                        time:       '15m',
                        calcTime:   3600 * 15,
                        price:      3500,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      18,
                        movement:   0,
                        time:       '1h',
                        calcTime:   3600 * 60,
                        price:      5650,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      24,
                        movement:   0,
                        time:       '3h',
                        calcTime:   3600 * 180,
                        price:      9150,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      27,
                        movement:   0,
                        time:       '3h 50m',
                        calcTime:   3600 * 140,
                        price:      14800,
                        diamonds:   14
                    }
                ],
                "engine": [
                    {
                        level:      1,
                        movement:   0.6,
                        time:       '1m',
                        calcTime:   3600,
                        price:      1500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        movement:   0.6,
                        time:       '15m',
                        calcTime:   3600 * 15,
                        price:      2450,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        movement:   0.9,
                        time:       '1h',
                        calcTime:   3600 * 60,
                        price:      3950,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        movement:   1.2,
                        time:       '3h',
                        calcTime:   3600 * 180,
                        price:      6400,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        movement:   1.5,
                        time:       '3h 50m',
                        calcTime:   3600 * 240,
                        price:      10350,
                        diamonds:   14
                    }
                ],
                "trucks": [
                    {
                        level:      1,
                        armor:      6,
                        movement:   0.3,
                        time:       '1m',
                        calcTime:   3600,
                        price:      600,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      6,
                        movement:   0.3,
                        time:       '15m',
                        calcTime:   3600 * 15,
                        price:      950,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      6,
                        movement:   0.6,
                        time:       '1h',
                        calcTime:   3600 * 60,
                        price:      1550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      9,
                        movement:   0.6,
                        time:       '3h',
                        calcTime:   3600 * 180,
                        price:      2500,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      9,
                        movement:   0.6,
                        time:       '3h 50m',
                        calcTime:   3600 * 240,
                        price:      4050,
                        diamonds:   14
                    }
                ],
                "max":  {
                    allMax: {
                        attack:     66,
                        fireSpeed:  13.3,
                        armor:      379,
                        movement:   62.2,
                        levels:     5,
                        totalPrice: 0,
                        totalTime:  0,
                        totalDiamonds: 0
                    },
                    maxMovementFireSpeed: {
                        attack:     66,
                        fireSpeed:  13.3,
                        armor:      379,
                        movement:   62.2
                    }
                }
            },
            "DORADO":   {
                "turret": [
                    {
                        level:      1,
                        attack:     6,
                        fireSpeed:  0,
                        time:       '1m',
                        price:      2500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '15m',
                        price:      4050,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '1h',
                        price:      6550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '3h',
                        price:      10600,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '3h 50m',
                        price:      17150,
                        diamonds:   14
                    }
                ],
                "barrel": [
                    {
                        level:      1,
                        attack:     0,
                        fireSpeed:  0.6,
                        time:       '1m',
                        price:      2250,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '15m',
                        price:      3650,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '1h',
                        price:      5900,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '3h',
                        price:      9550,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '3h 50m',
                        price:      15450,
                        diamonds:   14
                    }
                ],
                "armor": [
                    {
                        level:      1,
                        armor:      12,
                        movement:   0,
                        time:       '1m',
                        price:      2150,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      12,
                        movement:   0,
                        time:       '15m',
                        price:      3500,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      18,
                        movement:   0,
                        time:       '1h',
                        price:      5650,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      24,
                        movement:   0,
                        time:       '3h',
                        price:      9150,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      27,
                        movement:   0,
                        time:       '3h 50m',
                        price:      14800,
                        diamonds:   14
                    }
                ],
                "engine": [
                    {
                        level:      1,
                        movement:   0.6,
                        time:       '1m',
                        price:      1500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        movement:   0.6,
                        time:       '15m',
                        price:      2450,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        movement:   0.9,
                        time:       '1h',
                        price:      3950,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        movement:   1.2,
                        time:       '3h',
                        price:      6400,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        movement:   1.5,
                        time:       '3h 50m',
                        price:      10350,
                        diamonds:   14
                    }
                ],
                "trucks": [
                    {
                        level:      1,
                        armor:      6,
                        movement:   0.3,
                        time:       '1m',
                        price:      600,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      6,
                        movement:   0.3,
                        time:       '15m',
                        price:      950,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      6,
                        movement:   0.6,
                        time:       '1h',
                        price:      1550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      9,
                        movement:   0.6,
                        time:       '3h',
                        price:      2500,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      9,
                        movement:   0.6,
                        time:       '3h 50m',
                        price:      4050,
                        diamonds:   14
                    }
                ],
                "max":  {
                    allMax: {
                        attack:     66,
                        fireSpeed:  13.3,
                        armor:      379,
                        movement:   62.2,
                        levels:     5,
                        totalPrice: 0,
                        totalTime:  0,
                        days:       0
                    },
                    maxMovementFireSpeed: {
                        attack:     66,
                        fireSpeed:  13.3,
                        armor:      379,
                        movement:   62.2
                    }
                }
            },
            "DRACO": {},
            "URSA": {},
            "APUS": {},
            "SIRUS": {},
            "AQUILA": {},
            "LUPUS": {},
            "CORVUS": {},
            "LYNX": {},
            "S.LYNX": {},
            "VULPECULA": {},
            "S.VULPECULA": {},
            "LACERTA": {},
            "S.LACERTA": {},
            "SCORPIUS": {},
            "S.SCORPIUS": {},
            "PAVO": {},
            "S.PAVO": {},
            "MONOCEROS": {},
            "S.MONOCEROS": {}
        }
    })
    .factory('dataProvider', ['TANKS',
        function (TANKS) {
            var self  = this;
            self.getTankList = function () {
                return TANKS.tanks;
            };
            self.getTanksDetails = function (name) {
                return TANKS.tankDetails[name];
            };
            return self;
        }
    ]);