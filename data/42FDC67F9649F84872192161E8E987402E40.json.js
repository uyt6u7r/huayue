GS.dataCache['42FDC67F9649F84872192161E8E987402E40'] = {
    "uid": "42FDC67F9649F84872192161E8E987402E40",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "切换-ldy",
        "type": "data_record",
        "order": 6,
        "category": "commonEvents",
        "id": "42FDC67F9649F84872192161E8E987402E40",
        "isFolder": false,
        "data": {
            "name": "切换-ldy",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "EA06470D8140964F0749A8D76577A39B05E1",
                        "parameters": {
                            "values": []
                        }
                    },
                    "indent": 0,
                    "uid": "CF069B7852A465433259B2F3AD681BCA170A"
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 78
                    },
                    "indent": 0,
                    "uid": "92B2F94F9297614E656A0282BE022A777014"
                },
                {
                    "id": "gs.PlayMusic",
                    "params": {
                        "layer": 0,
                        "loop": 0,
                        "music": {
                            "name": "jingle10",
                            "volume": 100,
                            "playbackRate": 100
                        },
                        "fadeInDuration": 0,
                        "playTime": {
                            "min": 10,
                            "max": 30
                        },
                        "playRange": {
                            "start": 10,
                            "end": 20
                        },
                        "playType": 0,
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "music.volume": 1,
                            "music.playbackRate": 1,
                            "fadeInDuration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "19B3DC1C2872B6460168B9C6109AF5BA950E",
                    "expanded": false
                },
                {
                    "id": "vn.ChangeBackground",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "graphic": {
                            "name": "ldy过场",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "layer": 0,
                        "duration": 30,
                        "waitForCompletion": 1,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 0,
                        "loopVertical": 0,
                        "loopHorizontal": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 1,
                            "mask": {
                                "graphic": {
                                    "name": "Circle",
                                    "hue": 0,
                                    "opacity": 255,
                                    "blending": 0,
                                    "tone": {
                                        "red": 0,
                                        "green": 0,
                                        "blue": 0,
                                        "grey": 0
                                    }
                                },
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "origin": 1,
                            "zOrder": 1,
                            "blendMode": 1,
                            "viewport.type": 1,
                            "loopVertical": 1,
                            "loopHorizontal": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "65BE50406BF753441F3B3EE2BE499E354CD6",
                    "expanded": false
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 240
                    },
                    "indent": 0,
                    "uid": "4546F7714B3BA348886AA938D448FEC0BE40"
                }
            ],
            "index": "42FDC67F9649F84872192161E8E987402E40",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {},
        "parentId": "ROOT"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}