GS.dataCache['801930557E436245B68987B1C80F81F5C198'] = {
    "uid": "801930557E436245B68987B1C80F81F5C198",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "第三天放学后",
        "type": "vn.scene",
        "parentId": "B37034AD6366524C4D6A35C1C3AF3866C3C4",
        "chapterUid": "B37034AD6366524C4D6A35C1C3AF3866C3C4",
        "order": 5,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "3ADFF3570C13064F37882BC7807D62169415"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "会议室-2-720",
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
                "uid": "73819A40105AA44B571A05E8FC4998B7FEC2"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "961C078D5DE00648237BD0274D1A2401DDE5"
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
                "uid": "61CF6DCC99FC9247AB6B3F42E13659D1FFF7"
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
                        "defaultText": "我说......学姐，能、能别盯着我看了吗，这搞得我浑身发毛的......"
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
                "uid": "CFD6D4FF32D3F541473B732494DFEAD0CD22",
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "BFDC691D124075452D187A86604A885F3864",
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
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
                        "x": 250,
                        "y": 0
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
                "uid": "1F76B10264D547479D1AB4F1D1918C233C2B"
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "Brewing Coffee",
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
                "uid": "CF41E96C153F584EE40899057D38E021C1E8"
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1E34B9C07E77814169892693EA334A4AA244",
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
                        "defaultText": "学、学姐？"
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
                "uid": "EAD58AC23B893249255838113344E9752F2B",
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
                        "defaultText": "这位同学，这边马上有会议要开，可以麻烦非学生会成员先暂时利用图书馆下面的楼层去学\n习嘛？谢谢"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "2F1EDA5F07D2694A25885EF07B8410D46D56",
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
                        "defaultText": "喂！不带这样的啊！不就是换了身衣服嘛？还能认不出我来了？"
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
                "uid": "D3280CF9220BF84B6C8B4B33CA7F1C763502",
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
                        "defaultText": "况且说到底，一个个的都有必要这么反应过激嘛......\n我话可说在前头啊，学姐你这种反应我都看了一下午了，没什么新鲜感了已经"
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
                "uid": "1FFF20665CF6B5497779B0E309A1DB8D5833",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "7D5EED8226AD314D83291551613800A478B5",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "8376B80A3E67F644478896983F21058A8DDB"
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
                        "defaultText": "哈哈，看来大家都还是很了解你的嘛。突然换了一身这么潮的打扮，一时间还真是有点反应不\n过来呢"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BBCD4F1E6BC01743881BF0629A0AA3A3FDD2",
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
                        "defaultText": "我看你早上的时候还不是这样穿的呢。中午的时候发生了什么嘛？看起来像是又和哪个女生制\n造了点美好的小回忆的样子呢"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0B4A359A17F1694BEB58E70211AC08F432D8",
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
                        "defaultText": "槽点太多了都不知道该从哪里吐了......"
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
                "uid": "413C6D8D31EFC84BBE796CC0DB766BEE1B73",
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
                        "defaultText": "不要擅自觉得就是和女生好嘛......况且什么叫“又”和哪个女生制造美好小回忆啊。这听上去多\n让人起误会啊"
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
                "uid": "E7B5B4345D4077414F7B9D46A8D7B8DB966A",
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
                        "defaultText": "哦？难道说不是这样的嘛？"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C7E8966E4F61D541B189A9186F130002FC60",
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
                "uid": "B36CBAE41CBCF646DD9A2B756D6CE5ADB3C1",
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
                        "defaultText": "好吧，严谨来说确实是遇到了之前的同学啦，不过这不是重点好嘛......"
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
                "uid": "D4E5C8104892C842597BD8B7A5629B5B97DD",
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
                        "defaultText": "我更愿将其称之为“一杯咖啡引发的惊天血案”"
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
                "uid": "C02432A25BC13141477937A7E1CFDFAE7DF7",
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
                        "defaultText": "哇哦，感觉是场不错的的邂逅呢。那个女生是个什么样的人呀？是我们学校的嘛？"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "D392C903237CC1484548E2A23EF90C9450B7",
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
                        "defaultText": "学姐！我可不记得你什么时候也变得这么八卦了来着......"
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
                "uid": "EF9AA17F4B23E04C118BACA2B7F7BAE0DF9D",
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
                        "defaultText": "唉？有什么不好的嘛？凭我们俩这关系，你说是吧？有什么这方面的消息当然会想着想要打听\n清楚啦。毕竟之后可就全都指望着能干的学弟了，生活动态还是要掌握一下的嘛"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "E2DCDEB914D14840B2289432E577681963EF",
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
                "uid": "C41FE2345476634B005804D640EBA8591117",
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
                        "defaultText": "当然，如果你有什么想要来八卦我的，我也是举双手欢迎哦~"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "E82E629C31067644FF9B4EE7CD2A9D319867",
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
                        "defaultText": "正常来说举双手那叫投降吧......"
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
                "uid": "314EB45A225E824E962A77F59B2EFFFA5C16",
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
                        "defaultText": "我假装用手掐紧眉头以表达出吐槽之心"
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
                "uid": "927AE5997665314F7848D7476FBE4F34421E",
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
                        "defaultText": "不过......有什么想要八卦学姐的啊，不知道为什么听上去有点小心动呢"
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
                "uid": "5BCAF1F75904C14A54181ED21314DCE39DF1",
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
                        "defaultText": "感觉......似乎趁现在这机会确实可以稍微打探点什么的样子？"
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
                "uid": "BFB73B9167DD624DA829DFF8D442BB1BD5B9",
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
                "uid": "F69D09771BFFF241DD2B8FC6A5344AC60871"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "喜欢的人",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "学姐......有喜欢的人了吗？"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "D3A051461BB5374A2A593B08B033C8449FAA"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "看法",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "学姐......对我究竟是什么看法啊？"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "47F1896E1E9DF348145A85F9719862882D39"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "算了",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "还是算了吧"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "A51712C22CBAB644D95A59D7B57CACAA474B"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "CD8D040F26F46440E67888044AD7C8F192CB"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "喜欢的人"
                },
                "indent": 0,
                "uid": "0034438364F8E843CE0BBFC304C505D082F8"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "黄亦歌hidden end",
                        "index": 25,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 1,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E3ADE3878CF7964722281CF7F33DB2ADA5C1"
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
                "uid": "222CCF5573D0D84F4F0817256FF96928E37C"
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
                        "defaultText": "学姐......有喜欢的人了吗？"
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
                "uid": "789CF3FE9EB5E3412E896516B1BEE2716A23",
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
                        "defaultText": "我小心翼翼地开口问道"
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
                "uid": "8480BF8666398647ED8A85655191EEC0284D",
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
                        "defaultText": "诶~怎么事到如今了才突然想起来要问这个啊？"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "2B5AB5CE979E994804293B264FC3543FC291",
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
                        "defaultText": "莫非是突然觉醒了对学姐的爱慕之心嘛？"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "D5D465DE6E46C14C401AE0614DA509517A8A",
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
                        "defaultText": "不是，我认真在问的......"
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
                "uid": "0E23485F3D27A6418A0880E66728220AF96C",
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
                        "defaultText": "你看啊，平时就觉得好像时不时就能听你说我办公室恋情什么的是吧，然后感觉对于恋爱啦这\n类话题也挺来劲的，就觉得是不是......有了喜欢的人之类的"
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
                "uid": "894C5BF945A63045CE59B091E948ED5F0F32",
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
                        "defaultText": "嘿~原来你是这样想的啊"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "9007C5007A3F434BE58BE4A7D52AF542C1DA",
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
                        "defaultText": "嗯......该怎么说才好呢？硬要说的话应该算是有......吧？不过现在这个阶段对于双方而言都不是\n很合适啦，所以在彻底安定下来之前都不会去想这方面的事情的"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F4D33BE64263A64A8D19B4389DF9A780CCC3",
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
                        "defaultText": "毕竟，这种事情一定要对双方都负责才行呀"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "7020504675EE22457F3B74343DA3BB94EC80",
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
                        "defaultText": "......原来是这样啊"
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
                "uid": "669E9F504BA876422D3891D50577888E500F",
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
                        "defaultText": "我随口应和着，不知为何心里却隐隐感受到了一丝失落感"
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
                "uid": "96CD74D760F5F644F83B44E58DCF1903BB6C",
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
                        "defaultText": "原来学姐有喜欢的人啊......那总有一天会和那个人走到一起。到了那个时候是不是我和她就不能\n够再保持着像现在这样亲密的关系了呢？与学姐走到现在这样来之不易的距离是我眼下最为珍\n视的感情之一，如果真的以那样的方式收场，或许很长一段时间都会轻易无法释怀"
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
                "uid": "208BE2E9114AD6482A4B0555DDD8620F077D",
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
                        "defaultText": "如果那个人......是我的话"
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
                "uid": "511D9B377C9241480E0BC7723FF7D18DA854",
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
                        "defaultText": "脑海中这样的想法一闪而过。不不不，再怎么说应该也没可能。在学姐看来，我或许只是一个\n会不断出现失误，需要时刻操心的小男孩吧？"
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
                "uid": "6C2FBEC28C11F6449A9A5909B7C78D8C1F51",
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
                        "defaultText": "不行不行，不能再这样乱七八糟地想下去了。眼下最为重要的是在照顾好自己生活学习的同时\n把手头的工作努力做好。如果能够在这次的活动中取得相当的成绩，也许会让学姐在心中更加\n把我当做一个可靠的伙伴来看待吧"
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
                "uid": "2289DBDF2FA2914DE01852772A7B1739D007",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束-0",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "9A0371837E62E243795BD9E5EB93F2256802"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "看法"
                },
                "indent": 0,
                "uid": "8A93EA622D9E00462968B546FC5142B0ED87"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "黄亦歌hidden end",
                        "index": 25,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 1,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "2E197DAB8F69C146B80983784894CA2B7104"
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
                "uid": "59774CBF018C274C156BB8A6F1239D6C598E"
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
                        "defaultText": "学姐......对我究竟是什么看法啊？"
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
                "uid": "A8FA1BD73461A345C05AA1A48D2FC91869C7",
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
                        "defaultText": "我小心翼翼地开口问道"
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
                "uid": "63B42F1C84A5E2471D89C415729096894B3E",
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
                        "defaultText": "诶~怎么事到如今了还想起来要问这个啊？或者说事到如今了还真的有必要来问这个吗？"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "78230ACF4A138547C408A7F6064EA2F5481C",
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
                        "defaultText": "呃......怎么说呢，突然想到的？就，我这个人还挺在意别人对我的看法的吗，所以......"
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
                "uid": "4DBCA73C2A77344DD61969185AA690F50918",
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
                        "defaultText": "那，你觉得我会对你是个什么样的看法呢~"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "D405E1B568EC174BD878FBF041093FC5DA8E",
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
                        "defaultText": "没想到学姐居然反过来把问题丢还给了我。该怎么回答才好呢？"
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
                "uid": "9AA190CE2E5C5548208816554FD4E864BC24",
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
                "uid": "65951C5A550A71409539A5D7DCA050B8EE1E"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "可靠的伙伴",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "可靠的伙伴？"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "FE99E8E68428264B8A5960F53BB321C33A9A"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "信赖的朋友",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "信赖的朋友？"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "4873E3B05FE6244151288CF24736AFAE1121"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "关心的学弟",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "关心的学弟？"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "D874EB8641517848B37A1168C3DEFD66EAB0"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "5A5E244D15A565435E0AC163F39645557CDC"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "可靠的伙伴"
                },
                "indent": 0,
                "uid": "65CC1828287C884A06581049418AB3AE8D60"
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
                "uid": "A904801977475346C4689E29E8AF8C214BAA"
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
                        "defaultText": "可靠的伙伴？"
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
                "uid": "FE1D05C25C1EC14ADB3961A5C6AAC14DA6B1",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束0-1",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "75607F800183684837191CA32C4406A30D07"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "信赖的朋友"
                },
                "indent": 0,
                "uid": "8B5E5164129084446F38D3262E009038153D"
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
                "uid": "C86538869D4B4843CC4B00D19141BEBAEC18"
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
                        "defaultText": "信赖的朋友？"
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
                "uid": "7F109621848106412988AD294EF0F0721053",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束0-1",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "0198BAD23198D74DAE293105A7EC212519D0"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "关心的学弟"
                },
                "indent": 0,
                "uid": "FA844A0D0B8218488208F1F130ECD4E29547"
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
                "uid": "0BB30D2877267748D779F9E2C71E4D7352E1"
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
                        "defaultText": "关心的学弟？"
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
                "uid": "83669268381FB1468D5BBB46C3E962B6608A",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束0-1",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "0B7AEC208B4E724F7A1A0DE39B16B05D33C6"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "收束0-1"
                },
                "indent": 0,
                "uid": "17A4FDCA6615B74317182C077B13630F3F2B"
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
                        "defaultText": "嗯......说不定就是那样吧"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "E33EEC5B5F7BB74BA5183A887AAA4F270381",
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
                        "defaultText": "呃......总感觉这回答有点应付呢"
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
                "uid": "1DAA83AC2FF5B4436968C344C6E0271495AC",
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
                        "defaultText": "哈哈，具体是怎么样的可能也很难用简单几句话来概括的嘛"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "D5D44A5667F0814AC18A2812A8F70916F339",
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
                        "defaultText": "学姐微笑着打了哈哈。或许在她心中，我还够不上以上的任何一条吧。想到这儿让我感到内心\n中隐隐约约有些失落"
                    },
                    "position": 0,
                    "characterId": "C8BD0FEE4BD0D846FB2AFDC44CE3EFE309B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F3DC29626C829346AC3BAE22BF6E6F667858",
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
                        "defaultText": "学姐很快就要毕业离开学校。我不希望在学生会这一条纽带断开之后我和她之间的关系也会相\n应的淡薄下来。与学姐走到现在这样来之不易的距离是我眼下最为珍视的感情之一，如果真的\n以那样的方式收场，或许很长一段时间都会轻易无法释怀"
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
                "uid": "6FCF654472ABC549D6692FE862FC617A10F4",
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
                "uid": "D4CE590164D1D4459A79798660E7585235DF",
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
                        "defaultText": "不行不行，不能再这样乱七八糟地想下去了。眼下最为重要的是在照顾好自己生活学习的同时\n把手头的工作努力做好。如果能够在这次的活动中取得相当的成绩，也许会让学姐在心中对我\n的看法有所提升吧"
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
                "uid": "951197D530BDA24B56294769E0EC88B2DDD1",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束-0",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "300DDA765DE9464F467916A48CD36044A1BF"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "算了"
                },
                "indent": 0,
                "uid": "73FB980229422741DC7B43870BB865FBF991"
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
                "uid": "7D9080F293CED4450B49E0769244C7A2B3E5"
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
                        "defaultText": "嘛......还是算了。太过于八卦的男生可能会显得不够大气。我可不想因此影响到学姐对我的看法"
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
                "uid": "83CB175E9E9B64450339A68002306EFB0FDB",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束-0",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "B760EE2E841B7545FC78B3D6C05B516A138A"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "收束-0"
                },
                "indent": 0,
                "uid": "3E345A741417B24BEC8A03632CCE5FC87B55"
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
                        "defaultText": "好啦好啦，人也都快要来了，还是先暂时回到工作状态之中吧"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "495115B919192244778A0EF1FDCF79693E26",
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
                        "defaultText": "嗯"
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
                "uid": "161B320A1CE0F14EFA080438FC2DAA106283",
                "expanded": true
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 120,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "indent": 0,
                "uid": "6572154E9B54704706598AA3A29679A7E7DA"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
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
                "uid": "B7920C2E232E634B9E7B3916D3BA09966A1C"
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
                        "defaultText": "三三两两的学生会干部陆续走进了会议室，亦歌学姐也从我身边站起身来，走回到最前方的幕\n布前开始做着各样的安排"
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
                "uid": "B2B8CB3B1819934BDF89D348D255FC765EF9",
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
                        "defaultText": "这是我作为学生会成员会在这里参与的最后一场会议了。从明天开始，我的工作重心就要转移\n到组委会那边去了。希望......亦歌学姐她们也能够一切顺利吧"
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
                "uid": "FF6B60E39FE65441501A2FB95B5BADF987F5",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "44FE99EF79C7A4450D3AF84527A98D64D6E3"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C357997F28CA1646F1897D360DD9B05634CD",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "A32AFCB95DA7694E797A44060377D0882C9C"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "57A8C5F543A92544360B31020F5BCFF815AA"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "City2_Night",
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
                "uid": "F061110A8197C2402F6B3AB590E3BAFF0395"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "87B47B270AE014466E1BF1F16626B195FA0F"
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
                "uid": "8F79B83A7F2F734AB90BED64AFA42D001715"
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
                        "defaultText": "在学校一直待到要清校的时间被赶出来，这种事我还以为幼儿园之后再也不会发生了呢......"
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
                "uid": "2A923B573670A64FC509ADF51DBA9F8AE48F",
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
                        "defaultText": "从学校走出，天色已经变得完全漆黑。学校的附近没有太多的店铺，为数不多的灯光使得整个\n街道显得格外冷清"
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
                "uid": "FE9E643E6293D641536BF9B29B5BB07C28C3",
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "BFDC691D124075452D187A86604A885F3864",
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
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
                        "x": 250,
                        "y": 0
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
                "uid": "50D8A04215D4B449FA7A1266A07983261138"
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "雨雫",
                        "volume": 15,
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
                "uid": "B440E93E8EB56649BB1903C394B63E6E1014"
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
                        "defaultText": "说的也是呢......真没想到不知不觉都已经到了这个时间了"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5DDFF9AB3F23974977499B23DB5A45F49308",
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
                        "defaultText": "学姐你真的太拼啦......其实有些东西也不是非要今天就必须要解决的嘛"
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
                "uid": "197BDD966F35854D699863816B363F56802F",
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
                        "defaultText": "那可不行。把今天的事情留到明天的话，明天的事情又该怎么办呢？还是今日事今日毕会比较\n好哦"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "E56305271818624F470A9CF52494ABCA8FA2",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "3D45F93B32A5D3432F08C140B50B958034A7"
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
                        "defaultText": "......不过话是这么说啦，其实你完全没有必要也留下来的呀。这下反而搞得我有点不好意思了，\n连累你也要这么晚才能回家去。晚饭是不是也耽误了？家里那边也会担心的吧"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "283D84B5546F7547D5584E57B788E033FDA1",
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
                        "defaultText": "没有没有，再怎么说也不能把你一个人留下来处理那么多问题吧。再怎么说我也是学生会的成\n员啊，帮忙分担一些也是应该的"
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
                "uid": "45551A663E47414FEB4A65C4BC94EA8BCA75",
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
                        "defaultText": "我们家......怎么说呢，大体上属于放任主义吧。感觉按我爸妈那个脾气，只要晚上还回家睡，别\n的怎么折腾基本都不怎么管的"
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
                "uid": "F95FD86B47F2F64D337A5C84FCF84FFAE1A7",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "7D5EED8226AD314D83291551613800A478B5",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "27C4AEA1713AF145CA38B3837F3A503865C5"
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
                        "defaultText": "那可真的是谢谢啦"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "9DE64E627AD1244403491BD7E8C5858B377C",
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
                        "defaultText": "我和学姐并肩走在学校外的小路上。原计划会议一个半小时左右，然而会议上稀里哗啦地一下\n子找到了好多的问题。包括各种各样的建议啦、申请啦、预算安排啦等等，加在一起有足足好\n好几百份的文件要一个个检查过去"
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
                "uid": "0B1765A89246674D7409599775002509EBF3",
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
                        "defaultText": "会议结束后我本想离开，却无意中发现似乎学姐并没有要走的意思。她似乎是想要把这些内容\n大致地先汇总整理下，以便之后工作的安排。看到学姐如此努力，我也不好意思再袖手旁观。\n于是我们两个人便一起留在了会议室整理那些东西。好不容易解决掉所有的工作后，校工已经\n不耐烦地拿着扫帚在赶着我们了"
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
                "uid": "28EAC0653F94444068189047E5031005E524",
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
                        "defaultText": "对了，既然都已经是这个时间了，不如到哪里去吃点东西吧？我之前已经和家里打好招呼了，\n反正也是要自己在外面解决的。你要是也不急着的话不如一起？今天帮了我这么多，我也应\n该表示一下才是呀"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "764898ED46A2D24A8F385C59EAFF76C7FCB5",
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
                        "defaultText": "啊，没问题没问题，我也正发愁要到哪儿去混饭呢。不过表示什么的就算啦，毕竟也都是份内\n的事来着。学姐有什么想要去的地方嘛？"
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
                "uid": "6B2B8E4F6C58104F918AE5A25F05FF4FC075",
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
                        "defaultText": "嘿嘿，这你可就问对人啦~我前两天刚看到推送说不远新开了一家小西餐厅，一直想着说找个\n机会要去试试看来着，不如......？"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "15D9076C38C3A2493579641182622DF177D4",
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
                        "defaultText": "好呀，那......就麻烦带路啦？"
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
                "uid": "2B909B65357AF44C088831646B9CF9DB7A96",
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
                        "defaultText": "我稍稍向前快走两步，拉开了一点和学姐之间的距离后，转身弯腰伸手做出了一个“请——”\n的动作"
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
                "uid": "25111124316F5447F968A9207393E0F0EC03",
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
                "uid": "2514D358420AA1489B7BAAF77AE4472FEDE8"
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
                        "defaultText": "不对不对，你这个动作标配的台词应该是“大小姐，欢迎回家——”才对吧"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C18E4B6268E8A04E674AFF0469597E0575AD",
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
                        "defaultText": "啊？"
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
                "uid": "9B6C05535AFFC0438B8A23D7C484605D8444",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "BFDC691D124075452D187A86604A885F3864",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "B19D91EF28AD8146AB4920030A005A5E4624"
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
                        "defaultText": "“大小姐您最爱的茶点已经备好了，等下给您送到屋里去。老爷嘱咐说之后杜克公爵家的二公\n子会来拜访，还希望您能......”"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1B8C79E9104E79489E7BEF72AE5780B16CFD",
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
                        "defaultText": "嗯嗯嗯？？？"
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
                "uid": "64C1028B6E63F440AA79A884A5F1F510D0CD",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "2FF173701A41844BE74B70E5CB31F517B854",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "5AFBF423142AC74B54683C6414F0EB988E05"
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
                        "defaultText": "“不！我不要！我讨厌那个不学无术的花花公子！父亲大人在哪里？我要去见他！”"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "8BA4EBCD743B414CEA0AE724FC9A7CCE01F3",
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
                        "defaultText": "喂......这突然是在演哪一出。而且怎么还精分起来了，又是管家又是大小姐的，学姐你......"
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
                "uid": "A5FE3F331181F846DD291F9770F2F29F2B01",
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
                "uid": "F580D34054976846F2487D2721617A7388AE",
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
                        "defaultText": "啊......所以说不要拿那种期待我能接下去演的目光盯着我看啊......"
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
                "uid": "C5CFE7C90121924471384A51CDEA942C89A6",
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
                        "defaultText": "突然即兴发挥了一段没头没脑的小短剧之后学姐仿佛像是自己想象出被迫相亲的大小姐一般捂\n住了半边脸，做出了一副痛苦的样子。然而手缝之间传出的略带一丝狡黠的目光还是暴露出了\n她真实的想法。毫无疑问，她此时此刻突然的停顿是在期待着我加入其中继续的即兴表演。"
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
                "uid": "22B985836857A24A928B5AB5FBF0275A4DE3",
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
                        "defaultText": "唉......"
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
                "uid": "41BA0095584000437A2887130F1C4EBA8D36",
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
                        "defaultText": "说真的，这街上没什么人可真是万幸......"
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
                "uid": "38F6C7AF2C8F1246071A6D634403F930407C",
                "expanded": true
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "家族着想",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "“大小姐，这也都是为了我们家族着想......”"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "8E7B2F9F0139C343997986C23D65615C715A"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "不在府中",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "“老爷他......现在不在府中”"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "CDC57B5B87BC9248358BE3D389973E6467FF"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "回绝他",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "“既然大小姐不想见，那在下便去找个理由回绝他”"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "490D245D3B53F7476428C171BFEC885B0F64"
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
                "uid": "514438583CBDB444BF19F822A9326E8A54AF"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "206EE2342B971341253AE6E61A63641555F3"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "家族着想"
                },
                "indent": 0,
                "uid": "0415AA7F7F599647255B4C520B2E98156CCE"
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
                "uid": "76C9838A66F81343FF296694E8EC46E14C4C"
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
                        "defaultText": "呃，我想想啊......"
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
                "uid": "51385899114202485529FAB167681BEF1964",
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
                        "defaultText": "”大小姐，这也都是为了我们家族着想啊......“"
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
                "uid": "0535CA15788E3641399A469650FAF11743C3",
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
                        "defaultText": "以学姐的性格，这样的理由应该能够很好地说服她"
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
                "uid": "55E79F8D1F37B442343AB6D0689576A8C429",
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
                        "defaultText": "”大小姐，您也知道，我们家族的产业最近非常的不景气，如果不能得到杜克家族的支持的\n话，恐怕......”"
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
                "uid": "1E8B4F4C3C11824D66586D980A7B95B7F94F",
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
                        "defaultText": "”联姻对于大小姐来说确实是过于残酷了，可是当下能够拯救我们家族的也只有您了啊......“"
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
                "uid": "180792706E918347366B4998E42616F45601",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "37EF7B349DAB7644C069FA93FA5A80AB4958",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "7970107A2127C7457319A6B8E24792F4B127"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "ED7313BB4DC29140B42A331629887CC8798E"
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "A1590752132FF149173AF818575C5FE1AA12",
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
                        "defaultText": "这样说是作弊哦学弟......"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "27079C0F71C9644EB158C4E1717C324C12DD",
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
                        "defaultText": "话都说到这个份上了，我还能......"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0ADEBBDD099FA745AD6A8BA364756DFCA780",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B3DA748867A43743EC4BDC07057A600A385F",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "D39BFEE153809448F8283692F19476F66554",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "726493A63152334EE908884883EAE0105875"
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
                        "defaultText": "唉，果然即使是想象之中也......"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0ACBCA4F339E8741830BD9513D767FD7AD34",
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
                        "defaultText": "嗯？学姐你说什么？"
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
                "uid": "5A7DADB51322A344922ADF329F0791B383AD",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "BFDC691D124075452D187A86604A885F3864",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "D90F336A8681B848DF2969C7AD637F85973F"
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
                        "defaultText": "啊，没什么没什么。不如说......一下子就能想到这样的回答，反应很不错哦"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "D5EF0E5A490F584B8A6844B5575D055E11D9",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束-1",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "B86AA2997EECB541716990970C6B38C3199B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "不在府中"
                },
                "indent": 0,
                "uid": "050757858930C846EB6BD273E0DEA61BEE00"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "黄亦歌好感度",
                        "index": 20,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 2,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "12A52D85453F88484F6B9D11042C23A9CD31"
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
                "uid": "2C33C59970AFA144CD2A2AA8442CDAC400B2"
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
                        "defaultText": "呃，我想想啊......"
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
                "uid": "D58ECC465A8BB34F144BC4D3CF666FC10E67",
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
                        "defaultText": "”老爷他......现在不在府中“"
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
                "uid": "15DCF8366CA083427D5A394748F438C706E0",
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
                        "defaultText": "学姐突然的脱线让我一时间有点反应不过来。想不通她究竟是在想着什么，既然如此，那就用\n最稳妥的方式来回答吧。"
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
                "uid": "BC97ED3845E827486519F8380B9C9FB7AFE1",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "37EF7B349DAB7644C069FA93FA5A80AB4958",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "93252E887669F6450A29A5999413545B62A3"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "DFD797A113C0D44A790ABDE6A89F7E7DDC66"
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "ABB16ED369C9564A0F5A9783F25D2688BC35",
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
                        "defaultText": "居然来这一手啊学弟......"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BE4465BC207F344B4709FAE3D7BE006ADC77",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "BFDC691D124075452D187A86604A885F3864",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "37B003BD16EA974E824BF9F3F7E341F7CCFD"
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
                        "defaultText": "嘛，不过也算是正常会有的反应吧......"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0F9D82816506C442D238EB11CD1E88AEAA03",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束-1",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "8E07066D6F90E64ED73BC8D21BAC0CB627D9"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "回绝他"
                },
                "indent": 0,
                "uid": "D7584C432861A147961B43853DEB82D39715"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "黄亦歌好感度",
                        "index": 20,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 1,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "FDEE20457988944F7B192CE665F01A974C04"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "黄亦歌hidden end",
                        "index": 25,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 1,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5265F4354AC8C24101989C572BF14E6D1C93"
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
                "uid": "B8E55BA58876F64C794BB5E98178D38314DA"
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
                        "defaultText": "呃，我想想啊......"
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
                "uid": "9E3A3CF536E2D44E9F2B046920761C0254ED",
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
                        "defaultText": "”既然大小姐不想见，那在下便去找个理由回绝他“"
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
                "uid": "DEE84EA041256149A288A03213E6A3489B11",
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
                        "defaultText": "冷静考虑一下。按照设定学姐应该是很讨厌即将去面对的这个相亲目标。既然如此那我应该做\n出的反应毫无疑问就应该是这样的。"
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
                "uid": "69F2A959664F2341357B3923EDF9AA2B34EF",
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
                        "defaultText": "嘛......确实如果是在现实里可能会出现各种各样麻烦的后续啦......不过管它呢？反正不都是即兴\n的想象嘛，想象之中都不能够随心所欲的话，那给自己定下的条条框框也未免太多了"
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
                "uid": "46B282A1515DA7420D6AD789C81E80B3BCD2",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "D60C47A58182A145F66BAC54206722D5699E",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "FE3834B9211FC8497528FF589A13E0C1B889"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "61750B820C8C534B783A42A6ABD157BDBCC7"
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5D5BD02629498546BF6BF888CC14EDB17B4E",
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
                        "defaultText": "还真是让我吃了一惊啊学弟......没想到你居然会这样说"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "CE279CD43E20884C9B7A40A32B399C5F7CAC",
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
                        "defaultText": "呃......怎么说呢，就......"
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
                "uid": "0F6353EB7DE2D44ABF4AC02797012FA337AD",
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "7D5EED8226AD314D83291551613800A478B5",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "B5DAA5196CDFD846992B4375A1D53A9A6B57"
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
                        "defaultText": "嗯嗯，没关系的，我懂。"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "9A98C608787F9246059940C86A089A3248C9",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束-1",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "CBBC4F0586080242F5683622E28866CA4048"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "收束-1"
                },
                "indent": 0,
                "uid": "B24800810A5CC1457E1A6DF7AA34DA31AEDF"
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
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "expressionId": "7D5EED8226AD314D83291551613800A478B5",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "16CD3B702CCCF540403B14B369793227ADB4"
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
                        "defaultText": "总之，还是谢谢你能够和我一起玩这个啦~"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "A1D715199CC9C74AE76B348908680BDEAF4B",
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
                        "defaultText": "呃，不客气......\n学姐你怎么会突然想到这个啊？感觉......好像还挺没由来的？"
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
                "uid": "6060FD5E6538C44B2D386E45D5EED776C31B",
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
                        "defaultText": "哈哈，吓到你了嘛？其实就是突然地心血来潮啦，也没有想太多"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0D88BDE3885229477A6B5C8125F000D4CA7C",
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
                        "defaultText": "好啦好啦我们赶紧走吧，拖到再晚就不太好了"
                    },
                    "position": 0,
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1070A61A82843845477BED34A24E35CE5F28",
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
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
                "uid": "A4181C995E2A8747CD0A5098AC85098EB0B2"
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
                        "defaultText": "学姐也快步走到了我身边，我们两人继续沿着小路向着闹市区走去。路上相似的小短剧又发生\n了一次，这一次学姐成为了情窦初开的公主，而我则扮演了刚刚进入皇宫的爽朗侍卫的角色"
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
                "uid": "D60C2B5E233C974D2C5A7FD536BDE4C22F23",
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
                        "defaultText": "（没想到......学姐那么可靠的外在下居然隐藏了一颗这么少女的内心啊......）"
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
                "uid": "31C6E242837CE7416B2910726C5BBBA23E55",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "C14CBA847B8E93453C186F920628ECBC5E56"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "F5301C7D2D528241397B98D6167DCA99975D",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "2642AF9D15AAA54BA34A343517F65D8CD301"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "9C4A4F485F29F2461F3881D3899A3286424D"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "871CA4C858402342803B4E06CACE8940AA87",
                        "name": "第三天晚上家中"
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
                "uid": "43ACE0185479D74F96580AE64479BDF0FC81"
            }
        ],
        "livePreviewDisabled": false,
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
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