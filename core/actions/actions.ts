export const NUMBER_UP = 'NUMBER_UP';
export const NUMBER_DOWN = 'NUMBER_DOWN';

export const changeRandomMessage = message => {
    return {
        type: 'CHANGE_MESSAGE',
        message,
    };
};
