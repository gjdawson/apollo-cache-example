import {TypePolicies} from "@apollo/client";

export const typePolicies: TypePolicies = {
  Query: {
    // fields: {
    //   windows: {
    //
    //   }
    // }
  },
  Window: {
    fields: {
      localText: {
        read(val = "") {
          return val
        },
      },
      position: {
        read(val = {x: 10, y: 10}, {variables}) {
          console.log("READ POSITION", val, variables)
          return val
        }
      }
    }
  },
  // WindowPosition: {
  //   fields: {
  //     x: (val = 10) => val,
  //     y: (val = 10) => val,
  //     z: (val = 10) => val,
  //   }
  // }
}
