import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        comment: 'String',
        updatedAt: '2024-09-09T07:26:54.842Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String3714693',
            username: 'String815104',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:26:54.842Z',
          },
        },
        post: {
          create: {
            content: 'String',
            updatedAt: '2024-09-09T07:26:54.842Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String2350350',
                username: 'String6070926',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:26:54.842Z',
              },
            },
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:26:54.842Z',
                updatedAt: '2024-09-09T07:26:54.842Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:26:54.842Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String3179016',
                        username: 'String2035203',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:54.842Z',
                      },
                    },
                  },
                },
              },
            },
            plan: {
              create: {
                title: 'String',
                updatedAt: '2024-09-09T07:26:54.842Z',
                event: {
                  create: {
                    name: 'String',
                    startDate: '2024-09-09T07:26:54.842Z',
                    updatedAt: '2024-09-09T07:26:54.842Z',
                    organization: {
                      create: {
                        name: 'String',
                        updatedAt: '2024-09-09T07:26:54.842Z',
                        user: {
                          create: {
                            firstName: 'String',
                            lastName: 'String',
                            email: 'String9940257',
                            username: 'String5378039',
                            hashedPassword: 'String',
                            salt: 'String',
                            updatedAt: '2024-09-09T07:26:54.842Z',
                          },
                        },
                      },
                    },
                  },
                },
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String8642525',
                    username: 'String9264569',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:54.842Z',
                  },
                },
              },
            },
          },
        },
        thread: {
          create: {
            updatedAt: '2024-09-09T07:26:54.842Z',
            attachments: {
              create: {
                updatedAt: '2024-09-09T07:26:54.842Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String7009898',
                    username: 'String7257592',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:54.842Z',
                  },
                },
                post: {
                  create: {
                    content: 'String',
                    updatedAt: '2024-09-09T07:26:54.843Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String8885483',
                        username: 'String2838694',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                      },
                    },
                    event: {
                      create: {
                        name: 'String',
                        startDate: '2024-09-09T07:26:54.843Z',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                        organization: {
                          create: {
                            name: 'String',
                            updatedAt: '2024-09-09T07:26:54.843Z',
                            user: {
                              create: {
                                firstName: 'String',
                                lastName: 'String',
                                email: 'String2780032',
                                username: 'String5254905',
                                hashedPassword: 'String',
                                salt: 'String',
                                updatedAt: '2024-09-09T07:26:54.843Z',
                              },
                            },
                          },
                        },
                      },
                    },
                    plan: {
                      create: {
                        title: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                        event: {
                          create: {
                            name: 'String',
                            startDate: '2024-09-09T07:26:54.843Z',
                            updatedAt: '2024-09-09T07:26:54.843Z',
                            organization: {
                              create: {
                                name: 'String',
                                updatedAt: '2024-09-09T07:26:54.843Z',
                                user: {
                                  create: {
                                    firstName: 'String',
                                    lastName: 'String',
                                    email: 'String4813257',
                                    username: 'String2109775',
                                    hashedPassword: 'String',
                                    salt: 'String',
                                    updatedAt: '2024-09-09T07:26:54.843Z',
                                  },
                                },
                              },
                            },
                          },
                        },
                        user: {
                          create: {
                            firstName: 'String',
                            lastName: 'String',
                            email: 'String4231266',
                            username: 'String3741202',
                            hashedPassword: 'String',
                            salt: 'String',
                            updatedAt: '2024-09-09T07:26:54.843Z',
                          },
                        },
                      },
                    },
                  },
                },
                message: {
                  create: {
                    message: 'String',
                    updatedAt: '2024-09-09T07:26:54.843Z',
                    toUser: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String7541842',
                        username: 'String4755631',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                      },
                    },
                    fromUser: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String1506204',
                        username: 'String9422789',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        comment: 'String',
        updatedAt: '2024-09-09T07:26:54.843Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2596064',
            username: 'String4508157',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:26:54.843Z',
          },
        },
        post: {
          create: {
            content: 'String',
            updatedAt: '2024-09-09T07:26:54.843Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7705310',
                username: 'String9403728',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:26:54.843Z',
              },
            },
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:26:54.843Z',
                updatedAt: '2024-09-09T07:26:54.843Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:26:54.843Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String5861950',
                        username: 'String9298444',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                      },
                    },
                  },
                },
              },
            },
            plan: {
              create: {
                title: 'String',
                updatedAt: '2024-09-09T07:26:54.843Z',
                event: {
                  create: {
                    name: 'String',
                    startDate: '2024-09-09T07:26:54.843Z',
                    updatedAt: '2024-09-09T07:26:54.843Z',
                    organization: {
                      create: {
                        name: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                        user: {
                          create: {
                            firstName: 'String',
                            lastName: 'String',
                            email: 'String2250807',
                            username: 'String9457281',
                            hashedPassword: 'String',
                            salt: 'String',
                            updatedAt: '2024-09-09T07:26:54.843Z',
                          },
                        },
                      },
                    },
                  },
                },
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String2145140',
                    username: 'String8396990',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:54.843Z',
                  },
                },
              },
            },
          },
        },
        thread: {
          create: {
            updatedAt: '2024-09-09T07:26:54.843Z',
            attachments: {
              create: {
                updatedAt: '2024-09-09T07:26:54.843Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String4452385',
                    username: 'String7197839',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:54.843Z',
                  },
                },
                post: {
                  create: {
                    content: 'String',
                    updatedAt: '2024-09-09T07:26:54.843Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String9540194',
                        username: 'String1268421',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                      },
                    },
                    event: {
                      create: {
                        name: 'String',
                        startDate: '2024-09-09T07:26:54.843Z',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                        organization: {
                          create: {
                            name: 'String',
                            updatedAt: '2024-09-09T07:26:54.843Z',
                            user: {
                              create: {
                                firstName: 'String',
                                lastName: 'String',
                                email: 'String484960',
                                username: 'String1097941',
                                hashedPassword: 'String',
                                salt: 'String',
                                updatedAt: '2024-09-09T07:26:54.843Z',
                              },
                            },
                          },
                        },
                      },
                    },
                    plan: {
                      create: {
                        title: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                        event: {
                          create: {
                            name: 'String',
                            startDate: '2024-09-09T07:26:54.843Z',
                            updatedAt: '2024-09-09T07:26:54.843Z',
                            organization: {
                              create: {
                                name: 'String',
                                updatedAt: '2024-09-09T07:26:54.843Z',
                                user: {
                                  create: {
                                    firstName: 'String',
                                    lastName: 'String',
                                    email: 'String9774350',
                                    username: 'String3982193',
                                    hashedPassword: 'String',
                                    salt: 'String',
                                    updatedAt: '2024-09-09T07:26:54.843Z',
                                  },
                                },
                              },
                            },
                          },
                        },
                        user: {
                          create: {
                            firstName: 'String',
                            lastName: 'String',
                            email: 'String5559875',
                            username: 'String2887929',
                            hashedPassword: 'String',
                            salt: 'String',
                            updatedAt: '2024-09-09T07:26:54.843Z',
                          },
                        },
                      },
                    },
                  },
                },
                message: {
                  create: {
                    message: 'String',
                    updatedAt: '2024-09-09T07:26:54.843Z',
                    toUser: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String4568622',
                        username: 'String9951076',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                      },
                    },
                    fromUser: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String258231',
                        username: 'String6030734',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:54.843Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
