import type { Prisma, Thread } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThreadCreateArgs>({
  thread: {
    one: {
      data: {
        updatedAt: '2024-09-09T07:26:41.737Z',
        attachments: {
          create: {
            updatedAt: '2024-09-09T07:26:41.737Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7523853',
                username: 'String1328643',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:26:41.737Z',
              },
            },
            post: {
              create: {
                content: 'String',
                updatedAt: '2024-09-09T07:26:41.737Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String4089160',
                    username: 'String2736893',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:41.737Z',
                  },
                },
                event: {
                  create: {
                    name: 'String',
                    startDate: '2024-09-09T07:26:41.737Z',
                    updatedAt: '2024-09-09T07:26:41.737Z',
                    organization: {
                      create: {
                        name: 'String',
                        updatedAt: '2024-09-09T07:26:41.737Z',
                        user: {
                          create: {
                            firstName: 'String',
                            lastName: 'String',
                            email: 'String2283420',
                            username: 'String4510780',
                            hashedPassword: 'String',
                            salt: 'String',
                            updatedAt: '2024-09-09T07:26:41.737Z',
                          },
                        },
                      },
                    },
                  },
                },
                plan: {
                  create: {
                    title: 'String',
                    updatedAt: '2024-09-09T07:26:41.737Z',
                    event: {
                      create: {
                        name: 'String',
                        startDate: '2024-09-09T07:26:41.737Z',
                        updatedAt: '2024-09-09T07:26:41.737Z',
                        organization: {
                          create: {
                            name: 'String',
                            updatedAt: '2024-09-09T07:26:41.737Z',
                            user: {
                              create: {
                                firstName: 'String',
                                lastName: 'String',
                                email: 'String6194320',
                                username: 'String5166095',
                                hashedPassword: 'String',
                                salt: 'String',
                                updatedAt: '2024-09-09T07:26:41.737Z',
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
                        email: 'String8095636',
                        username: 'String9590466',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:41.737Z',
                      },
                    },
                  },
                },
              },
            },
            message: {
              create: {
                message: 'String',
                updatedAt: '2024-09-09T07:26:41.737Z',
                toUser: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String3822316',
                    username: 'String4859979',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:41.737Z',
                  },
                },
                fromUser: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String9690930',
                    username: 'String1043296',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:41.737Z',
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
        updatedAt: '2024-09-09T07:26:41.737Z',
        attachments: {
          create: {
            updatedAt: '2024-09-09T07:26:41.737Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String5867572',
                username: 'String2414455',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:26:41.737Z',
              },
            },
            post: {
              create: {
                content: 'String',
                updatedAt: '2024-09-09T07:26:41.737Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String9761608',
                    username: 'String5508420',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:41.737Z',
                  },
                },
                event: {
                  create: {
                    name: 'String',
                    startDate: '2024-09-09T07:26:41.737Z',
                    updatedAt: '2024-09-09T07:26:41.737Z',
                    organization: {
                      create: {
                        name: 'String',
                        updatedAt: '2024-09-09T07:26:41.737Z',
                        user: {
                          create: {
                            firstName: 'String',
                            lastName: 'String',
                            email: 'String7504398',
                            username: 'String1510922',
                            hashedPassword: 'String',
                            salt: 'String',
                            updatedAt: '2024-09-09T07:26:41.737Z',
                          },
                        },
                      },
                    },
                  },
                },
                plan: {
                  create: {
                    title: 'String',
                    updatedAt: '2024-09-09T07:26:41.737Z',
                    event: {
                      create: {
                        name: 'String',
                        startDate: '2024-09-09T07:26:41.737Z',
                        updatedAt: '2024-09-09T07:26:41.737Z',
                        organization: {
                          create: {
                            name: 'String',
                            updatedAt: '2024-09-09T07:26:41.737Z',
                            user: {
                              create: {
                                firstName: 'String',
                                lastName: 'String',
                                email: 'String9308366',
                                username: 'String5458341',
                                hashedPassword: 'String',
                                salt: 'String',
                                updatedAt: '2024-09-09T07:26:41.737Z',
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
                        email: 'String1551973',
                        username: 'String2636210',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:26:41.737Z',
                      },
                    },
                  },
                },
              },
            },
            message: {
              create: {
                message: 'String',
                updatedAt: '2024-09-09T07:26:41.737Z',
                toUser: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String2868935',
                    username: 'String4332722',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:41.737Z',
                  },
                },
                fromUser: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String4832045',
                    username: 'String8026781',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:26:41.737Z',
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

export type StandardScenario = ScenarioData<Thread, 'thread'>
