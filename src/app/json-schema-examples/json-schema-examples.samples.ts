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
          type: 'string'
        },
        last_name: {
          type: 'string'
        },
        email: {
          type: 'string'
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
        }
      },
      required: ['year', 'make', 'model', 'vin_number', 'description', 'effective_date']
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
        foods: {
          type: 'object',
          properties: {
            food_like: {
              type: 'string',
              enum: [
                'Hot Dog',
                'Pizza',
                'Hamburger'
              ]
            }
          }
        },
        drinks: {
          type: 'object',
          properties: {
            drink: {
              type: 'string',
              enum: [
                'Pepsi',
                'Coke',
                'Sprite'
              ]
            }
          }
        }
      },
      oneOf: [
        {
          properties: {
            'foods.food_like': {
              enum: [
                'Hamburger'
              ],
              required: [
                'drinks'
              ]
            }
          }
        }
      ]
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
      'type': 'object',
      'properties': {
        'photo': {'type': 'string', 'format': 'photo'},
        'accident_photos': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'photo': {'type': 'string', 'format': 'photo'}
            }
          }
        },
        'billing_address': {'type': 'boolean'},
        'full_name': {'type': 'string', 'default': 'now'},
        'dob': {'type': 'string', 'format': 'date'},
        'email': {
          'type': 'string',
          'format': 'email'
        },
        'address': {
          'type': 'object',
          'properties': {
            'street_1': {'type': 'string'},
            'street_2': {'type': 'string'},
            'city': {'type': 'string'},
            'state': {
              'type': 'string',
              'enum': ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE',
                'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA',
                'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS',
                'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
                'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD',
                'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
            },
            'zip_code': {'type': 'string'}
          }
        },
        'birthday': {'type': 'string'},
        'notes': {'type': 'string'},
        'phone_numbers': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'type': {'type': 'string', 'enum': ['cell', 'home', 'work'], 'enumNames': ['Cell', 'Home', 'Work']},
              'number': {'type': 'string'}
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
}
