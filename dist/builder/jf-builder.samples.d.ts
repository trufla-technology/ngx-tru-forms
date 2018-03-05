export declare class JfBuilderSamples {
    json: {
        add_vehicle: {
            title: string;
            description: string;
            type: string;
            properties: {
                year: {
                    type: string;
                    pattern: string;
                };
                make: {
                    type: string;
                };
                model: {
                    type: string;
                };
                vin_number: {
                    type: string;
                };
                description: {
                    type: string;
                };
                effective_date: {
                    type: string;
                    format: string;
                };
            };
            required: string[];
        };
        add_driver: {
            title: string;
            description: string;
            type: string;
            properties: {
                first_name: {
                    type: string;
                };
                last_name: {
                    type: string;
                };
                driver_license_no: {
                    type: string;
                };
                insurance_duration: {
                    type: string;
                    enum: number[];
                };
                number_of_conviction: {
                    type: string;
                    enum: number[];
                };
                number_of_accidents: {
                    type: string;
                    enum: number[];
                };
                effective_date: {
                    type: string;
                    format: string;
                };
            };
            required: string[];
        };
        personal_info_email_change: {
            title: string;
            description: string;
            type: string;
            properties: {
                email: {
                    title: string;
                    type: string;
                };
                effective_date: {
                    type: string;
                    format: string;
                };
            };
            required: string[];
        };
        payment_missed_payment: {
            title: string;
            description: string;
            type: string;
            properties: {
                missed_payment: {
                    title: string;
                    type: string;
                    format: string;
                };
            };
            required: string[];
        };
        payment_change_billing_date: {
            title: string;
            description: string;
            type: string;
            properties: {
                day_of_the_month: {
                    type: string;
                    pattern: string;
                };
                effective_date: {
                    type: string;
                    format: string;
                };
            };
            required: string[];
        };
        complex: {
            title: string;
            description: string;
            'type': string;
            'properties': {
                'photo': {
                    'type': string;
                    'format': string;
                };
                'accident_photos': {
                    'type': string;
                    'items': {
                        'type': string;
                        'properties': {
                            'photo': {
                                'type': string;
                                'format': string;
                            };
                        };
                    };
                };
                'billing_address': {
                    'type': string;
                };
                'full_name': {
                    'type': string;
                    'default': string;
                };
                'dob': {
                    'type': string;
                    'format': string;
                };
                'email': {
                    'type': string;
                    'format': string;
                };
                'address': {
                    'type': string;
                    'properties': {
                        'street_1': {
                            'type': string;
                        };
                        'street_2': {
                            'type': string;
                        };
                        'city': {
                            'type': string;
                        };
                        'state': {
                            'type': string;
                            'enum': string[];
                        };
                        'zip_code': {
                            'type': string;
                        };
                    };
                };
                'birthday': {
                    'type': string;
                };
                'notes': {
                    'type': string;
                };
                'phone_numbers': {
                    'type': string;
                    'items': {
                        'type': string;
                        'properties': {
                            'type': {
                                'type': string;
                                'enum': string[];
                                'enumNames': string[];
                            };
                            'number': {
                                'type': string;
                            };
                        };
                        'required': string[];
                    };
                };
            };
            'required': string[];
        };
        custom_control: {
            title: string;
            description: string;
            type: string;
            properties: {
                favorite_colour: {
                    type: string;
                    format: string;
                };
            };
            required: string[];
        };
    };
}
