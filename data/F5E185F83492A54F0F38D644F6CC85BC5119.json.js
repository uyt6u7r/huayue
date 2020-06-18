GS.dataCache['F5E185F83492A54F0F38D644F6CC85BC5119'] = {
    "uid": "F5E185F83492A54F0F38D644F6CC85BC5119",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "校医室",
        "type": "vn.scene",
        "parentId": "BE5BA54550C8754F067ACBD858BB6EF0D7EC",
        "chapterUid": "BE5BA54550C8754F067ACBD858BB6EF0D7EC",
        "order": 3,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "5BE8B1906CD469435868070143293459D105"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "InfirmaryEmptyBed_Morning1",
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
                "uid": "3FB9315769D5D749A81B9E68DE9127F015F5"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "D948F2E58B0A0646BA4AEB2818E6225F4F99"
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
                "uid": "9294B5540F22A9477F5873609AE507461662"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "好啦，应该没什么大问题啦"
                    },
                    "position": 0,
                    "characterId": "A55D72930C33E1446069CAE5507C4113287A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "78A595998160D64E064835D915AE632A3F14",
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
                        "defaultText": "之后记得不要再做剧烈的运动了，走路也要慢一点。如果到明天还是没恢复正常的话还是要赶\n快到医院去看看"
                    },
                    "position": 0,
                    "characterId": "A55D72930C33E1446069CAE5507C4113287A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "83F4BAED32CB584BB258E5F96CBFE907E41B",
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "7C6E48010E57A4427289827427A82F236BD3",
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
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
                        "x": 300,
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
                "uid": "2CA3DC2889D7E34DB859E0F937C2AC6F0030"
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "Chained Story",
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
                "uid": "2F97759809F68442596A2DB726B8B9FC8580"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "嗯，好的！谢谢您啦！"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "61EA47DD5530A14BC59BB4C36327E0A452D1",
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
                "uid": "06491A0C29FA3843AA08AFE355DCA4525C61",
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
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "expressionId": "CA8B6DC68A7B504B209A60908D62A7C3151D",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "19F5F75F6DDD54420E6AC803E05CE1D73F60"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "还有什么别的地方需要注意嘛？吃喝方面有没有什么顾虑啊？然后......"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C0C86D4279EEA746B6584987E89CD7FEC731",
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
                    "characterId": "A55D72930C33E1446069CAE5507C4113287A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "17A222F25D0E1142151979F2C278F5558F61",
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
                        "defaultText": "唔......应该也没什么了。小姑娘心还真是细啊，哈哈哈哈......"
                    },
                    "position": 0,
                    "characterId": "A55D72930C33E1446069CAE5507C4113287A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "2AD7CEA620AFB04CCC495ED415F75103ABD1",
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
                "uid": "FCAA2A6B257AC34B508BA9E8FA3005232B62",
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
                        "defaultText": "面对孟君林显得过于详细的追问，校医老师明显略带尴尬地笑了两声，接着便向我投来了复杂\n的目光。从进到校医室开始起，基本就是孟君林在不停地与校医老师交流着，不停的问这问\n那，反而是实际上受了伤的我基本上插不上话"
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
                "uid": "4EE8345832A181429658BD831178310F385E",
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
                        "defaultText": "呃......总感觉，盯向我的目光有点难忍啊......在不认识我们两人的校医老师看来，恐怕......"
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
                "uid": "8DDE5E4D616A3345EA4802892FA961F97F55",
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
                        "defaultText": "嘛......就我们的校风而言，原则上对于恋爱相关的事项是不会过分追究的。但尽管并没有明面上\n反对，也不能保证说老师们就会支持。在学生之间还是有着把这样的关系尽量隐藏起来的意识\n的"
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
                "uid": "18D87DF59542C343453A89A63EA195EE03D4",
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
                        "defaultText": "在晨会的关口上，一个女生扶着我走进了校医室，还几乎像是抢答一样替我回答了所有的问\n题。这样的关系，恐怕在所有人看来都算是有点异常的吧"
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
                "uid": "D385A1F62EFC154DAB0A3B42FAE24989BED7",
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
                        "defaultText": "好了，之后有个教职工的会要开，我就先走一步了。钥匙给你们留在桌子上了，第一节课之前\n记得要回到班上去啊。"
                    },
                    "position": 0,
                    "characterId": "A55D72930C33E1446069CAE5507C4113287A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "2F05D74C36A5444DAA9960242EBE7354995B",
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
                "uid": "9A9B918586138442BD4AD6F3289D9F9F2592"
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "name": "door_close",
                        "volume": 100,
                        "playbackRate": 100
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
                "uid": "520572002BD03249F25813F5D615B86C9874"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "CE66E337649933450D4877D57D35FAD0399E"
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
                "uid": "C4AF5EC69A419047F868A52075F4658D6E2E"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
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
                "uid": "BEDDCB605D3FA54BD32B94C04E3061DF4311",
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
                        "defaultText": "还......还真是安静呢啊，哈哈哈......"
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
                "uid": "94B38D6956242347F62BDC063D6CE76422E7",
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
                        "defaultText": "校医老师离开了之后，屋里只剩下了我们两人"
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
                "uid": "9BDB7233230B1142370BBC25EC23FA044966",
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
                        "defaultText": "你，你要不......也，也先坐下来？我往那边儿稍微挪一点儿"
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
                "uid": "614A9AEA64B7234821288723E08CE8DF8C54",
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
                        "defaultText": "小小的校医室内没有太多可供人休息的地方，刚刚校医老师在的时候孟君林就一直站在我所躺\n着的床边上。我坐起身，使劲地往床头的方向挪了挪，把腿靠在了床的一端，示意孟君林在另\n一边坐下。她稍微犹豫了一下，还是走近慢慢坐了下来"
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
                "uid": "E0F34FB9332DE84C7F8810583EFD6A3315B2",
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
                        "defaultText": "那，那个......谢谢啊，耽误你这么久来陪我到这边来"
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
                "uid": "0C1C7D9409AF544ED51ACF26ED71FC5A8E20",
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
                        "defaultText": "说什么呢......这哪里算是耽误啊"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "547364D217E46544016A31F70C79150DE503",
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
                        "defaultText": "况且，如果不是我坚持的话，恐怕你自己根本也不会想到要来看看的吧？"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "24C5F1770978A245015B07A076730207D0EE",
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
                        "defaultText": "啊......倒是有可能。不过其实也不过就只是做了个冰敷而已嘛......感觉也不会有那么大的影响就\n是啦"
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
                "uid": "DB9B585A44F7E4403028FCA16C4A96B4F946",
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
                        "defaultText": "那可不一样。总之，之后不能再这么冒失了，听到没有？"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "399C5021806FA54BF82B6394750CD16B20FA",
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
                        "defaultText": "好嘞好嘞......嘛，不过确实，感觉刚刚在干的事也不会再有机会再来一次就是了哈哈哈哈"
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
                "uid": "AC94229961E20641D22A6E91E72AADC66B2C",
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
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "DAD084BC5F8BC1465718BAE4D8BC3662D9BB",
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
                "uid": "D0F5D58A1F8CA54B956B371433CEE5E485A5",
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
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "26F1307B280CC342AB1AAE2719BF3D8C0874",
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
                "uid": "C73BA91E79732143D7092EC20D83467CDE8C",
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
                        "defaultText": "对话到此为止。不知道该说些什么的我向后靠在了床头上，坐在我脚边的孟君林也低下头不知\n在想些什么。尽管稍有些尴尬，但不知为何我却觉得眼下的场景莫名地让人感到有一丝温馨"
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
                "uid": "47F1A1E128C7B447683B5CB2477E45E9F177",
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
                        "defaultText": "我拿出手机看了下时间。校医老师让我冰敷半个小时之后再离开，现在还剩下大概十五分钟左\n右"
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
                "uid": "097AF77B87442340C00BEA97B7218DE096AC",
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
                        "defaultText": "要不......你先回班上？晨会这会儿应该已经结束了来着，正好就......"
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
                "uid": "27C176D676029547C32B63880482B63DA1F6",
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
                        "defaultText": "......没关系的，我等着你一起吧"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "4DA44D9E3985D240B85A1DD725CF254BF8C1",
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
                        "defaultText": "呃，其实......"
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
                "uid": "69D26FBE4AF9A2407C4BD267FF37CE9350A7",
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
                        "defaultText": "嗯嗯，真的没关系的。再说让你一个人走回去我也不放心"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "9E7DA2A55A95244A28984A82E09E18F0096C",
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
                        "defaultText": "好吧......"
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
                "uid": "9A5B31270653744E3F4B4F08B51E12CE20D3",
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
                "uid": "E02819FB0106C342523A6E534CE716431A21",
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
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "7DE025432AE7C344FD9A4436E7E5127B4C6C",
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
                        "defaultText": "对话再次结束"
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
                "uid": "D93C75512ECF7149606AB4728FD8D108ABE0",
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
                        "defaultText": "说点什么......这种时候应该说点什么呢？"
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
                "uid": "1F6D706F544AA2479198AC68DC195D5A98D9",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "8691BF7040194349B64A90521FF27C3096F3"
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "name": "choice_confirm_03",
                        "volume": 100,
                        "playbackRate": 100
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
                "uid": "774CAECB68ACC448D698230239091A8DC9B7"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "诶？短信？这个时候会是谁啊......"
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
                "uid": "BAB83941396D184C1E495E719DC6AFE80951",
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
                "uid": "743489DC9E1D3247132A58B3C189E80083E1"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "4351F74E60D9F34518685D02E0358381BAD9"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 30,
                    "origin": 1,
                    "waitForCompletion": 1,
                    "positionType": 2,
                    "position": {
                        "x": 340,
                        "y": 20
                    },
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
                        "origin": 1,
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "hyg短信1",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "indent": 0,
                "uid": "4BAAAF9364CD7345457B0622470C8C112BB1",
                "expanded": false
            },
            {
                "id": "gs.WaitForInput",
                "params": {
                    "key": 102,
                    "state": 1,
                    "action": {
                        "type": 0,
                        "data": {
                            "label": "$$C50EA7EF0592134BEF59E098BD7961D34EB4",
                            "commonEventId": 0
                        }
                    }
                },
                "indent": 0,
                "uid": "29D73E454C2D94487419642864F1D53C9AE8"
            },
            {
                "id": "gs.ErasePicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
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
                    }
                },
                "indent": 0,
                "uid": "E7FFF3A0631835478229DD65428FB5D8836D"
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
                "uid": "5AC3C3EA2C86754C9C59AA391FA1735A2E43"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "真不愧是学姐啊......"
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
                "uid": "2D7023F64719874579581E788820DD6A0239",
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
                        "defaultText": "嗯？怎么了吗？"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "47A5A4EE99B175483649489207D52AC4A9B2",
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
                        "defaultText": "啊，我们两个不是没去检查嘛，亦歌学姐那边担心出了什么问题就发了短信来问问，喏"
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
                "uid": "F12FB86B6F14F7433028C8D1A7808D004007",
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
                        "defaultText": "我把手机递给孟君林"
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
                "uid": "50E1F30D762524461418F21466CCA97FCB45",
                "expanded": true
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 60
                },
                "indent": 0,
                "uid": "58C88ED2706825469F58A3D187A5241A8627"
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
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "expressionId": "7C6E48010E57A4427289827427A82F236BD3",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "FD9C9EA97B5EC94943485C02C6072E2DDB38"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "真的不愧是学姐啊......居然想的这么周全"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "D4D2299C3608D84049884CD40D971DF5B0C0",
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
                        "defaultText": "啊......是啊"
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
                "uid": "F4A6A38626907445FB8B5DB4BA9E7E4CFCE3",
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
                        "defaultText": "我接过孟君林递还给我的手机，向后伸展了下胳膊，又再次靠在床头"
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
                "uid": "F5C8FAA819A6B841458904910BC669048AD8",
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
                        "defaultText": "总感觉......真的是无时无刻都在依靠着学姐啊，这样下去等到她毕业了学生会那边还不知道要变\n成什么样子呢"
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
                "uid": "CB25F7AA3BEE67459A3BDC981369D6EC053B",
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
                        "defaultText": "哈哈，那个时候你也又会有不少的成长啊，没什么好担心的啦"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1D8BE25B5A1AC448805998F2A840F0D526C5",
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
                        "defaultText": "不过......这么说的话，看来你是准备三年级的时候还继续留在学生会啦？"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0DCA915C3391A44CAC2ABF55C41A7F27C5F1",
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
                        "defaultText": "嘛......应该吧？感觉这边的工作什么的也还算是挺有意思的来着，而且也没有觉得很耽误时间啊\n什么的。不如说你要真让我闲下来心无旁骛去学习，那可能反而会不适应呢"
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
                "uid": "01C3FB202809044C6D4B7CF47777A87439D5",
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
                        "defaultText": "嗯......也是啦，毕竟你是个热心肠嘛"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "CD3E559C098336424E5BEF386355E81BB1F7",
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
                        "defaultText": "没有啦没有啦......"
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
                "uid": "D6FF38A2496B084E6E6AB5416B362BDC06BE",
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
                        "defaultText": "诶？等下等下，难道说你是准备要退出的嘛？"
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
                "uid": "06FFE1172E3557495E6AF602D6EE54261769",
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
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "expressionId": "CA8B6DC68A7B504B209A60908D62A7C3151D",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "82BA4ACB57A4274F098AA216A0542682E55A"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "嗯......应该是会退出的吧，毕竟学习也要紧张起来了，家里那边也会有不小的阻力的"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "15F03B5674F42141219953B472169B99E299",
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
                        "defaultText": "唔......这么说也是"
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
                "uid": "49B8F13F8CBE3747880B34112671FF02A059",
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
                        "defaultText": "孟君林说的也没错。我想起来，在她刚刚要加入学生会的时候似乎就遭到了家里的反对。害怕\n她会因此而分心耽误了学习。最后还是她和家里立下保证绝对不会耽误学习才勉强同意了她。\n大考在即的三年级，恐怕这一次她也不好再一次和家里反着来了"
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
                "uid": "CF1E6C6B5034A443A49AF5277CCF352DF0CA",
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
                        "defaultText": "唉......老实说真的很可惜啦。要不是因为学生会，我也没有机会认识你来着，就这样退出的话，\n总感觉......"
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
                "uid": "34973E4F4BCE7747BB199AC9C35F2D56BCCA",
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
                        "defaultText": "嗯？等下等下，我在说些什么啊？是想要挽留她嘛？还是说想要表达出对她的感谢之情？又或\n者说是......"
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
                "uid": "01C00E1874C4C642412B7A9275870ED2022E",
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
                        "defaultText": "啊啊啊啊不是不是。我是说，呃，怎么说呢......"
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
                "uid": "D28D89DD236B854A7B1A92D17AE833999102",
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
                        "defaultText": "对，既然没有办法的话，那就一定努力一起把最后的这一次活动做好吧，哈哈哈......"
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
                "uid": "9D78CBB64448984BA64897D801B7245B4B7F",
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
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "expressionId": "7C6E48010E57A4427289827427A82F236BD3",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "B9C651A8239E3347092818A879FE2B3BC95D"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "嗯，也只能这样子了"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "85078C141C5FE54C5179AAE644AE4778BAB9",
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
                        "defaultText": "不过没有关系啦，即使离开了学生会，我们还会是很好的朋友，不是嘛？"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "7BFB6A145408C5443459DE66E32F4B96762F",
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
                "uid": "20A5203933EBA54CEA6BB74833325962DC00",
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
                        "defaultText": "你说的没错啊......"
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
                "uid": "139AD8854C97644F8658C4B17844D8D315AB",
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
                        "defaultText": "“很好的朋友”，啊......嘛，确实，以现在的关系来考虑的话，确实也就会是那个样子吧"
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
                "uid": "172CBD018AD24144231936A662AD42118162",
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
                        "defaultText": "对了！折腾了这么一大早上还没吃东西，你肯定饿了吧？幸好我今天准备了一点点东西来"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BC126C6881D6824766299421E96F048D1E88",
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
                "uid": "40977AA536C60546A44A2D25DB70BBC12311",
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
                        "defaultText": "孟君林弯腰取过放在床旁的背包，从里面取出来了一包饼干，撕开后递到了我的面前"
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
                "uid": "120B580C2287C2474D3A4C97CCF32A4D9E3B",
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
                        "defaultText": "本来是打算放学后留到学生会那边再吃的，不过现在还是先紧着眼前来吧。正好我也没吃东\n西，也有点饿了呢。这个牌子的榛子夹心我超级喜欢的，你也尝尝吧"
                    },
                    "position": 0,
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "71ADDE0686ABB64A718BFEE2EDEE580DFAAC",
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
                        "defaultText": "啊啊，好的好的，那......谢谢啦"
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
                "uid": "C68872139FD9904D756864F305A45F24DCE3",
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
                        "defaultText": "我伸手取过一块，对半掰开后放到了嘴里。香醇的榛子位一瞬间在空荡荡了一夜的口中扩散\n开来，刺激着每一处的味蕾"
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
                "uid": "3162E84851069441121B5CD0C7F349B2079A",
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
                        "defaultText": "真的......好甜啊"
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
                "uid": "871AC34A8C6A244F2D7998A6C1806AD7E0A3",
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
                "uid": "3CC6BE3964F8A441DD892E8239B64058CABE"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 90
                },
                "indent": 0,
                "uid": "1262BD4651BD54499949D984180377F47843"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "9CFFA3F9365F644E1D5B2962150A2C842712",
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
                "uid": "C0B4F9F768883645276A8E7678E2CA96511B"
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
                "uid": "80B9230148FE9249E93A1B78B679FB184E12"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "43E89EA871A3754FBC7944B9898C015E8FD0",
                        "name": "白天"
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
                "uid": "02E3F75361B123425E8B65C7BFCEB67A3497"
            }
        ],
        "livePreviewDisabled": false,
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