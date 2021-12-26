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
    // const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const url = `https://opensheet.vercel.app/1b8yX7nWWkK4Pjui2i8Y9jcX4zzCmL3O9AWKs1dvObtg/main`;
    const res = await fetch(url);
    const data = await res.json();
    
    const loadedOwners = data.map((item, index) => {
        return {
            firstName: item.firstName,
            lastName: item.lastName,
            teamName: item.teamName,
            id: index + 1
        };
    });
    owners.set(loadedOwners);
};

fetchOwners();




