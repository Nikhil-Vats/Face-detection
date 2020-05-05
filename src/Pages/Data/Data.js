import * as React from "react";
import { graphql } from "@gqless/react";
import { gql } from 'apollo-boost';
import { useMutation, useSubscription } from '@apollo/react-hooks';

const Data = graphql(() => {
    const ADD_PROFILE = gql`
        mutation AddProfile($name: String!) {
        insert_profile( objects: { name: $name } ) {
            affected_rows
        }
        }
    `;
    
    const PROFILE_SUBSCRIPTION = gql`
        subscription MySubscription {
            profile {
                id
                name
            }
        }
    `;

    let input;
    const [addProfile] = useMutation(ADD_PROFILE);
    const { data, loading, error } = useSubscription(PROFILE_SUBSCRIPTION);

    const submitName = (e) => {
        e.preventDefault();
        addProfile({ variables: { name: input.value } });
        input.value = '';
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div style={{padding:"10px"}}>
            <form onSubmit={e => submitName(e)}>
                <input ref={node => {input = node;}} />
                <button type="submit">Add Profile</button>
            </form>
            {data.profile.map(({ id, name }) => (
            <div key={id}>
                <p>{id}: {name}</p>
            </div>))}
        </div>
    )
});

export default Data;