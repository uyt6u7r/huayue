GS.dataCache['43E89EA871A3754FBC7944B9898C015E8FD0'] = {
    "uid": "43E89EA871A3754FBC7944B9898C015E8FD0",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "白天",
        "type": "vn.scene",
        "parentId": "BE5BA54550C8754F067ACBD858BB6EF0D7EC",
        "chapterUid": "BE5BA54550C8754F067ACBD858BB6EF0D7EC",
        "order": 4,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "C71A1B00493B6540B7280755123F83C7D641"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": null,
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
                "uid": "63B771D262D4794BF47A4BE95FD4BA0AC8BF"
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "しゃぼん玉（オルゴールアレンジ）",
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
                "uid": "8722A60C0EE9A842F77B1A71D6021F1D1984"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "F3AF40BB30E2574C88480A55AF2F90DDB680"
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
                "uid": "1B7662B054DC7249E338C304BAFDB2BA87B7"
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
                        "defaultText": "好，好了没有啊......"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "150BAD7734D734418B1AD523F2DCDBE67BA2",
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
                        "defaultText": "快啦快啦！你再坚持一下下啦"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "158141DF4AFE144F13285FB3F976CFA5CF49",
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
                        "defaultText": "绝对不许睁眼哦，听到没有？"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "AF83B821600FD24AC67A75F80EBD49B55435",
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
                        "defaultText": "我听到啦......\n唔......好痒啊小扬......你真的没问题嘛？"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "EF829286103B314C793B59E3987332FC58DA",
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
                        "defaultText": "绝对没问题的啦！你难道不相信我的眼光嘛？"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "DB6B4C294E915146F01BE2C59F905F0E8F8F",
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
                        "defaultText": "没，没有......"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "9B7BFB043CAE4349FD29C8A5DFEC8F9BE427",
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
                        "defaultText": "呜......"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "086F274B1F94A84E102A8FA57269A5FBA165",
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
                        "defaultText": "坐在床上的我感到焦虑不安。一方面是由于紧闭着双眼，不知道小扬究竟在对我的脸做着什\n么；而另一方面，则是由于身上现在所穿的这件衣服......"
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
                "uid": "5609491652C5C74CB279E9C264F1018596BF",
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
                        "defaultText": "幼儿园放假三天，可是工作忙碌的父母实在是腾不出空来照料我，就暂时把我送到了小扬家。\n两家住的本来就很近，小扬也一直都在嚷嚷着想要让我到她家去住，本来应该是挺愉快的一\n段经历的，可是......"
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
                "uid": "55455EF22B2B5445BC9BFD66AC07B935A56C",
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
                        "defaultText": "呜呜.....真的好丢人啊小扬"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0537607F34745647A55ACB358695BFD0D550",
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
                        "defaultText": "好啦好啦，别抱怨啦，还不是都怪你自己掉到泥坑里去了嘛"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "93BABE6E2CDA4444557B5106EB406310273E",
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
                        "defaultText": "到明天你的衣服就能晾干啦，在那之前还是再忍一下吧"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "241EB34F67F4A6403F1867F1BC6E4045E78F",
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
                        "defaultText": "可是......穿着裙子实在还是太丢人了......"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BCD08739173161475F6B1A146611C8DAC852",
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
                        "defaultText": "疯玩。毫无疑问，在难得的假期和小扬两个人自然是疯玩了一整天。可是在临回家的路上我一\n不小心掉到了下雨积起来的一片小泥坑里，全身上下都彻底沾满了泥巴。本来只是计划暂住两\n天的我自然是也没有带什么换洗的衣服，好在我和小扬身材差不多，她甚至比我还要稍微高一\n点，就只好先穿一下她的衣服救急了......"
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
                "uid": "31005AF22DD77142BF2ABDB8AB39EBE99A0C",
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
                        "defaultText": "果然，裙子这种东西对于刚刚六岁觉醒了一点点性别意识的我而言实在是太过于羞耻了......兴奋\n地夸奖着我“可爱”的小扬的视线仿佛像是刀子一般的尖锐，让我不自觉地想要躲开"
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
                "uid": "8A09D0CB9A176247B7590D38FC90E4401A61",
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
                        "defaultText": "哼，我才不信呢。之前你不是还哭着喊着说要和我一样的衣服嘛？那不也一样是裙子嘛？可没\n发现你觉得丢人呀"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "000F178327BE5342FA08DC089360FE1F4862",
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
                        "defaultText": "呜呜......那个是......"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BC94238F8DF88840422A6B64CFC399D6E3C9",
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
                        "defaultText": "小扬的话说的我无地自容，不自觉地想要将身子缩成一团"
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
                "uid": "C1390D507CF20447D909AB2162CA05AC7CFA",
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
                        "defaultText": "确实......几个星期之前小扬穿了一身新的衣服到幼儿园去，那是一身漂亮的小海军制服，白色的\n衬衫、藏青色的胸襟以及裙子，让大多只穿过手工花布袄的我们都难以言表的惊讶"
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
                "uid": "3560B4884738044E545B1E37BF3080A7F6A1",
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
                        "defaultText": "我也想要和小扬一样的衣服！\n这样的话我来来回回哭哭啼啼地向着父母嚷嚷了好几周。可是，很遗憾的是，在小扬所说的那\n家店里只找到了女生的款式"
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
                "uid": "23A6774C2E2FE24B952A86294E525B1CFEEC",
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
                        "defaultText": "“那，那，那样的话，女生的款式也可以！”"
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
                "uid": "53BA05002E3E9749178B8754E9309FA5952A",
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
                        "defaultText": "对......我好像是说了这样的话，不仅父母听到了，甚至小扬也知道了。在那之后，她就经常拿这\n件事来取笑我"
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
                "uid": "23C6ED531082084AE81A0E01B8E10C4C05F9",
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
                        "defaultText": "不要担心啦，小腾，现在很可爱的哦~"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "2BA54041703E54418359CFE148EEA18B5573",
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
                        "defaultText": "才，才不要可爱呢！"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "6374701079A6524ADC3BD2D5D8A9A5E3E3FF",
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
                        "defaultText": "好啦，可以睁开眼啦~"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "17EC1B33578DF64B3B8AE7835E5D4472EB38",
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
                        "defaultText": "啊......"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "6907D0B3278CA24853190144C7A8532A963F",
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "17A82F0A86B570493B685FD4EEEE1B3C81C7",
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
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
                        "y": -80,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
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
                    "duration": 60,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "D97BCE163689454723792C443E1F36BA1C1A"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "D4D53AAE03E9E24E92493DC9A40235B52EDF"
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
                        "defaultText": "诶？这，这是......"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "4D6043D288F71744316847676D6507AEDC2C",
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
                        "defaultText": "哈哈，是不是吓了一跳呀？"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "396C3F09189A10474F2A719787AD02E1C5E4",
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
                        "defaultText": "我也没想到居然真的能和我一模一样呢~"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B3D221DA307CC545153BD6863DF9F9C5F5DD",
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
                        "defaultText": "这，这真的是我......吗？"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3B3CDC064123E34A534909C1637FC862E3C2",
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
                        "defaultText": "镜中映出了既熟悉又陌生的女孩。说是熟悉，因为镜中的她长着一副和朝夕相处的小扬一模一\n样的脸庞；说是陌生，则是因为镜中的“她”其实正是我自己"
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
                "uid": "33C6E463018DB042039939B9D5BC4EE26A9F",
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
                        "defaultText": "很早之前就一直有人说我和小扬长得很像，包括我们两个的爸爸妈妈也都是这样觉得。只是我\n没有想到，当我真的穿上小扬的衣服，让她帮我画上妆了之后，居然能够相像到这样的地步。\n如果不开口说话，恐怕除了父母之外再也没有别人可以分得清我们两人了"
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
                "uid": "6B6B93306B4B7148E37B3C4117CF242FD5DB",
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
                        "defaultText": "是的呀~"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F58A38A481BD1146642A5360504FC8187210",
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
                        "defaultText": "不过......小腾你总是这样呆着一张脸的话就不可爱了呢。你现在可是会被人当成是我哦，可不能\n再像之前一样总是冷冷的没什么表情了呀"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C89FF8613B9AA64CC0498B5659CA3AEACEEC",
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
                        "defaultText": "诶？我，我......"
                    },
                    "position": 0,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "47807F675A13F1431D487C9579334D1B977C",
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
                        "defaultText": "好啦好啦，来，笑一个~\n茄——子"
                    },
                    "position": 0,
                    "characterId": "09FA6ABB4257B04B513A0136682DD81EA341",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "34949EB209F6D548AB48F70458FED157943A",
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
                        "defaultText": "小扬笑着向着镜中伸出手比出了V字。我稍微犹豫了一下，也慢慢地伸出了手"
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
                "uid": "B42E1DE87DA1E5484A6B7FF5335B22232AE2",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "145D35FD8EE36742298B1D73F325600AA82F"
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
                "uid": "4A0CAF7A3BAC244BD79918A559891F9E1DA1"
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
                "uid": "309D3E3C73D814443E6A1C71E99AB8D53E3F"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "097C336D7C183740CB99CFB9F069EF120C39"
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
                    "duration": 18,
                    "waitForCompletion": 1,
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
                    "expressionId": "045034278744C64B8F1992773D0111DCCC6A",
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "DC5DAB9864EB854F5D4AD835C7D2E983AE47"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 90
                },
                "indent": 0,
                "uid": "A9815B362B263742D13B0FF51EAB0247595D"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "D0C092282BD2644E964A542868800F0631E4",
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
                "uid": "CD55FB424B23F944328854E6EE2F6AD2D34A"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 90
                },
                "indent": 0,
                "uid": "DF8FD7FD21CA364BCB2BFB1283F35C16BE5C"
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
                    "duration": 180,
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
                        "type": 2,
                        "movement": 0,
                        "mask": {
                            "graphic": {
                                "name": "Splotches_Ver2",
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
                        "easing.type": 0,
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
                "uid": "12E8FE042EA5E9415D886F446DB59B3D22A0",
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 90
                },
                "indent": 0,
                "uid": "3939544F29AE71403C6AAB2248E238417D4D"
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
                "uid": "0D64BAD46C23D146BD38476547F0590377A7"
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
                "uid": "156753F44A8CC64AFC5BD9C8C06A5418EBBF",
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
                        "defaultText": "这，这个是......"
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
                "uid": "2EB24FDD9D442747F208CAD1299FB92C7207",
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
                "uid": "349F68BD567D0446E62871F539CB3DEC9FC1",
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
                        "defaultText": "又是小的时候嘛......总感觉这两天似乎总是会梦到似的"
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
                "uid": "27B2FD861B0E914C907909706A848A499B2A",
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
                        "defaultText": "果然......还是因为与她重逢了嘛......"
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
                "uid": "F0F6A32F4E68784EAD2A673586CD60AC1CCE",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "D6E2E9755EA3F44C7E38A224E1C394FC9C6F"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "D10057D79375B843F9899ED6C30DDA7D1F8D",
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
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
                        "x": 458,
                        "y": 0,
                        "angle": 0,
                        "zoom": 0,
                        "horizontalFlip": false,
                        "data": {
                            "zoom": 0.9614257606682804
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
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
                    },
                    "previewBackground": {
                        "name": ""
                    }
                },
                "indent": 0,
                "uid": "DCC30C2101923245718B7468BFEB94F21BC8"
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "Good Morning Sky (フルバージョン)",
                        "volume": "15",
                        "playbackRate": 100
                    },
                    "fadeInDuration": 60,
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
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7B18631928B831460D48E8A4FAF7C54BC308"
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
                        "defaultText": "哟，早上好啊我的朋友。这是在梦里又和谁重逢了嘛？"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "45A9C25D139CC145847ADF71C67EA1E5E62A",
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
                        "defaultText": "眼前出现了似乎足足两天都没有再登场了的好友"
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
                "uid": "8FCFDEA217C6144D26985D535C02BB872EF8",
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
                "uid": "E7E593F86B2DA047F0591A41B550436EA9C0",
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
                        "defaultText": "我要是说不只是梦里，你会不会打我啊？"
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
                "uid": "B267BEB4098086484779A321FAE24FC43DC0",
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
                        "defaultText": "啊哈哈哈，那怎么会呢......"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "12E2041610ED834847981AD9B14ED76DCA1C",
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
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "expressionId": "7EA61C87835432441A3A28C3C4D01A594213",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "996BAD59718C56469A5A98924BF874F12F92"
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
                        "defaultText": "嗯？不对不对，“不只是梦里”？这什么意思？"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3DF653E0078E37497A19F0828F494A0B7079",
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
                        "defaultText": "你不会是要背叛我们的不找女朋友单身一辈子联盟吧"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5F08D82A7DEB5940BE698657FC4182517CCE",
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
                        "defaultText": "那种诡异的联盟又是什么时候蹦出来的啊？！"
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
                "uid": "41976335267B0747369BD407AE7F2F76C136",
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
                        "defaultText": "哎呀......没你想的那么严重啦，只不过是.......嗯，怎么说呢，算是和小时候的青梅竹马重逢了\n......吧？"
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
                "uid": "0438F0BA30856344320A125579A28EFE2928",
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
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "4EA64C5953F9B44AB3791F6235555BAF3083",
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
                        "defaultText": "有罪！！！！"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5121DBCE1D3378423759CB727917858E4B48",
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
                        "defaultText": "诶？"
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
                "uid": "15AEF30860B615402919E833192E116BC7CC",
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
                        "defaultText": "这是赤裸裸的背叛，我的朋友。啊，不对，不应该再称呼你为朋友了。从现在开始，你是阶级\n敌人"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "FFEFA5A076DCE041DE6905D2ACFAF4198830",
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
                "uid": "F95796094011584A342AE7E7725386807C64",
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
                        "defaultText": "好好好，阶级敌人就阶级敌人。走啦，阶级敌人，该去吃饭去啦......"
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
                "uid": "2A035B170D15944BEB1ADD158F4C30B2A557",
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
                        "defaultText": "我站起身来，随手抄起江柯文放在我课桌上的文具袋往他脑袋上轻轻拍了一下"
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
                "uid": "BFD2AAAA824FF744D15969086F9D95EAC11A",
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
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "expressionId": "1FFF7D852CB84243156BD6047621DD2D40E3",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "8DDFE6EA4F1A05446F78F2D9097742ADF3A2"
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
                        "defaultText": "诶诶诶你轻点你轻点，我新买的耳机呢，砸坏了可咋整"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0BF9F4B35B045243E92AF29333AE1D571F35",
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
                        "defaultText": "不要对阶级敌人抱有什么幻想嘛......\n话说，怎么又开始折腾你那耳机了？你说你有这精力分出来点兴许女朋友就找到了呢"
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
                "uid": "A1B34FA0844C674054790F737B3FC005FE06",
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
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "expressionId": "B3EA33B679CE7740A8780EC897A68ADD902B",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "FF68DCCD3B8393426B8BF8E9D7190228D8AC"
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
                        "defaultText": "那是两码事吧喂......"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "4BE2E9B33D701140AC78D851266BC2BE4960",
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
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
                "uid": "42078A78226584428A9AB7A95DA4974B1DFF"
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
                        "defaultText": "我们两个一前一后离开了教室往食堂走去。说起来好像这两天一直都没有和他吃过饭来着，突\n然有了一种生活再次回到正轨的感觉。"
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
                "uid": "CCD4B4F34719484DB33B77234D01FA5D904D",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "446B24994672E849032911402D598EA687FC"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "食堂早",
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
                "uid": "C8537D0510053345EA2BA6132843C238DD7D"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "970E731524BA06423D898908FB7453294A9C"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "B3EA33B679CE7740A8780EC897A68ADD902B",
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
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
                        "x": 458,
                        "y": 0,
                        "angle": 0,
                        "zoom": 0,
                        "horizontalFlip": false,
                        "data": {
                            "zoom": 0.9614257606682804
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
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
                    },
                    "previewBackground": {
                        "name": ""
                    }
                },
                "indent": 0,
                "uid": "1A9E72887B3F3248582ABFC6B1A4112ADD41"
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
                        "defaultText": "唉......这食堂还是一如既往地人多啊......"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "7F44E7BE044177442D59ACE8431DE19C827C",
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
                        "defaultText": "你说他也没多好吃啊......怎么就天天这么多人呢"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BB4679B439147246630B46B830D1F5331F69",
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
                        "defaultText": "......不是，你仔细想想，能回家吃饭的毕竟还是少数吧？这附近又没啥别的可选的，那可不都\n奔着食堂来了呗，这有啥可感叹的"
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
                "uid": "91153E432CB408490E0B3FD191D7252AE2F9",
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
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "16F0DDE089467144972ADBD96350236C5449",
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
                        "defaultText": "说好的自己做饭带来呢？或者女朋友的爱心便当啦什么的？这也没见到过啊"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "40B69EC983C31648283A5FF074991EACEC84",
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
                "uid": "9D524F89196177436B9B6FA5C39AE15C4A80",
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
                        "defaultText": "所以说......你漫画看太多啦。现实里哪会有那种事情发生啊"
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
                "uid": "29D95FC4484F7947BA6B4159D0F563B6BCEC",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "D10057D79375B843F9899ED6C30DDA7D1F8D",
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
                        "defaultText": "唉，这世界可真是无聊\n哦，那边好像有空位——"
                    },
                    "position": 0,
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "99BCC6F77272B34A9B5BA7367EDBDB32B1CD",
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
                        "defaultText": "哦？那我先过去占下位......"
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
                "uid": "4AAE3B115C8CB14BE39838A5F08E707C55CD",
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "59C63DF83AE90542B57A4EA43050043FA517",
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
                "uid": "70A5ADB447DD864AD74960C7459513F45CD0"
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
                "uid": "A84755013298554B5D19230161C32EF4A9CE"
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
                        "defaultText": "！"
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
                "uid": "2BAC85EE9EF5F4446E7ABD4034DEC9D8830F",
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
                        "defaultText": "（不是吧，这么巧？）"
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
                "uid": "50129CA89137D44EB39874331F836F26649B",
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
                        "defaultText": "那，那个......学姐？旁边有人嘛？"
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
                "uid": "5AFE91A093D0C54F284966C8C86D81D41F63",
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
                "uid": "BB89BC176993E540FA49E76349B63380F7C2"
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
                        "defaultText": "啊，没，没有......诶？？"
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
                "uid": "28AA1D32315D0841B26B2BC9B6FC5B9C2A1A",
                "expanded": true
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
                "uid": "F565EA4E255E9948AD78B691D5F30C887C0A"
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
                "uid": "47C42C697165F7449B189F3911B8E3B45D90"
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
                        "defaultText": "不要突然吓我啊，腾礼......"
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
                "uid": "E0E9B20B6168214F8D8A0366AA330239CD2A",
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
                        "defaultText": "啊，抱歉抱歉。学姐......一个人吗？"
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
                "uid": "593F392D5E9A97427C9A7A44737511A88FEB",
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
                        "defaultText": "我顺着江柯文指的方向走去。窗边的一张四人小桌旁似乎只坐了一个女生的样子。走近一看，\n居然意外地是亦歌学姐。我在她身旁轻轻拍了她一下，没想到她像是受了很大的惊吓一般，差\n点从凳子上跳起来"
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
                "uid": "380A35FC728CC443AD3B6FE84D3460A08DB3",
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
                        "defaultText": "对啊......本来想着在在这边不会有什么人过来的，结果没想到居然会有人搞突袭啊......"
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
                "uid": "AB440B9390E647452B4A70555A948979B37E",
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
                        "defaultText": "哇，真的不好意思啊学姐。看你好像在想什么事，就......"
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
                "uid": "E75607F21671B74EC6698055279DBBFC4F81",
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
                "uid": "2FEDC95681AD38496668DF54CB2EF9F09D3F"
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
                        "defaultText": "嗯嗯，没关系的，也是我太大惊小怪的，让你看笑话了"
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
                "uid": "056424CF81F06244034B7CE3A8D703B72359",
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
                        "defaultText": "这边没有别人在了。等下你要坐过来一起嘛？"
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
                "uid": "FC03D24E48C6464DC24BA67893D32EF1D89E",
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
                        "defaultText": "嗯。不过我和班里的同学一起来的，就......"
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
                "uid": "5BE824353C7D81423849BB17BC5A04AD19A8",
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
                        "defaultText": "江柯文和学姐应该互相不认识的样子，如果就这样坐在一起的话会不会有些尴尬啊......我回头\n在人群中寻找着江柯文，想要跟他打一声招呼"
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
                "uid": "97E31BBC7B38964DA46B19F89B167EB0791F",
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
                        "defaultText": "诶？人呢？"
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
                "uid": "2B64043F8E7B9140146BB1F146D392ACA884",
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
                        "defaultText": "奇怪......我的视线已经扫过了全部的窗口，然而无论在哪里都没有看到江柯文的身影"
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
                "uid": "6DCDE04D604036413899E4752C99A0EC6C2F",
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
                        "defaultText": "腾礼？怎么了吗？"
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
                "uid": "835464C24CF1B245FD9861C86FA09606B396",
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
                        "defaultText": "啊，没有没有。就，我和一个朋友一起来的食堂来着，结果这会儿死活找不到人了......\n啊——"
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
                "uid": "9604BD096C34D943868825077EE36C2260E2",
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
                        "defaultText": "话还没说完，我突然在视线的尽头捕捉到了食堂门口的江柯文。他似乎也正在看向这边，还向\n我点了点头，比了个大拇指......"
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
                "uid": "EFE141BD717775401358F04687113FB73D64",
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
                        "defaultText": "这家伙！是又把我和亦歌学姐之间误会了什么嘛......"
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
                "uid": "E654724C3EA70145DE8A28932184DD7E7D36",
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
                        "defaultText": "啊，还真的跑了......"
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
                "uid": "A9CF375A13162141589829208E1FD65A2A99",
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
                "uid": "79CE6F5A6CF91348175BD5750CD7C5C91CE9"
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
                        "defaultText": "嗯？发生了什么......"
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
                "uid": "6E32D26B7D2B674CE98A87A0D0D7834568B4",
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
                        "defaultText": "没事没事。可能他临时有点事先走了吧......"
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
                "uid": "C64F371D44892343C51AA3F8453D24BC6E5D",
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
                        "defaultText": "算了算了不管他了。那，这要是没人的话等下我就坐过来啦？麻烦帮忙先占一下位置吧"
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
                "uid": "EB912B5A4162214E734844100F37629F4872",
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
                "uid": "6BE42FC82CD5A3477F7A8A76C6C39A9782EC"
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
                        "defaultText": "好的"
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
                "uid": "39FF94FA1A4F804E9B8A45D6E409867A5DAB",
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
                        "defaultText": "对了，能麻烦也再帮我带一包酸奶嘛？密码是六个一"
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
                "uid": "B5547AA45E0AA34465197B373F397BAE720A",
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
                        "defaultText": "哦，还有，给你自己也刷一包也没关系的哦？"
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
                "uid": "FDE500798A5DA249C02A53298932F7F4F48D",
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
                        "defaultText": "啊啊，不用不用，举手之劳举手之劳。那我马上回来"
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
                "uid": "5D7B7FA4430EB84CC7898920601675FD248B",
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
                        "defaultText": "我接过学姐递来的贴着非常少女卡贴的饭卡，放下手里的东西奔向了窗口前汹涌的人潮"
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
                "uid": "5523EE4992925748402A32A86D2351A40578",
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "F8E9C8D8970410463B497544B995CEDA09B4",
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
                "uid": "25FF80C356A13946306830F138271472D62B"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "2349AF255367D445F46A8A00D62A50506F5D"
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
                        "defaultText": "..."
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
                "uid": "96D385B93C62D9475B8BE376B64BFAA9EBCE",
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
                    "characterId": "C8BD0FEE4BD0D846FB2AFDC44CE3EFE309B4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "20111C017A12674B8B29E5A67BFDEDA9F480",
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
                        "defaultText": "........."
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
                "uid": "E18649A25600F842605B3AF888CB6A194D1D",
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
                        "defaultText": "久等啦——"
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
                "uid": "CD52FE4A9C277344B83A5580DF61B40C4D95",
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "7D5EED8226AD314D83291551613800A478B5",
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
                "uid": "B9D0B35737C904448C1B8B131940FD986D32"
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
                        "defaultText": "谢谢啦~"
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
                "uid": "1CB8204336F8444644984D82A450CF63E905",
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
                        "defaultText": "不客气不客气"
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
                "uid": "9C4913D952F3B741172BCC4758F06E07CB40",
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
                        "defaultText": "我把学姐的饭卡递还给她。其实刚刚在饮品窗口处正在做第二份半价的活动，我也就顺势给自\n己买了一样的酸奶，没有用到她的卡。嘛，不过这种细枝末节的似乎也没什么必要再跟她汇报\n一下就是了"
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
                "uid": "D84B7A0C55FAB746526A9E618F1DAD623A2C",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "53BAF3820885964DCD7B4676A2CEE7A3B82C"
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
                        "defaultText": "诶诶？等下等下，学姐你吃的那个莫非是......最右边窗口的那个麻辣烫吗？"
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
                "uid": "4959A7930384A64E4649AA487F0322EFC72A",
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
                        "defaultText": "嗯，是呀。看那边没人排队就选了这个。真亏你能看得出来呢"
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
                "uid": "40A172F88C613046865BB907FD4A6770F6FD",
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
                        "defaultText": "（没人的窗口原来这么有诱惑力的嘛......）"
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
                "uid": "4B8C97122D77164EB218F708C542E80B239B",
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
                        "defaultText": "呃，怎么说呢，算是之前领教过威力吧。话说那个不是超级辣的嘛......学姐你难道没问题的吗？"
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
                "uid": "357A1625401A654A4C997601BA72AF3CDA8B",
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
                "uid": "8227F1148F75924A121A38E61B0D14AC82E5"
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
                        "defaultText": "嗯......怎么说呢？感觉可能是因为我对什么味道都不是很敏感吧......"
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
                "uid": "82EB24198ADA434BAB6B27F1A461243568E0",
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
                        "defaultText": "这也行？！所以说难道吃什么东西都分别不出来味道嘛？"
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
                "uid": "C51FA2D4717853481A8BDA950542C49E6147",
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
                        "defaultText": "算是......吧？\n不过好像这样说有点对不起努力做饭的师傅们来着......"
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
                "uid": "237640EF400406480A28A7F8F6F5EC8768E3",
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
                        "defaultText": "呜哇......不过不得不说这种体质可真是厉害啊。你想想，要是闹个饥荒什么的，是吧......"
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
                "uid": "D36A6CAB54625741C6496A22B501BEDF6C5D",
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
                        "defaultText": "去去去，天天满嘴没个正经。就不能说点好的嘛~"
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
                "uid": "DC841CBF37CC8447702B831583EF9C9F16CE",
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
                        "defaultText": "况且其实这样子我还挺不想要的啦......搞得自己做点什么的话也完全把握不了味道啊，烦死我了"
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
                "uid": "6191325195C03745CB7B9CD97C3CC547578C",
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
                        "defaultText": "这说明天生就是有人给做饭的命啊，不是应该很高兴嘛哈哈哈哈"
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
                "uid": "B75F3FF328189149198985348CCE55BE116B",
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
                        "defaultText": "你看你看，又开始胡说八道了。等下我真的生气了哦"
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
                "uid": "36912F562843D34A6109AE43DD5A3693F91B",
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
                        "defaultText": "诶诶，好嘞好嘞，我做出深刻反省"
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
                "uid": "02BD966510141742741B7F08FF4C031924C1",
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
                        "defaultText": "话说，学姐平时中午都是做什么啊？感觉好像这是开学之后第一次碰到来着？"
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
                "uid": "C625AEF35AE33846BF98AF97ED8C766D9973",
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
                        "defaultText": "诶？我吗？我一直都是在食堂吃饭的啊？而且每次都会在这个位置来着"
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
                "uid": "8989A70863B5284EB2483E71F94F03C7351E",
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
                        "defaultText": "啊？不会吧？"
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
                "uid": "7603FE44136FD04DE1786709119D8B9C1A72",
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
                        "defaultText": "这有什么不会的。生活的规律点有什么不好的嘛？"
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
                "uid": "CE9919DC2697074EEE5B8C828FACFA68DE39",
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
                        "defaultText": "呃，那倒不是在说这个......"
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
                "uid": "9C7BCB984F7FE14BB519A33135462E8A4502",
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
                        "defaultText": "“意思是说每天中午都是自己一个人吗？”\n我犹豫了下，还是没有问出口"
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
                "uid": "AF0168A91BACC446DA5B9CE4FA54B404539A",
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
                        "defaultText": "那......吃完饭之后呢？回家的话时间有点紧吧？"
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
                "uid": "BDEC941B5CE203478D1BB2B640515DF5D3F5",
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
                        "defaultText": "嗯......"
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
                "uid": "C90642DC35D6154BEA58FCF204295F93E8E7",
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
                "uid": "FA71D60B4C629246531AAF5886EC7F511EDF",
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
                        "defaultText": "对哦，我平时都干什么了来着？"
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
                "uid": "8F6F24AB74FC8347F13AB7B2EEFB711E8341",
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
                        "defaultText": "诶？这你问我我也回答不上来啊......"
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
                "uid": "2A0BF5B61F02A04CD8887096B0C54E73CED6",
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
                        "defaultText": "感觉......好像没什么特别深刻的印象了。反正有的时候到图书馆自习室坐坐吧，有的时候也会到\n学生会那边去处理点杂事。也没什么特别的......吧？怎么了吗？"
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
                "uid": "61DF027D5CFE05451C3A2844D13280166E55",
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
                        "defaultText": "呃，那倒是没什么。就是有点好奇"
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
                "uid": "AEEAEB0266D0784FB34B3F25C6CE252054FD",
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
                "uid": "8809482C2DB507458B5BD9B722C666ED330B"
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
                        "defaultText": "啊，那这么说的话，看来你有什么好的推荐啦？"
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
                "uid": "150AC34E4F96694C943AB9562918BC835FA1",
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
                "uid": "EAAC224A47AAF44CC639CCD56E48EBE64334",
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
                        "defaultText": "让您失望了......"
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
                "uid": "E59200AD51D4F641CB7B69A5897DFFE2B938",
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
                        "defaultText": "这么一想的话好像我也有点开始记不清自己每天中午都在干什么了，稀里哗啦就过去了，那种\n感觉的吧......"
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
                "uid": "3A4AE1CA270E40447549E356E9DB4F259614",
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
                        "defaultText": "是吧？看来有必要认真考虑下给中午的时间找个去处了呢"
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
                "uid": "F3BB5A4A84C496408F6AC818F6ACEFA03A92",
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
                        "defaultText": "这种事情也轮不到我们来考虑吧......"
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
                "uid": "B34B9E0986FEF84E915A68179C0F0A844C7C",
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
                "uid": "77F290ED82AB3043E78A720282ABEDC56CAA"
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
                        "defaultText": "嗯？是吗？我倒是觉得这种事情应该归到学生会来解决哦......"
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
                "uid": "4D327FDC4A63314A79589240349E9FF38B4F",
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
                "uid": "A904F9F693F2F64A7A39CB725AC601A3C1CC"
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
                        "defaultText": "哎，那这样问吧。如果你是学校的领导的话，你会想在中午给学生们安排什么样的去处呢？"
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
                "uid": "42DBD9CE2C1E9545712972B91B5B39533993",
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
                        "defaultText": "呃，就算你问我啊......"
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
                "uid": "B7316441493CE248587AE3B4578B749313DC",
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
                "uid": "CC008BBD4EEA944D3E28A9D062FF47514A1D"
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
                        "label": "宿舍",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "宿舍之类的？"
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
                "uid": "6381095C4008044F2899B9429EBE09653519"
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
                        "label": "社团",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "社团活动？"
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
                "uid": "58AC99B65CF03949B85953A6EAA790669038"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "45D71DD460CC274D9F4B6E94296F8AF3FB87"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "宿舍"
                },
                "indent": 0,
                "uid": "76E729F315DF654825298BD82AE027D8F64A"
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
                "uid": "F2AF3C3B86FD1345817A5E89D1D854C82380"
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
                        "defaultText": "宿舍......之类的吧"
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
                "uid": "D7C3A6FC6A93964BD22AF0C1D83DC93B458F",
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
                        "defaultText": "又好管理，也没那么多乱七八糟的事儿，中午休息休息也对下午上课有帮助，应该算是皆大欢\n喜吧？"
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
                "uid": "0933DE967A58E344BB39DFA1E81843E77104",
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
                        "defaultText": "哈哈，还真是有你的风格呢"
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
                "uid": "12929F1520139749A89B77589398672001AE",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束-0",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "97ADB0804FDC1648BB79698045E481C75DEB"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "社团"
                },
                "indent": 0,
                "uid": "79004CA336A8814F956BAE154E93C787D2C6"
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
                "uid": "EF3B635738DA51406C6B3F337009526DEA04"
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
                        "defaultText": "社团活动......之类的吧"
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
                "uid": "2B8DE5D03B59F740C7795C53E95DCD98FBB7",
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
                        "defaultText": "......我们学校里各种各样的社团基本都是名存实亡的那种感觉啦，毕竟下午放学之后凑齐人活动\n也不是很现实的样子"
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
                "uid": "93D829B04303E64B03092BC374494492522A",
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
                        "defaultText": "挪到中午的话，至少还算是成段的时间吧，应该还是能活动起来的"
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
                "uid": "2389F7301F28464A7D7BD0519D6DB37751D7",
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
                        "defaultText": "嗯......这么一说好像也挺有道理的"
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
                "uid": "B4D165F162E256442428CC4673951534F555",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "收束-0",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "386FEFCD7B21234EF06B9BE21D071B0E3D26"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "收束-0"
                },
                "indent": 0,
                "uid": "66729C155848954D7A3A2C70009594EF84F4"
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
                        "defaultText": "嘛，总之......有机会了再来考虑这方面的问题吧。眼下更重要的果然还是——"
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
                "uid": "35893D10664C2448E46A45B6F0DBCCF96FDF",
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
                        "defaultText": "——文化节啊。肯定得好好努力才行啊"
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
                "uid": "033D9FD146B8F74A73295A4213684D3C61D8",
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
                        "defaultText": "bubu——抢答错误哦学弟，减30分"
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
                "uid": "D5AAEFDE7A53354161192D680B9E7310C0EF",
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
                        "defaultText": "诶？难道不是吗？"
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
                "uid": "D8E761E74FD13040108A2308231D3759C36A",
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
                        "defaultText": "眼下最重要的，当然是......之后要去哪儿啦？我看你也吃的差不多啦？"
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
                "uid": "BFE7C7F11FB58649A3789EE38E001365D4D4",
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
                        "defaultText": "啊？没想到还真是字面意义的“眼下”啊......"
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
                "uid": "4CB0BFCE413EF64C7F2B1AA23272A530E2C7",
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
                        "defaultText": "我倒是......没什么特殊的安排来着。学姐呢？"
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
                "uid": "483598AF645913413C6917653F24F8D5BED9",
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
                        "defaultText": "嗯，既然这样的话......"
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
                "uid": "9498645119E6D747A24AD014E53FAE4D1348",
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
                "uid": "E8ACDE069B4C0548E75A54C9111BC5C12799"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "FF6A34991E6AE345521B0A352E3C6612D7BD"
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
                "uid": "9070C64B157D3741C779575214A3A88C0C3D"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "9C9BE89947BF94407F0BA8855467C36D16C9",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "C3C80A3B6D9D3643FE4B1047CA4A329AE161"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "B41FA3D4405602423D39EE256EB645067925",
                        "name": "告白墙"
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
                "uid": "E2108FA6234AB64D9E5B4196B0C44E42E8F7"
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
        ],
        "booleanVariables": [
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