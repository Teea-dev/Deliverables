// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { persist, createJSONStorage } from "zustand/middleware";
// type UserStore = {
//   hasFinishedOnboarding: boolean;
//   setHasFinishedOnboarding: () => void;
// };

// export const useUserStore = create(
//   persist<UserStore>(
//     (set) => ({
//       hasFinishedOnboarding: false,
//       setHasFinishedOnboarding: () =>
//         set((state) => {
//           {
//             return {
//               ...state,
//               hasFinishedOnboarding: !state.hasFinishedOnboarding,
//             };
//           }
//         }),
//     }),
//     {
//       name: "Deliverables-user-storage",
//       storage: createJSONStorage<UserStore>(() => AsyncStorage),
//     }
//   )
// );
import { create } from "zustand";

type UserState = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  hasFinishedOnboarding: false,
  toggleHasOnboarded: () => {
    set((state) => {
      return {
        ...state,
        hasFinishedOnboarding: !state.hasFinishedOnboarding,
      };
    });
  },
}));
