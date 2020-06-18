GS.dataCache['B2B9BFA042417843C6892B12280BAC349711'] = {
    "uid": "B2B9BFA042417843C6892B12280BAC349711",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "早去学校",
        "type": "vn.scene",
        "parentId": "B37034AD6366524C4D6A35C1C3AF3866C3C4",
        "chapterUid": "B37034AD6366524C4D6A35C1C3AF3866C3C4",
        "order": 1,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "A65738626ACFB946561BF2D122BCF54A33EC"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "School_Hallway1_1",
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
                    "duration": 0,
                    "waitForCompletion": 0,
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
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "FC6C9E2D4D271248488BD71668D9EFFE2706"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "DA161E753B02E84FEC29BD78C76C30198719"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "3FC2C70568A4984D389A6A69669295952B9D",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "1D01A09F3C2E2948CD8BF345C113122944D6"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "稀里糊涂地就这么早来了，不过仔细想想的话还真是没有地方可去啊......"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "8BE50A4F34537443B25A5025DF1A6D82BB2E",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "一大早一个人跑到空无一人的礼堂里等着实在显得太傻了，学生会的办公室在学校的另一边跑\n过去又太远了。想来想去，最终还是只能先来班里坐坐。各班级的钥匙是由校工保管着的，每\n天所有学生开始到校前就应该已经是打开的了"
                    },
                    "position": 0,
                    "characterId": "C8BD0FEE4BD0D846FB2AFDC44CE3EFE309B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5B49827C15FD7145F5787407B75CBBD958C4",
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "EA06470D8140964F0749A8D76577A39B05E1",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "4860DF2E51D2B741852978053D08580BEFD3"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "EFEF67A34566854EF2382768DFED9115B137"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "Classroom1_Morning1",
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
                    "duration": 0,
                    "waitForCompletion": 0,
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
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "6B0E57C42368E4442B39E9F8295DD407740B"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "BA06CFF9178B02430E482BF1B574E7609AEF"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "3FC2C70568A4984D389A6A69669295952B9D",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "B9DB5A654622314EB32BA738F64C65FC3EE2"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "早上好"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "4DC32F4373AAC240B86A65A7A0C52522C1FF",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "......所以说我为什么又开始对着空气寒暄了哦"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "125E78475C166647BC59A85641816F8C2890",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "ED1EAB9A8823734C656B5353B263904D48B5"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "6F386EB9142887457E199503EFC2ACF870EC",
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 258,
                        "y": 20
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "C37FF5975CBE384BD2990F945652C3FF2073"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "喂，什么叫“对着空气寒暄”哦，这么大的人看不见的嘛？"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3A2EE2B43126E6407A5BB413B8EF54017FAC",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "诶诶诶？！！原来你在的吗？？"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "8E427A039A50264C946BC5D4B4EAE35BAB42",
                "expanded": true
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "カフェオレオレオ",
                        "volume": "15",
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
                        "music.volume": 0,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "474B304F73BF2245AB6AC95462EF2C0BDA93"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "有必要那么惊讶吗......"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "FE314CAC3A3CE34F5E791B772C5763AD558A",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "可是明明是这个时间诶？"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F007B5F12C3E214D17682C820E4835A26B44",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "我抬头望了一眼教室前方挂着的表，时针刚刚走过7的位置"
                    },
                    "position": 0,
                    "characterId": "C8BD0FEE4BD0D846FB2AFDC44CE3EFE309B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1A3479F3572E934728894B08B33FB6FFE138",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "这么说的话你不也赶着这个时间来了？有什么好大惊小怪的"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "69D8A5640CAA8746874803049DE62475B00F",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "呃、我嘛......算是不知道怎么就稀里糊涂醒了，然后稀里糊涂地也就来了。这种情况估计三年也\n就这一次哦"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0C9B13DF79FE7146362B9E62B29696AE86B1",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "这么说的话我还算是挺幸运咯？"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "E4AD245D278A634CFB181D850A7B4DCBE0D5",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "那倒是不至于......"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "D5A572C63A74044729393821D08C7B414D23",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "话说，昨天晚上的短信......"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BB7D1B19181E6740FF287533D13B9BB766EB",
                "expanded": true
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 1,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "expressionId": "DD0BF7CB2CC624416F8A7761D09CD797CB1F",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "9D258F553632824B5C4A2C96051147235354"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "短信？"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "8B42F73379D5084CF0781D83E6FD0B092F86",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "喂，你记性没这么不好吧。就是那个让我红蓝二选一的那个，究竟是什么意思嘛？昨天我等你\n回信可是等到好晚哦"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0460B6AC719A134AFF8BFE177697B27A9F12",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "......"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "2DC2E8C881CDE74E0F99262049DEF1C82867",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "啊......你这么说的话好像有点印象了。好像是给你发了这么条短信来着"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "615FA8B15475964658393970066A7CDB0ACE",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "所以说你记性没这么不好吧喂......"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "67751D10862B73486818EC62C85CEBC380FF",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "......"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "72BE89785267F940812A2CF5EA572F342DEE",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "诶？所以呢？别突然无厘头一下就没下文了啊？"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "730F82DD6EF0254C758868F4647638663116",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "能有什么下文嘛......那种问题说白了不就是想到了之后随口一问那种程度嘛？和“你早上吃了点\n什么啊？”一个意思的东西嘛......"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "51E37815503A154F136B453581A428B4B561",
                "expanded": true
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 1,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "expressionId": "684056CE77AB2740F16A53732407EFCF0A4B",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "FD5E6944510285480B9867E679C77DAB3E81"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "顺便一提，我今天早上喝了一碗麦片粥，吃了一个苹果"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "66D044B36B0FA94ED35AA7F78F72A9E88432",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "......"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F55BDD591CF2A340EB893155CFEAEC8358E8",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "......谁问你这个了。还有，这么健康的感觉跟你的形象完全不搭嘛"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3850A5C332573148F30A1F8406DDB46A4C53",
                "expanded": true
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 1,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "expressionId": "6F386EB9142887457E199503EFC2ACF870EC",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "9C07BDA98CB08140C8986FA48A7F3AB4A89E"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "啧，怎么这话偏偏由你说出来就感觉那么别扭呢\n......那你倒是说说什么算是和我形象搭调的啊？"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B88D2AA929613443F15B9757C774B64EE849",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "你的话......"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "7F33A9405F4FF84203287419D60206D95781",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "583A5CEC36A43646382963B06C10918FDB11"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "睡过头了急匆匆吊着面包片出门在街头平地摔一跤......那种感觉的吧？"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F6F798EA8812C84E972A54E6F6CAAC143649",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "......"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "90BBB54C5E16A04D8A78A634ECBFA923F4E4",
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "duration": 60,
                    "waitForCompletion": 1,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "08868444518BA14C3A8AB8E6E23924003B74"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "6AFF4338486EA844E819216625BD144C7DB9"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "喂！别转身走人啊！好歹说点什么吧？吐槽也行啊！否则显得我多尬啊？"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "A574EEFE89CC9841E83B2B8358A8649CA4F1",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "87A1681C7E8873467A6955F16B71A3C3DD44"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "6F386EB9142887457E199503EFC2ACF870EC",
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 258,
                        "y": 20
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "8B23697C78CAE04F0958B5E0F267728B2C9C"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "你这不是也有点自知之明嘛......"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B37DBE07964DB540597971E700DE25FFF932",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "呃，这不是想着大清早的活跃下气氛来着......"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "EF161D2873FD85497F2A7CC0DB3BB7FCB9D8",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "——俗称“吃饱了撑的”。看来你早上伙食不错嘛"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1D1DB8FA2A021748408A2459DCBB9ACA2FCB",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "怎么早饭这话题还没过去哦......我话说在前啊，到现在为止我可是还什么都没吃呢"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "7F17623291BD454FBE492B013979AD5D5DE8",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "哈？"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3A0DF232807FE94CD959E1B31F51D55CABE7",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "喂，别用那种像是在审犯人的表情看着我。说到底就算早上真的不吃饭也不是什么大不了的事\n吧？"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "2A87F8A68C09504BB15AB8C194D683B6B260",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "明明这个时间就来学校了？"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "384A4E4F1D31594628890963313C8944CF55",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "怎么感觉这话听着这么耳熟"
                    },
                    "position": 0,
                    "characterId": "C8BD0FEE4BD0D846FB2AFDC44CE3EFE309B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B125CDBC4F3C054F3C98F981A4535BABCCBB",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "呃，这个......"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "EC5B6EE03181A84AAA4965760C6657C092FE",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "我扭头瞥了一眼墙上的时钟。不知不觉间分针已经指向了3"
                    },
                    "position": 0,
                    "characterId": "C8BD0FEE4BD0D846FB2AFDC44CE3EFE309B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "04CA000B5D0347426B190E257B7F52EBD669",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "（不好，不能再和她这么耗下去了。迟了的话就不好了......）"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "4D7306AD468D574A7C29C0B5546428E30593",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "嘛，总之是有各种各样的理由在里面啦。\n啊，我等下还有学生会的执勤工作，先到礼堂那边去了啊。你也注意点时间，等下可别迟了"
                    },
                    "position": 0,
                    "characterId": "7D506BC822959348602A5BF4A645A5EF0B0D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "DC9BB5F789E8374F2018B984D28B498967CA",
                "expanded": true
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "name": "footsteps_fast",
                        "volume": 100,
                        "playbackRate": 150
                    },
                    "musicEffect": 0,
                    "loop": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "sound.volume": 1,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C5AC60315E5DD04FF5688476C9CE7E694E97"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "我不顾韩依月的吐槽，丢下书包快步走出了教室"
                    },
                    "position": 0,
                    "characterId": "C8BD0FEE4BD0D846FB2AFDC44CE3EFE309B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "AAA9E6B54C7446484268EB36AF056FFB970D",
                "expanded": true
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 60,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "indent": 0,
                "uid": "D2AFD52C51F2F640241880360134382FB5A0"
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 1,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "expressionId": "DD0BF7CB2CC624416F8A7761D09CD797CB1F",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "1C84496D393974429C58FB47BB880989DC67"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "......"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5AA119827596214A064961E1A1ECB387ADC4",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "（明明不是还挺早的吗......）"
                    },
                    "position": 0,
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F73412AF384DD343528B779399A090BE0D08",
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "48C96E4831B6264BC14893D4DCF7C88E72D4",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "5DEB0C5B71E1F44AF3298503AAE116E8371B"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "42FDC67F9649F84872192161E8E987402E40",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "D13388F123884644AA2B4742FB007E207B11"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "CA7ADA1D9EDC894BAB99D4A8FA22B16A275A",
                        "name": "学校早"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "56F2ED575C039148476A391751FDE1D4D448"
            }
        ],
        "livePreviewDisabled": false,
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}