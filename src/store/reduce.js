const initialState = {
    lang: "en",
    isLoading: false
};

export function languageReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LANGUAGE":
            return {
                ...state,
                lang: action.payload
            };
        case "SET_LOADER":
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
}
