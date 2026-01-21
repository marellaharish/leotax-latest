interface LengthOptions {
    trim?: boolean;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
}

/**
 * Validates if the given string is a valid email address
 * @param email - The email address to validate
 * @returns boolean - True if the email is valid, false otherwise
 */
export const isEmail = (email: string): boolean => {
    // Basic email validation with support for international domains
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // Additional checks
    if (!email) return false;

    // Check if email is too long (max 254 chars total, 64 for local part)
    const [localPart, domain] = email.split('@');
    if (!localPart || !domain) return false;
    if (localPart.length > 64 || email.length > 254) return false;

    // Check for consecutive dots
    if (email.includes('..')) return false;

    // Check if TLD has at least 2 characters
    const domainParts = domain.split('.');
    if (domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2) {
        return false;
    }

    return emailRegex.test(email);
};

/**
 * Validates if the given string is a valid age (2 digits)
 * @param number - The age string to validate
 * @returns RegExpMatchArray | null - The match result or null if invalid
 */
export const isValidAge = (number: string): RegExpMatchArray | null => {
    return number.match('^[0-9]{2}$');
};

/**
 * Validates if the given string is a valid phone number
 * Supports international numbers with country code and common formats
 * @param phone - The phone number string to validate
 * @returns boolean - True if the phone number is valid, false otherwise
 */
export const isValidPhoneNumber = (phone: string): boolean => {
    if (!phone) return false;

    // Remove all non-digit characters except leading +
    const digits = phone.replace(/[^\d+]/g, '');

    // Check for minimum and maximum length (E.164 standard: max 15 digits including country code)
    if (digits.length < 7 || digits.length > 15) return false;

    // International format (starts with +)
    if (digits.startsWith('+')) {
        // Remove the + for digit count
        const number = digits.substring(1);
        // Check if remaining are all digits and length is valid
        return /^\d{7,14}$/.test(number);
    }

    // Local format (no +, just digits)
    return /^\d{7,15}$/.test(digits);
};

/**
 * Checks if a value is empty
 * @param thing - The value to check
 * @returns boolean - True if the value is empty, false otherwise
 */
export const isEmpty = (thing: unknown): boolean => {
    if (thing === null || thing === undefined) {
        return true;
    }

    if (typeof thing === 'string') {
        return thing.trim().length === 0;
    }

    if (Array.isArray(thing)) {
        return thing.length === 0;
    }

    if (typeof thing === 'object') {
        return Object.keys(thing as object).length === 0;
    }

    return false;
};

/**
 * Validates the length of a string against various conditions
 * @param str - The string or number to validate
 * @param options - Validation options
 * @returns boolean - True if the string length meets all specified conditions
 * @throws Error if options is empty
 */
export const isLength = (str: string | number, options: LengthOptions): boolean => {
    if (isEmpty(options)) {
        throw new Error('Validation options must be provided');
    }

    if (str === null || str === undefined) {
        return false;
    }

    const strValue = typeof str === 'number' ? str.toString() : str;
    let length = options.trim ? strValue.trim().length : strValue.length;

    if (options.lt !== undefined && length >= options.lt) {
        return false;
    }
    if (options.lte !== undefined && length > options.lte) {
        return false;
    }
    if (options.gt !== undefined && length <= options.gt) {
        return false;
    }
    if (options.gte !== undefined && length < options.gte) {
        return false;
    }

    return true;
};

/**
 * Checks if a string contains whitespace
 * @param str - The string to check
 * @returns boolean - True if the string contains whitespace, false otherwise
 */
export const isContainWhiteSpace = (str: string | number | null | undefined): boolean => {
    if (str === null || str === undefined) {
        return false;
    }
    return str.toString().trim().indexOf(' ') !== -1;
};