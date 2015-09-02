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
            },
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
                        calcTime:   60,
                        price:      2500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      4050,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      6550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      10600,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
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
                        calcTime:   60,
                        price:      2250,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      3650,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      5900,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      9550,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
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
                        calcTime:   60,
                        price:      2150,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      12,
                        movement:   0,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      3500,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      18,
                        movement:   0,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      5650,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      24,
                        movement:   0,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      9150,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      27,
                        movement:   0,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
                        price:      14800,
                        diamonds:   14
                    }
                ],
                "engine": [
                    {
                        level:      1,
                        movement:   0.6,
                        time:       '1m',
                        calcTime:   60,
                        price:      1500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        movement:   0.6,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      2450,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        movement:   0.9,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      3950,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        movement:   1.2,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      6400,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        movement:   1.5,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
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
                        calcTime:   60,
                        price:      600,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      6,
                        movement:   0.3,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      950,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      6,
                        movement:   0.6,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      1550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      9,
                        movement:   0.6,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      2500,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      9,
                        movement:   0.6,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
                        price:      4050,
                        diamonds:   14
                    }
                ],
                "max":  {
                    allMax: {
                        attack:     0,
                        fireSpeed:  0,
                        armor:      0,
                        movement:   0,
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
                        calcTime:   60,
                        price:      2500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '15m',
                        calcTime:   60* 15,
                        price:      4050,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      6550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      10600,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     3,
                        fireSpeed:  0,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
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
                        calcTime:   60,
                        price:      2250,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '15m',
                        calcTime:   60 *15,
                        price:      3650,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      5900,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      9550,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
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
                        calcTime:   60,
                        price:      2150,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      12,
                        movement:   0,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      3500,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      18,
                        movement:   0,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      5650,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      24,
                        movement:   0,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      9150,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      27,
                        movement:   0,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
                        price:      14800,
                        diamonds:   14
                    }
                ],
                "engine": [
                    {
                        level:      1,
                        movement:   0.6,
                        time:       '1m',
                        calcTime:   60,
                        price:      1500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        movement:   0.6,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      2450,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        movement:   0.9,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      3950,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        movement:   1.2,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      6400,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        movement:   1.5,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
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
                        calcTime:   60,
                        price:      600,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      6,
                        movement:   0.3,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      950,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      6,
                        movement:   0.6,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      1550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      9,
                        movement:   0.6,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      2500,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      9,
                        movement:   0.6,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
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
            "VULPECULA": {
                "turret": [
                    {
                        level:      1,
                        attack:     8,
                        fireSpeed:  0,
                        time:       '1m',
                        calcTime:   60,
                        price:      2500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     5,
                        fireSpeed:  0,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      4050,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     4,
                        fireSpeed:  0,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      6550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     4,
                        fireSpeed:  0,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      10600,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     5,
                        fireSpeed:  0,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
                        price:      17150,
                        diamonds:   14
                    },
                    {
                        level:      6,
                        attack:     4,
                        fireSpeed:  0,
                        time:       '8h',
                        calcTime:   60 * 480,
                        price:      23150,
                        diamonds:   18
                    },
                    {
                        level:      7,
                        attack:     9,
                        fireSpeed:  0,
                        time:       '10h 20m',
                        calcTime:   60 * 620,
                        price:      3120,
                        diamonds:   14
                    },
                    {
                        level:      8,
                        attack:     8,
                        fireSpeed:  0,
                        time:       '13h',
                        calcTime:   60 * 780,
                        price:      42200,
                        diamonds:   28
                    },
                    {
                        level:      9,
                        attack:     5,
                        fireSpeed:  0,
                        time:       '15h 30m',
                        calcTime:   60 * 930,
                        price:      56950,
                        diamonds:   33
                    },
                    {
                        level:      10,
                        attack:     8,
                        fireSpeed:  0,
                        time:       '18h 20m',
                        calcTime:   60 * 1100,
                        price:      76900,
                        diamonds:   39
                    },
                    {
                        level:      11,
                        attack:     9,
                        fireSpeed:  -0.1,
                        time:       '20h 50',
                        calcTime:   60 * 1250,
                        price:      96150,
                        diamonds:   44
                    },
                    {
                        level:      12,
                        attack:     9,
                        fireSpeed:  -0.1,
                        time:       '1d 10m',
                        calcTime:   60 * 1450,
                        price:      120200,
                        diamonds:   51
                    },
                    {
                        level:      13,
                        attack:     9,
                        fireSpeed:  -0.1,
                        time:       '1d 3h',
                        calcTime:   60 * 1620,
                        price:      150200,
                        diamonds:   70
                    },
                    {
                        level:      14,
                        attack:     8,
                        fireSpeed:  -0.1,
                        time:       '1d 6h',
                        calcTime:   60 * 1800,
                        price:      187800,
                        diamonds:   85
                    },
                    {
                        level:      15,
                        attack:     13,
                        fireSpeed:  -0.1,
                        time:       '1d 9h 20m',
                        calcTime:   60 * 2000,
                        price:      234750,
                        diamonds:   97
                    },
                    {
                        level:      16,
                        attack:     9,
                        fireSpeed:  -0.2,
                        time:       '1d 12h 40m',
                        calcTime:   60 * 2200,
                        price:      289950,
                        diamonds:   114
                    },
                    {
                        level:      17,
                        attack:     13,
                        fireSpeed:  -0.1,
                        time:       '1d 16h',
                        calcTime:   60 * 2400,
                        price:      310450,
                        diamonds:   130
                    },
                    {
                        level:      18,
                        attack:     13,
                        fireSpeed:  -0.2,
                        time:       '1d 19h 40m',
                        calcTime:   60 * 2620,
                        price:      357000,
                        diamonds:   149
                    },
                    {
                        level:      19,
                        attack:     13,
                        fireSpeed:  -0.2,
                        time:       '1d 23h',
                        calcTime:   60 * 2820,
                        price:      410550,
                        diamonds:   165
                    },
                    {
                        level:      20,
                        attack:     18,
                        fireSpeed:  -0.2,
                        time:       '2d 3h 40m',
                        calcTime:   60 * 3100,
                        price:      472150,
                        diamonds:   258
                    },
                    {
                        level:      21,
                        attack:     17,
                        fireSpeed:  -0.3,
                        time:       '2d 7h 30m',
                        calcTime:   60 * 3330,
                        price:      519350,
                        diamonds:   350
                    },
                    {
                        level:      22,
                        attack:     17,
                        fireSpeed:  -0.2,
                        time:       '2d 12h',
                        calcTime:   60 * 3600,
                        price:      571300,
                        diamonds:   548
                    },
                    {
                        level:      23,
                        attack:     18,
                        fireSpeed:  -0.4,
                        time:       '2d 15h 20m',
                        calcTime:   60 * 3800,
                        price:      628450,
                        diamonds:   538
                    },
                    {
                        level:      24,
                        attack:     21,
                        fireSpeed:  -0.3,
                        time:       '2d 22h',
                        calcTime:   60 * 4200,
                        price:      691300,
                        diamonds:   698
                    },
                    {
                        level:      25,
                        attack:     18,
                        fireSpeed:  -0.4,
                        time:       '3d 3h',
                        calcTime:   60 * 4500,
                        price:      760450,
                        diamonds:   818
                    },
                    {
                        level:      26,
                        attack:     17,
                        fireSpeed:  -0.3,
                        time:       '3d 8h',
                        calcTime:   60 * 4800,
                        price:      950550,
                        diamonds:   938
                    },
                    {
                        level:      27,
                        attack:     22,
                        fireSpeed:  -0.3,
                        time:       '3d 14h 40m',
                        calcTime:   60 * 5200,
                        price:      1188200,
                        diamonds:   1098
                    },
                    {
                        level:      28,
                        attack:     17,
                        fireSpeed:  -0.4,
                        time:       '3d 19h 40m',
                        calcTime:   60 * 3600,
                        price:      1485250,
                        diamonds:   1218
                    }
                ],
                "barrel": [
                    {
                        level:      1,
                        attack:     0,
                        fireSpeed:  0.2,
                        time:       '1m',
                        calcTime:   60,
                        price:      2250,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        attack:     0,
                        fireSpeed:  0.1,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      3650,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        attack:     0,
                        fireSpeed:  0.1,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      5900,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        attack:     0,
                        fireSpeed:  0.1,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      9550,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        attack:     0,
                        fireSpeed:  0.1,
                        time:       '3h 50m',
                        calcTime:   60 * 230,
                        price:      15450,
                        diamonds:   14
                    },
                    {
                        level:      6,
                        attack:     0,
                        fireSpeed:  0.2,
                        time:       '8h',
                        calcTime:   60 * 480,
                        price:      20850,
                        diamonds:   18
                    },
                    {
                        level:      7,
                        attack:     0,
                        fireSpeed:  0.2,
                        time:       '10h 20m',
                        calcTime:   60 * 620,
                        price:      28150,
                        diamonds:   23
                    },
                    {
                        level:      8,
                        attack:     0,
                        fireSpeed:  0.1,
                        time:       '13h',
                        calcTime:   60 * 780,
                        price:      38000,
                        diamonds:   28
                    },
                    {
                        level:      9,
                        attack:     0,
                        fireSpeed:  0.2,
                        time:       '15h 30m',
                        calcTime:   60 * 930,
                        price:      51300,
                        diamonds:   33
                    },
                    {
                        level:      10,
                        attack:     0,
                        fireSpeed:  0.2,
                        time:       '18h 20m',
                        calcTime:   60 * 1100,
                        price:      69250,
                        diamonds:   39
                    },
                    {
                        level:      11,
                        attack:     8,
                        fireSpeed:  0.2,
                        time:       '20h 50m',
                        calcTime:   60 * 1250,
                        price:      83100,
                        diamonds:   44
                    },
                    {
                        level:      12,
                        attack:     5,
                        fireSpeed:  0.3,
                        time:       '1d 10m',
                        calcTime:   60 * 1450,
                        price:      99700,
                        diamonds:   51
                    },
                    {
                        level:      13,
                        attack:     4,
                        fireSpeed:  0.2,
                        time:       '1d 3h',
                        calcTime:   60 * 1620,
                        price:      119650,
                        diamonds:   70
                    },
                    {
                        level:      14,
                        attack:     4,
                        fireSpeed:  0.3,
                        time:       '1d 6h',
                        calcTime:   60 * 1800,
                        price:      143600,
                        diamonds:   85
                    },
                    {
                        level:      15,
                        attack:     5,
                        fireSpeed:  0.3,
                        time:       '1d 9h 20m',
                        calcTime:   60 * 2000,
                        price:      172300,
                        diamonds:   97
                    },
                    {
                        level:      16,
                        attack:     0,
                        fireSpeed:  0.4,
                        time:       '1d 12h 40m',
                        calcTime:   60 * 2200,
                        price:      206750,
                        diamonds:   114
                    },
                    {
                        level:      17,
                        attack:     0,
                        fireSpeed:  0.3,
                        time:       '1d 16h',
                        calcTime:   60 * 2400,
                        price:      248100,
                        diamonds:   130
                    },
                    {
                        level:      18,
                        attack:     0,
                        fireSpeed:  0.5,
                        time:       '1d 19h 40m',
                        calcTime:   60 * 2620,
                        price:      297700,
                        diamonds:   149
                    },
                    {
                        level:      19,
                        attack:     0,
                        fireSpeed:  0.4,
                        time:       '1d 23h',
                        calcTime:   60 * 2820,
                        price:      357250,
                        diamonds:   165
                    },
                    {
                        level:      20,
                        attack:     0,
                        fireSpeed:  0.4,
                        time:       '2d 3h 40m',
                        calcTime:   60 * 3100,
                        price:      428700,
                        diamonds:   258
                    },
                    {
                        level:      21,
                        attack:     17,
                        fireSpeed:  0,
                        time:       '2d 7h 30m',
                        calcTime:   60 * 3330,
                        price:      471550,
                        diamonds:   350
                    },
                    {
                        level:      22,
                        attack:     17,
                        fireSpeed:  0,
                        time:       '2d 12h',
                        calcTime:   60 * 3600,
                        price:      518700,
                        diamonds:   458
                    },
                    {
                        level:      23,
                        attack:     18,
                        fireSpeed:  0,
                        time:       '2d 15h 20m',
                        calcTime:   60 * 3800,
                        price:      570550,
                        diamonds:   538
                    },
                    {
                        level:      24,
                        attack:     22,
                        fireSpeed:  0,
                        time:       '2d 22h',
                        calcTime:   60 * 4200,
                        price:      627600,
                        diamonds:   698
                    },
                    {
                        level:      25,
                        attack:     17,
                        fireSpeed:  0,
                        time:       '3d 3h',
                        calcTime:   60 * 4500,
                        price:      690350,
                        diamonds:   18184
                    },
                    {
                        level:      26,
                        attack:     17,
                        fireSpeed:  0.4,
                        time:       '3d 8h',
                        calcTime:   60 * 4800,
                        price:      862950,
                        diamonds:   938
                    },
                    {
                        level:      27,
                        attack:     22,
                        fireSpeed:  0.4,
                        time:       '3d 14h 40m',
                        calcTime:   60 * 5200,
                        price:      1078700,
                        diamonds:   1098
                    },
                    {
                        level:      28,
                        attack:     18,
                        fireSpeed:  0.4,
                        time:       '3d 19h 40m',
                        calcTime:   60 * 5500,
                        price:      1348400,
                        diamonds:   1218
                    }
                ],
                "armor": [
                    {
                        level:      1,
                        armor:      14,
                        movement:   0,
                        time:       '1m',
                        calcTime:   60,
                        price:      2150,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      14,
                        movement:   0,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      3500,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      21,
                        movement:   0,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      5650,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      28,
                        movement:   0,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      9150,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      31,
                        movement:   0,
                        time:       '3h 50m',
                        calcTime:   60 * 140,
                        price:      14800,
                        diamonds:   14
                    },
                    {
                        level:      6,
                        armor:      35,
                        movement:   -0.7,
                        time:       '8h',
                        calcTime:   60 * 480,
                        price:      20000,
                        diamonds:   18
                    },
                    {
                        level:      7,
                        armor:      35,
                        movement:   -1.5,
                        time:       '10h 20m',
                        calcTime:   60 * 620,
                        price:      27000,
                        diamonds:   23
                    },
                    {
                        level:      8,
                        armor:      39,
                        movement:   -1.5,
                        time:       '13h',
                        calcTime:   60 * 780,
                        price:      36450,
                        diamonds:   28
                    },
                    {
                        level:      9,
                        armor:      42,
                        movement:   -1.5,
                        time:       '15h 30m',
                        calcTime:   60 * 930,
                        price:      49200,
                        diamonds:   33
                    },
                    {
                        level:      10,
                        armor:      42,
                        movement:   -2.3,
                        time:       '18h 20m',
                        calcTime:   60 * 1100,
                        price:      66400,
                        diamonds:   39
                    },
                    {
                        level:      11,
                        armor:      42,
                        movement:   -0.7,
                        time:       '20h 50m',
                        calcTime:   60 * 1250,
                        price:      83000,
                        diamonds:   44
                    },
                    {
                        level:      12,
                        armor:      49,
                        movement:   -1.5,
                        time:       '1d 10m',
                        calcTime:   60 * 1450,
                        price:      103750,
                        diamonds:   51
                    },
                    {
                        level:      13,
                        armor:      45,
                        movement:   -1.5,
                        time:       '1d 3h',
                        calcTime:   60 * 1620,
                        price:      129700,
                        diamonds:   70
                    },
                    {
                        level:      14,
                        armor:      53,
                        movement:   -1.5,
                        time:       '1d 6h',
                        calcTime:   60 * 1800,
                        price:      162150,
                        diamonds:   85
                    },
                    {
                        level:      15,
                        armor:      56,
                        movement:   -2.3,
                        time:       '1d 9h 20m',
                        calcTime:   60 * 2000,
                        price:      202300,
                        diamonds:   97
                    },
                    {
                        level:      16,
                        armor:      59,
                        movement:   -0.7,
                        time:       '1d 12h 40m',
                        calcTime:   60 * 2200,
                        price:      233100,
                        diamonds:   114
                    },
                    {
                        level:      17,
                        armor:      67,
                        movement:   -1.5,
                        time:       '1d 16h',
                        calcTime:   60 * 2400,
                        price:      268050,
                        diamonds:   130
                    },
                    {
                        level:      18,
                        armor:      70,
                        movement:   -1.5,
                        time:       '1d 19h 40m',
                        calcTime:   60 * 2620,
                        price:      308250,
                        diamonds:   149
                    },
                    {
                        level:      19,
                        armor:      77,
                        movement:   -1.5,
                        time:       '1d 23h',
                        calcTime:   60 * 2820,
                        price:      354500,
                        diamonds:   165
                    },
                    {
                        level:      20,
                        armor:      84,
                        movement:   -2.3,
                        time:       '2d 3h 40m',
                        calcTime:   60 * 3100,
                        price:      407650,
                        diamonds:   258
                    },
                    {
                        level:      21,
                        armor:      87,
                        movement:   0,
                        time:       '2d 7h 30m',
                        calcTime:   60 * 3330,
                        price:      448400,
                        diamonds:   350
                    },
                    {
                        level:      22,
                        armor:      95,
                        movement:   0,
                        time:       '2d 12h',
                        calcTime:   60 * 3600,
                        price:      493250,
                        diamonds:   458
                    },
                    {
                        level:      23,
                        armor:      101,
                        movement:   0,
                        time:       '2d 15h 20m',
                        calcTime:   60 * 3800,
                        price:      542600,
                        diamonds:   538
                    },
                    {
                        level:      24,
                        armor:      105,
                        movement:   0,
                        time:       '2d 22h',
                        calcTime:   60 * 4200,
                        price:      595850,
                        diamonds:   698
                    },
                    {
                        level:      25,
                        armor:      109,
                        movement:   0,
                        time:       '3d 3h',
                        calcTime:   60 * 4500,
                        price:      656550,
                        diamonds:   818
                    },
                    {
                        level:      26,
                        armor:      87,
                        movement:   -0.7,
                        time:       '3d 8h',
                        calcTime:   60 * 4800,
                        price:      820700,
                        diamonds:   938
                    },
                    {
                        level:      27,
                        armor:      95,
                        movement:   -0.8,
                        time:       '3d 14h 40m',
                        calcTime:   60 * 5200,
                        price:      1025900,
                        diamonds:   1098
                    },
                    {
                        level:      28,
                        armor:      101,
                        movement:   -0.7,
                        time:       '3d 19h 40m',
                        calcTime:   60 * 5500,
                        price:      1282400,
                        diamonds:   1218
                    }
                ],
                "engine": [
                    {
                        level:      1,
                        movement:   0.3,
                        time:       '1m',
                        calcTime:   60,
                        price:      1500,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        movement:   0.3,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      2450,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        movement:   0.4,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      3950,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        movement:   0.6,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      6400,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        movement:   0.8,
                        time:       '3h 50m',
                        calcTime:   60 * 140,
                        price:      10350,
                        diamonds:   14
                    },
                    {
                        level:      6,
                        movement:   0.7,
                        time:       '8h',
                        calcTime:   60 * 480,
                        price:      13950,
                        diamonds:   18
                    },
                    {
                        level:      7,
                        movement:   0.8,
                        time:       '10h 20m',
                        calcTime:   60 * 620,
                        price:      18850,
                        diamonds:   23
                    },
                    {
                        level:      8,
                        movement:   0.7,
                        time:       '13h',
                        calcTime:   60 * 780,
                        price:      25450,
                        diamonds:   28
                    },
                    {
                        level:      9,
                        movement:   0.9,
                        time:       '15h 30m',
                        calcTime:   60 * 930,
                        price:      34350,
                        diamonds:   33
                    },
                    {
                        level:      10,
                        movement:   0.9,
                        time:       '18h 20m',
                        calcTime:   60 * 1100,
                        price:      46350,
                        diamonds:   39
                    },
                    {
                        level:      11,
                        movement:   0.9,
                        time:       '20h 50m',
                        calcTime:   60 * 1250,
                        price:      57950,
                        diamonds:   44
                    },
                    {
                        level:      12,
                        movement:   1.1,
                        time:       '1d 10m',
                        calcTime:   60 * 1450,
                        price:      72450,
                        diamonds:   51
                    },
                    {
                        level:      13,
                        movement:   1,
                        time:       '1d 3h',
                        calcTime:   60 * 1620,
                        price:      90550,
                        diamonds:   70
                    },
                    {
                        level:      14,
                        movement:   1.2,
                        time:       '1d 6h',
                        calcTime:   60 * 1800,
                        price:      113200,
                        diamonds:   85
                    },
                    {
                        level:      15,
                        movement:   1.2,
                        time:       '1d 9h 20m',
                        calcTime:   60 * 2000,
                        price:      135850,
                        diamonds:   97
                    },
                    {
                        level:      16,
                        movement:   1.2,
                        time:       '1d 12h 40m',
                        calcTime:   60 * 2200,
                        price:      163000,
                        diamonds:   114
                    },
                    {
                        level:      17,
                        movement:   1.5,
                        time:       '1d 16h',
                        calcTime:   60 * 2400,
                        price:      195600,
                        diamonds:   130
                    },
                    {
                        level:      18,
                        movement:   1.5,
                        time:       '1d 19h 40m',
                        calcTime:   60 * 2620,
                        price:      234700,
                        diamonds:   149
                    },
                    {
                        level:      19,
                        movement:   1.7,
                        time:       '1d 23h',
                        calcTime:   60 * 2820,
                        price:      281650,
                        diamonds:   165
                    },
                    {
                        level:      20,
                        movement:   1.6,
                        time:       '2d 3h 40m',
                        calcTime:   60 * 3100,
                        price:      338000,
                        diamonds:   258
                    },
                    {
                        level:      21,
                        movement:   2,
                        time:       '2d 7h 30m',
                        calcTime:   60 * 3330,
                        price:      371800,
                        diamonds:   350
                    },
                    {
                        level:      22,
                        movement:   2.1,
                        time:       '2d 12h',
                        calcTime:   60 * 3600,
                        price:      409000,
                        diamonds:   458
                    },
                    {
                        level:      23,
                        movement:   2.1,
                        time:       '2d 15h 20m',
                        calcTime:   60 * 3800,
                        price:      449900,
                        diamonds:   538
                    },
                    {
                        level:      24,
                        movement:   2.2,
                        time:       '2d 22h',
                        calcTime:   60 * 4200,
                        price:      494900,
                        diamonds:   698
                    },
                    {
                        level:      25,
                        movement:   2.3,
                        time:       '3d 3h',
                        calcTime:   60 * 4500,
                        price:      544400,
                        diamonds:   818
                    },
                    {
                        level:      26,
                        movement:   1.2,
                        time:       '3d 8h',
                        calcTime:   60 * 4800,
                        price:      680500,
                        diamonds:   938
                    },
                    {
                        level:      27,
                        movement:   1.2,
                        time:       '3d 14h 40m',
                        calcTime:   60 * 5200,
                        price:      850650,
                        diamonds:   1098
                    },
                    {
                        level:      28,
                        movement:   1.2,
                        time:       '3d 19h 40m',
                        calcTime:   60 * 5500,
                        price:      1063300,
                        diamonds:   1218
                    }
                ],
                "trucks": [
                    {
                        level:      1,
                        armor:      7,
                        movement:   0.1,
                        time:       '1m',
                        calcTime:   60,
                        price:      600,
                        diamonds:   1
                    },
                    {
                        level:      2,
                        armor:      7,
                        movement:   0.2,
                        time:       '15m',
                        calcTime:   60 * 15,
                        price:      950,
                        diamonds:   1
                    },
                    {
                        level:      3,
                        armor:      7,
                        movement:   0.3,
                        time:       '1h',
                        calcTime:   60 * 60,
                        price:      1550,
                        diamonds:   4
                    },
                    {
                        level:      4,
                        armor:      10,
                        movement:   0.3,
                        time:       '3h',
                        calcTime:   60 * 180,
                        price:      2500,
                        diamonds:   8
                    },
                    {
                        level:      5,
                        armor:      11,
                        movement:   0.3,
                        time:       '3h 50m',
                        calcTime:   60 * 140,
                        price:      4050,
                        diamonds:   14
                    },
                    {
                        level:      6,
                        armor:      10,
                        movement:   0.3,
                        time:       '8h',
                        calcTime:   60 * 480,
                        price:      6100,
                        diamonds:   18
                    },
                    {
                        level:      7,
                        armor:      14,
                        movement:   0.4,
                        time:       '10h 20m',
                        calcTime:   60 * 620,
                        price:      9150,
                        diamonds:   23
                    },
                    {
                        level:      8,
                        armor:      11,
                        movement:   0.3,
                        time:       '13h',
                        calcTime:   60 * 780,
                        price:      13750,
                        diamonds:   28
                    },
                    {
                        level:      9,
                        armor:      14,
                        movement:   0.5,
                        time:       '15h 30m',
                        calcTime:   60 * 930,
                        price:      20650,
                        diamonds:   33
                    },
                    {
                        level:      10,
                        armor:      14,
                        movement:   0.4,
                        time:       '18h 20m',
                        calcTime:   60 * 1100,
                        price:      31000,
                        diamonds:   39
                    },
                    {
                        level:      11,
                        armor:      14,
                        movement:   0.5,
                        time:       '20h 50m',
                        calcTime:   60 * 1250,
                        price:      40300,
                        diamonds:   44
                    },
                    {
                        level:      12,
                        armor:      14,
                        movement:   0.4,
                        time:       '1d 10m',
                        calcTime:   60 * 1450,
                        price:      52400,
                        diamonds:   51
                    },
                    {
                        level:      13,
                        armor:      17,
                        movement:   0.5,
                        time:       '1d 3h',
                        calcTime:   60 * 1620,
                        price:      68100,
                        diamonds:   70
                    },
                    {
                        level:      14,
                        armor:      18,
                        movement:   0.6,
                        time:       '1d 6h',
                        calcTime:   60 * 1800,
                        price:      88550,
                        diamonds:   85
                    },
                    {
                        level:      15,
                        armor:      17,
                        movement:   0.6,
                        time:       '1d 9h 20m',
                        calcTime:   60 * 2000,
                        price:      115100,
                        diamonds:   97
                    },
                    {
                        level:      16,
                        armor:      21,
                        movement:   0.6,
                        time:       '1d 12h 40m',
                        calcTime:   60 * 2200,
                        price:      143900,
                        diamonds:   114
                    },
                    {
                        level:      17,
                        armor:      21,
                        movement:   0.6,
                        time:       '1d 16h',
                        calcTime:   60 * 2400,
                        price:      179900,
                        diamonds:   130
                    },
                    {
                        level:      18,
                        armor:      25,
                        movement:   0.7,
                        time:       '1d 19h 40m',
                        calcTime:   60 * 2620,
                        price:      224900,
                        diamonds:   149
                    },
                    {
                        level:      19,
                        armor:      24,
                        movement:   0.8,
                        time:       '1d 23h',
                        calcTime:   60 * 2820,
                        price:      281150,
                        diamonds:   165
                    },
                    {
                        level:      20,
                        armor:      28,
                        movement:   0.9,
                        time:       '2d 3h 40m',
                        calcTime:   60 * 3100,
                        price:      351450,
                        diamonds:   258
                    },
                    {
                        level:      21,
                        armor:      28,
                        movement:   0.9,
                        time:       '2d 7h 30m',
                        calcTime:   60 * 3330,
                        price:      421750,
                        diamonds:   350
                    },
                    {
                        level:      22,
                        armor:      32,
                        movement:   0.9,
                        time:       '2d 12h',
                        calcTime:   60 * 3600,
                        price:      506100,
                        diamonds:   458
                    },
                    {
                        level:      23,
                        armor:      35,
                        movement:   1,
                        time:       '2d 15h 20m',
                        calcTime:   60 * 3800,
                        price:      607300,
                        diamonds:   538
                    },
                    {
                        level:      24,
                        armor:      31,
                        movement:   1.2,
                        time:       '2d 22h',
                        calcTime:   60 * 4200,
                        price:      728750,
                        diamonds:   698
                    },
                    {
                        level:      25,
                        armor:      35,
                        movement:   1.1,
                        time:       '3d 3h',
                        calcTime:   60 * 4500,
                        price:      874500,
                        diamonds:   818
                    },
                    {
                        level:      26,
                        armor:      28,
                        movement:   0.9,
                        time:       '3d 8h',
                        calcTime:   60 * 4800,
                        price:      966125,
                        diamonds:   938
                    },
                    {
                        level:      27,
                        armor:      32,
                        movement:   0.9,
                        time:       '3d 14h 40m',
                        calcTime:   60 * 5200,
                        price:      1078950,
                        diamonds:   1098
                    },
                    {
                        level:      28,
                        armor:      35,
                        movement:   1,
                        time:       '3d 19h 40m',
                        calcTime:   60 * 5500,
                        price:      1191755,
                        diamonds:   1218
                    }
                ],
                "max":  {
                    allMax: {
                        attack:     625,
                        fireSpeed:  11.5,
                        armor:      3043,
                        movement:   86.1,
                        levels:     28,
                        totalPrice: 0,
                        totalTime:  0,
                        days:       0
                    },
                    maxMovementFireSpeed: {
                        attack:     364,
                        fireSpeed:  15.4,
                        armor:      1468,
                        movement:   110.8
                    }
                }
            },
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