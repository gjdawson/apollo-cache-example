import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import {typePolicies} from "./type-policies";


export const cache: InMemoryCache = new InMemoryCache({
  typePolicies,
})
