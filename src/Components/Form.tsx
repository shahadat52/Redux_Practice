import { useState } from "react";
const Form = () => {

    const [user, setUser] = useState({ name: '', age: '0', hobbies: [] })
    console.log(user);
    return (
        <div className=" border-sky-500 bg-gray-500 p-10 my-5 ">
            <form action="">
                <input
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="border-sky-500 mt-5"
                    type="text"
                    name="name"
                    placeholder="Name"
                /><br />
                <input
                    onChange={(e) => setUser({ ...user, age: e.target.value })}
                    className="mt-5"
                    type="number"
                    name="age"
                    placeholder="Age"
                /><br />
                <input onBlur={(e) => setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })}
                    className="mt-5" type="text" name="hobbies" placeholder="Hobbies" />
                <input className="flex flex-auto" type="submit" name="hobbies" placeholder="Submit" /><br />

            </form>
        </div>
    );
};

export default Form;