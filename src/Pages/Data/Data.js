import * as React from "react";
import { graphql } from "@gqless/react";
import { query } from "../../gqless/client";
import { update } from "gqless";

const Data = graphql(() => {
    const submitName = () => {
        let val = document.getElementById('name').value;
        console.log(val);
        update(query.profile[0].name, val);
    }
    return (
        <div>
            <p>ID: {query.profile[0].id}</p>
            <p>Name: {query.profile[0].name}</p>
            <input type="text" id="name" placeholder="Enter Name"></input>
            <button type="button" onClick={submitName}>Submit</button>
        </div>
    )
});

export default Data;