import counterType from "./type";

const counterAction = {
    increamentAction: (number) => ({
        type: counterType.INCREAMENT,
        payload: number
    }),
    decreamentAction: number => ({
        type: counterType.DECREAMENT,
        payload: number
    })
};

export default counterAction;