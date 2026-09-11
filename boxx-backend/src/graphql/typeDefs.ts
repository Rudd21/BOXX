import { inputTypes } from "./typeDefs/inputs.js";
import { mutations } from "./typeDefs/mutations.js";
import { queries } from "./typeDefs/queries.js";
import { types } from "./typeDefs/types.js";

export const typeDefs = [
    types,
    queries,
    mutations,
    inputTypes,
]