import {clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';


// Takes any number of arguments (strings, arrays, conditionals) and intelligently joins them into a single class string.

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));

}