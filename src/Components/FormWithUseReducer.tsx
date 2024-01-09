/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useReducer } from "react";

type TAction = {
    type: string;
    payload: string
}

type TInitialState = {
    name: string;
    age: number;
    hobbies: string[];
}
const initialState:TInitialState = {
    name: '',
    age: 0,
    hobbies: []
}

const reducer = (currentState: { hobbies: string[]; }, action: TAction) => {

    switch (action.type) {

        case 'addName':
            return { ...currentState, name: action.payload }
        case 'addAge':
            return { ...currentState, age: action.payload }
        case 'addHobbies':
            return { ...currentState, hobbies: [...currentState.hobbies, action.payload] }
        default:
            return currentState
    }
}

const FormWithUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({ state });
    }
    return (
        <div className=" border-sky-500 bg-gray-500 p-10 my-5 ">
            <form
                onSubmit={handleSubmit}>
                <input
                    onChange={(e) => dispatch({ type: 'addName', payload: e.target.value })}
                    className="border-sky-500 mt-5"
                    type="text"
                    name="name"
                    placeholder="Name"
                /><br />
                <input
                    onChange={(e) => dispatch({ type: 'addAge', payload: e.target.value })}
                    className="mt-5"
                    type="number"
                    name="age"
                    placeholder="Age"
                /><br />
                <input
                    onBlur={(e) => dispatch({ type: 'addHobbies', payload: e.target.value })}
                    className="mt-5"
                    type="text"
                    name="hobbies"
                    placeholder="Hobbies"
                />
                <input className="flex flex-auto" type="submit" name="hobbies" placeholder="Submit" /><br />

            </form>
        </div>
    );
};

export default FormWithUseReducer;