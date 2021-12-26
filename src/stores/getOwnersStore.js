// import { writable } from "svelte/store";

// export const owners = writable([]);

// const fetchOwners = async () => {
//     const url = `https://sheet.best/api/sheets/7c3d9151-e0d7-49a1-9ac4-65269e6ae07d`;
//     const res = await fetch(url);
//     const data = await res.json();

//     const loadedOwners = data.map((data, index) => {
//         return {
//             teamName: data.teamName,
//             firstName: data.firstName,
//             lastName: data.lastName,
//             id: index + 1
//         };
//     });
//     owners.set(loadedOwners);
// };

// fetchOwners();

import { writable } from "svelte/store";

export const owners = writable([]);

const fetchOwners = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();

    const loadedOwners = data.results.map((data, index) => {
        return {
            teamName: data.name,
            id: index + 1
        };
    });
    owners.set(loadedOwners);
};

// fetchOwners();




