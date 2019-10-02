const require = (type) => ({
    type,
    required: true,
});

const defaultTo = (type) => (byDefault) => ({
    type,
    default: byDefault,
});

export const requireBoolean = () => require(Boolean);
export const requireFunction = () => require(Function);
export const requireString = () => require(String);
export const requireNumber = () => require(Number);
export const requireNumberOrString = () => require([Number, String]);
export const requireObject = () => require(Object);
export const requireArray = () => require(Array);

const booleanWithDefault = defaultTo(Boolean);
export const booleanTrue = () => booleanWithDefault(true);
export const booleanFalse = () => booleanWithDefault(false);

export const defaultString = (value) => defaultTo(String)(value);
export const emptyString = () => defaultString('');

export const defaultArray = (value) => defaultTo(Array)(value);
export const emptyArray = () => defaultArray([]);

export const defaultObject = (value) => defaultTo(Object)(value);
export const emptyObject = () => defaultObject(() => ({}));

export const defaultNumber = (value) => defaultTo(Number)(value);
export const defaultStringOrBoolean = (value) => defaultTo([String, Boolean])(value);

export const defaultFunction = (fn) => defaultTo(Function)(fn);
export const voidFunction = () => defaultFunction(() => void 0);
