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
    multiple: {
      title: 'Multiple',
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
        address: {
          type: 'object',
          properties: {
            email: {
              title: 'New Email',
              type: 'string'
            },
            effective_date: {
              type: 'string',
              format: 'date'
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
    payment_change_billing_date: {
      title: 'Payment - Change Billing Date',
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
        'photo': { 'type': 'string', 'format': 'photo' },
        'accident_photos': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'photo': { 'type': 'string', 'format': 'photo' }
            }
          }
        },
        'billing_address': { 'type': 'boolean' },
        'full_name': { 'type': 'string', 'default': 'now' },
        'dob': { 'type': 'string', 'format': 'date' },
        'email': {
          'type': 'string',
          'format': 'email'
        },
        'address': {
          'type': 'object',
          'properties': {
            'street_1': { 'type': 'string' },
            'street_2': { 'type': 'string' },
            'city': { 'type': 'string' },
            'state': {
              'type': 'string',
              'enum': [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE',
                'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA',
                'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS',
                'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
                'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD',
                'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]
            },
            'zip_code': { 'type': 'string' }
          }
        },
        'birthday': { 'type': 'string' },
        'notes': { 'type': 'string' },
        'phone_numbers': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'type': { 'type': 'string', 'enum': [ 'cell', 'home', 'work' ], 'enumNames': [ 'Cell', 'Home', 'Work' ]  },
              'number': { 'type': 'string' }
            },
            'required': [ 'type', 'number' ]
          }
        }
      },
      'required': [ 'full_name' ]
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
    }
  };
}
