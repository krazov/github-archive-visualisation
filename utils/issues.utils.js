export const isPR = ({ pull_request } = {}) => pull_request != undefined;
export const isNotPR = (issue) => !isPR(issue);

export const isOpened = ({ state }) => state == 'open';
export const isClosed = ({ state }) => state == 'closed';

export const findIssueById = (issues, id) => issues.find(({ number }) => number == id) || null;
export const findIssuesByAuthor = (issues, author) => issues.filter(({ user: { login } }) => login == author);

export const isOpenedIssue = (issue) => isNotPR(issue) && isOpened(issue);
export const isClosedIssue = (issue) => isNotPR(issue) && isClosed(issue);
export const isOpenedPR = (issue) => isPR(issue) && isOpened(issue);
export const isClosedPR = (issue) => isPR(issue) && isClosed(issue);

export const author = ({
    user: {
        login = 'Anonymous'
    } = {}
} = {}) => login;

export const body = ({ body = ''} = {}) => body;

export const date = (timestamp) => {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDay();

    const leadingZero = (string) => `0${string}`.slice(-2);

    return [year, leadingZero(month), leadingZero(day)].join('-');
};
