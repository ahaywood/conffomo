import type { Prisma, Attachment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AttachmentCreateArgs>({
  attachment: {
    one: {
      data: {
        updatedAt: '2024-09-09T07:31:22.661Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7236400',
            username: 'String8626571',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:31:22.661Z',
          },
        },
        post: {
          create: {
            content: 'String',
            updatedAt: '2024-09-09T07:31:22.661Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7524021',
                username: 'String2168649',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:31:22.661Z',
              },
            },
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:31:22.661Z',
                updatedAt: '2024-09-09T07:31:22.661Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:31:22.661Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String3110515',
                        username: 'String5145983',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:31:22.661Z',
                      },
                    },
                  },
                },
              },
            },
            plan: {
              create: {
                title: 'String',
                updatedAt: '2024-09-09T07:31:22.661Z',
                event: {
                  create: {
                    name: 'String',
                    startDate: '2024-09-09T07:31:22.661Z',
                    updatedAt: '2024-09-09T07:31:22.661Z',
                    organization: {
                      create: {
                        name: 'String',
                        updatedAt: '2024-09-09T07:31:22.661Z',
                        user: {
                          create: {
                            firstName: 'String',
                            lastName: 'String',
                            email: 'String9222547',
                            username: 'String8551670',
                            hashedPassword: 'String',
                            salt: 'String',
                            updatedAt: '2024-09-09T07:31:22.661Z',
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
                    email: 'String9646276',
                    username: 'String4438349',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:31:22.661Z',
                  },
                },
              },
            },
          },
        },
        message: {
          create: {
            message: 'String',
            updatedAt: '2024-09-09T07:31:22.661Z',
            toUser: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String1855338',
                username: 'String3466216',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:31:22.661Z',
              },
            },
            fromUser: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String2209897',
                username: 'String7835010',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:31:22.661Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-09T07:31:22.661Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String3634497',
            username: 'String1247845',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:31:22.661Z',
          },
        },
        post: {
          create: {
            content: 'String',
            updatedAt: '2024-09-09T07:31:22.661Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String6261240',
                username: 'String9886366',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:31:22.661Z',
              },
            },
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:31:22.661Z',
                updatedAt: '2024-09-09T07:31:22.661Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:31:22.661Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String1719856',
                        username: 'String9116592',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:31:22.661Z',
                      },
                    },
                  },
                },
              },
            },
            plan: {
              create: {
                title: 'String',
                updatedAt: '2024-09-09T07:31:22.661Z',
                event: {
                  create: {
                    name: 'String',
                    startDate: '2024-09-09T07:31:22.661Z',
                    updatedAt: '2024-09-09T07:31:22.661Z',
                    organization: {
                      create: {
                        name: 'String',
                        updatedAt: '2024-09-09T07:31:22.661Z',
                        user: {
                          create: {
                            firstName: 'String',
                            lastName: 'String',
                            email: 'String350029',
                            username: 'String2040351',
                            hashedPassword: 'String',
                            salt: 'String',
                            updatedAt: '2024-09-09T07:31:22.661Z',
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
                    email: 'String6436481',
                    username: 'String5027126',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:31:22.661Z',
                  },
                },
              },
            },
          },
        },
        message: {
          create: {
            message: 'String',
            updatedAt: '2024-09-09T07:31:22.661Z',
            toUser: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String6440700',
                username: 'String3139247',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:31:22.661Z',
              },
            },
            fromUser: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String863719',
                username: 'String9476436',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:31:22.661Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Attachment, 'attachment'>
