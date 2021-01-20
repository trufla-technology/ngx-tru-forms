import {Injectable} from '@angular/core';

@Injectable()
export class JsonSchemaExamplesSamples {
  public json = {
    simple_input: {
      title: 'Simple',
      description: 'Simple form with input fields',
      type: 'object',
      properties: {
        first_name: {
          type: 'string',
        },
        last_name: {
          type: 'string'
        },
        email: {
          type: 'string',
          verify: 'true',
          format: 'email'
        },
        phone_number: {
          type: 'string'
        },
        year: {
          type: 'number',
          pattern: '[1-2][0-9]{3}'
        },
        effective_date: {
          type: 'string',
          format: 'date'
        },
        do_not_contact: {
          type: 'boolean'
        }
      },
      required: ['year', 'effective_date']
    },
    localization: {
      title: [
        {language: 'en', value: 'login form'},
        {language: 'fr', value: 'Formulaire de connexion'}
      ],
      description: [
        {language: 'en', value: 'login form'},
        {language: 'fr', value: 'Formulaire de connexion'}
      ],
      type: 'object',
      'properties': {
        'first_name': {
          type: 'string',
          format: 'email',
          title: [
            {language: 'en', value: 'first_name'},
            {language: 'fr', value: 'leprénom'}
          ]
        },
        'last_name': {
          type: 'string',
          title: [
            {language: 'en', value: 'last_name'},
            {language: 'fr', value: 'lenom de famille'}
          ]
        }
      },
      required: ['first_name', 'last_name']

    },
    auto_complete: {
      title: 'Auto complete example',
      description: 'complete are common to forms',
      type: 'object',
      properties: {
      auto_complete: {
        type: 'string',
        format: 'autocomplete',
        enum: [
          '1',
          '2',
          '3'
        ],
        enumNames:[
          [
            {
              "language": "en",
              "value": "Hot Dog"
            },
            {
              "language": "fr",
              "value": "Dešrainis"
            }
          ],
          [
            {
              "language": "en",
              "value": "Pizza"
            },
            {
              "language": "fr",
              "value": "pica"
            }
          ],
          [
            {
              "language": "en",
              "value": "Mexican chicken"
            },
            {
              "language": "fr",
              "value": "Mexican chicken"
            }
          ]
        ]
        
      }
     }
    },
    photo_example: {
      title: 'Photo example',
      description: 'Photos are common to forms',
      type: 'object',
      properties: {
        test_photo: {
          type: 'string',
          format: 'photo',
          maxSize: '2'
        }
      },
      required: ['test_photo']
    },
    photo_url: {
      title: 'Photo Url',
      type: 'object',
      properties: {
        photo_base64: {
          type: 'string',
          format: 'photo',
          maxSize: '5'
        },
        photo_url: {
          type: 'string',
          format: 'photo',
          maxSize: '4'
        }
      },
      required: ['photo_base64']
    },
    cancel_test: {
      title: 'Cancel',
      description: 'Simple form with cancel and submit buttons. Cancel also contains form data.',
      type: 'object',
      properties: {
        first_name: {
          type: 'string'
        },
        last_name: {
          type: 'string'
        }
      },
      required: ['year', 'make', 'model', 'vin_number', 'description', 'effective_date']
    },
    array_sample: {
      title: 'Array',
      description: 'Array of fields',
      type: 'object',
      properties: {
        employee: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              first_name: {
                type: 'string'
              },
              last_name: {
                type: 'string'
              }
            },
            required: ['first_name', 'last_name']
          },
          required: ['year', 'make', 'model', 'vin_number', 'description', 'effective_date']
        }
      }
    },
    multi_select: {
      title: 'Multiple Select',
      description: 'Form allowing for single and multiple item selections',
      type: 'object',
      properties: {
        multi_check_box: {
          type: 'array',
          enum: ['one', 'two', 'three'],
          format: 'multiselect'
        },
        gender: {
          type: 'string',
          enum: ['male', 'female'],
          enumNames: ['Male', 'Female'],
          format: 'radiogroup'
        },
        insurance_duration: {
          type: 'number',
          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        number_of_conviction: {
          type: 'number',
          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        number_of_accidents: {
          type: 'number',
          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
      },
      required: ['first_name', 'last_name', 'driver_license_no', 'insurance_duration', 'number_of_conviction', 'number_of_accidents',
        'effective_date']
    },
    nested: {
      title: 'Nested',
      description: 'Form with nested data types',
      type: 'object',
      properties: {
        employee_information: {
          title: 'Employee Information',
          type: 'object',
          properties: {
            first_name: {
              type: 'string'
            },
            last_name: {
              type: 'string'
            },
            phone_number: {
              type: 'string'
            },
            email: {
              type: 'string'
            }
          }
        }
      }
    },
    multi_nested: {
      title: 'Multi Nested',
      description: 'Nesting can go as far as needed to achieve structure',
      type: 'object',
      properties: {
        employee_information: {
          type: 'object',
          title: 'Employee Information',
          description: 'Test',
          properties: {
            personal: {
              type: 'object',
              title: 'Personal Information',
              properties: {
                first_name: {
                  type: 'string'
                },
                last_name: {
                  type: 'string'
                }
              }
            },
            location: {
              type: 'object',
              title: 'Location',
              properties: {
                phone_number: {
                  type: 'string'
                },
                email: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    },
    required: {
      title: 'Required',
      description: 'Require first and last name',
      type: 'object',
      properties: {
        first_name: {
          type: 'string',
        },
        last_name: {
          type: 'string',
        }
      },
      required: ['first_name', 'last_name']
    },
    multistep: {
      title: 'Multi Step',
      description: 'Form composed of nested schemas and displayed as steps',
      type: 'object',
      properties: {
        employee_information: {
          type: 'object',
          properties: {
            first_name: {
              type: 'string'
            },
            last_name: {
              type: 'string'
            },
            phone_number: {
              type: 'string'
            },
            email: {
              type: 'string'
            }
          },
          required: ['first_name', 'last_name']
        },
        bank_information: {
          type: 'object',
          properties: {
            bank_name: {
              type: 'string'
            },
            account_number: {
              type: 'string'
            }
          },
          required: ['bank_name', 'account_number']
        }
      }
    },
    multistep_back: {
      title: 'Multi Step With Back',
      description: 'Form composed of nested schemas and displayed as steps that can go back',
      type: 'object',
      properties: {
        employee_information: {
          type: 'object',
          properties: {
            first_name: {
              type: 'string'
            },
            last_name: {
              type: 'string'
            }
          },
          required: ['first_name', 'last_name']
        },
        contact_information: {
          type: 'object',
          properties: {
            phone: {
              type: 'string'
            },
            email: {
              type: 'string'
            }
          },
          required: ['phone', 'email']
        }
      }
    },
    multistep_back_with_state: {
      title: 'Multi Step With Back With State',
      description: 'Form composed of nested schemas and displayed as steps that can go back with state preserved',
      type: 'object',
      properties: {
        employee_information: {
          type: 'object',
          properties: {
            first_name: {
              type: 'string'
            },
            last_name: {
              type: 'string'
            }
          },
          required: ['first_name', 'last_name']
        },
        contact_information: {
          type: 'object',
          properties: {
            phone: {
              type: 'string'
            },
            email: {
              type: 'string'
            }
          },
          required: ['phone', 'email']
        }
      }
    },
    conditional_multistep: {
      title: 'Conditional Multi Step',
      description: 'Add conditional multistep control',
      type: 'object',
      properties: {
        meal: {
          type: 'object',
          properties: {
            food_like: {
              type: 'string',
              enum: [
                'Hot Dog',
                'Pizza',
                'Hamburger'
              ]
            },
            drink: {
              type: 'string',
              enum: [
                'Pepsi',
                'Coke',
                'Sprite'
              ]
            }
          },
          oneOf: [
            {
              properties: {
                food_like: {
                  enum: [
                    'Hamburger'
                  ]
                }
              },
              required: [
                'drink'
              ]
            },
            {
              properties: {
                'food_like': {
                  enum: [
                    'Pizza'
                  ]
                }
              }
            },
            {
              properties: {
                'food_like': {
                  enum: [
                    'Hot Dog'
                  ]
                }
              }
            },
          ]
        }
      }
    },
    checkbox_group: {
      title: 'Checkbox Group',
      type: 'object',
      properties: {
        skills: {
          title: 'Select skills with some experience',
          type: 'array',
          enum: ['js', 'sql', 'api'],
          enumNames: ['NodeJS/ES6', 'MySQL/Postgres', 'REST/SOAP']
        }
      }
    },
    pattern_validation: {
      title: 'Pattern Validation',
      description: 'Form with pattern validation',
      type: 'object',
      properties: {
        day_of_the_month: {
          type: 'number',
          pattern: '[1-3]?[0-9]'
        },
        effective_date: {
          type: 'string',
          format: 'date'
        }
      },
      required: ['day_of_the_month', 'effective_date']
    },
    complex: {
      title: 'Complex form',
      description: 'Complex form with variable inputs',
      type: 'object',
      'properties': {
        'photo': {type: 'string', 'format': 'photo'},
        'accident_photos': {
          type: 'array',
          'items': {
            type: 'object',
            'properties': {
              'photo': {type: 'string', 'format': 'photo', maximum: '1'}
            }
          }
        },
        'billing_address': {type: 'boolean'},
        'full_name': {type: 'string', 'default': 'now'},
        'dob': {type: 'string', 'format': 'date'},
        'email': {
          type: 'string',
          'format': 'email'
        },
        'address': {
          type: 'object',
          'properties': {
            'street_1': {type: 'string'},
            'street_2': {type: 'string'},
            'city': {type: 'string'},
            'state': {
              type: 'string',
              'enum': ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE',
                'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA',
                'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS',
                'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
                'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD',
                'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
            },
            'zip_code': {type: 'string'}
          }
        },
        'birthday': {type: 'string'},
        'notes': {type: 'string'},
        'phone_numbers': {
          type: 'array',
          'items': {
            type: 'object',
            'properties': {
              type: {type: 'string', 'enum': ['cell', 'home', 'work'], 'enumNames': ['Cell', 'Home', 'Work']},
              'number': {type: 'string'}
            },
            'required': ['type', 'number']
          }
        }
      },
      'required': ['full_name']
    },
    custom_control: {
      title: 'Custom Control',
      description: 'Add custom control',
      type: 'object',
      properties: {
        favorite_colour: {
          type: 'string',
          format: 'colour'
        }
      },
      required: ['favorite_colour']
    },
    conditional_control: {
      title: 'Conditional Control',
      description: 'Add conditional control',
      type: 'object',
      properties: {
        food_like: {
          type: 'string',
          enum: ['Hot Dog', 'Pizza', 'Hamburger']
        },
        pizza_type: {
          type: 'string',
          enum: ['Marinara', 'Margherita', 'Vegetarian']
        },
        hamburger_meat: {
          type: 'string',
          enum: ['Chicken', 'Beef', 'Lamb', 'Vegetarian']
        }
      },
      required: ['food_like'],
      oneOf: [
        {
          properties: {
            food_like: {
              enum: ['Pizza']
            }
          },
          required: ['pizza_type']
        },
        {
          properties: {
            food_like: {
              enum: ['Hamburger']
            }
          },
          required: ['hamburger_meat']
        },
        {
          properties: {
            food_like: {
              enum: ['Hot Dog']
            }
          }
        }
      ]
    },
    multiple_conditional_control: {
      title: 'Multiple Conditional Control',
      description: 'Add multiple conditional controls',
      type: 'object',
      properties: {
        food_like: {
          type: 'string',
          enum: ['Hot Dog', 'Pizza', 'Hamburger']
        },
        pizza_type: {
          type: 'string',
          enum: ['Marinara', 'Margherita', 'Vegetarian']
        },
        hamburger_meat: {
          type: 'string',
          enum: ['Chicken', 'Beef', 'Lamb', 'Vegetarian']
        },
        vegetable_choice: {
          type: 'string',
          enum: ['yes', 'no'],
          enumNames: ['Yes', 'No'],
          format: 'radiogroup'
        },
        vegetables: {
          type: 'string',
          enum: ['Mushrooms', 'Tomatoes', 'Lettuce'],
        }
      },
      required: ['food_like', 'vegetable_choice'],
      oneOf: [
        {
          properties: {
            food_like: {
              enum: ['Pizza'],
              required: ['pizza_type']
            }
          }
        },
        {
          properties: {
            food_like: {
              enum: ['Hamburger'],
              required: ['hamburger_meat']
            }
          }
        },
        {
          properties: {
            vegetable_choice: {
              enum: ['yes'],
              required: ['vegetables']
            }
          }
        }
      ]
    },
    definitions: {
      definitions: {
        person: {
          type: 'object',
          properties: {
            first_name: {
              type: 'string'
            }
          }
        }
      },
      title: 'Definitions',
      description: 'Use definitions',
      type: 'object',
      properties: {
        employee: {
          $ref: '#/definitions/person'
        }
      }
    },
    multiple_forms: {
      title: 'Multiple Forms',
      description: 'Multiple forms on a single page',
      type: 'object',
      properties: {
        favorite_number: {
          type: 'string',
          enum: ['one', 'two', 'three'],
          format: 'radiogroup'
        }
      },
      required: ['favorite_number']
    },
    onchange: {
      title: 'On Change',
      description: 'Watch for on change in forms and fields',
      type: 'object',
      properties: {
        first_name: {
          type: 'string'
        },
        last_name: {
          type: 'string'
        }
      }
    },
    viewOnly: {
      title: 'View Only',
      description: 'Display inputs value in view mode',
      type: 'object',
      properties: {
        first_name: {
          type: 'string'
        },
        last_name: {
          type: 'string'
        }
      }
    },
  };
  public data = {
      first_name: 'John',
      last_name: 'dave',
      photo_base64: "data:image/png;base64,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",
      photo_url: 'https://www.trufla.com/wp-content/uploads/2020/10/truLeads-car-insurance-workflow-ec.png'
  };
}
