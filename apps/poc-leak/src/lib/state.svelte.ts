import { writable } from "svelte/store";

export interface User {
  email?: string;
  password?: string;
}

export const user = writable<User>({});
export const userState = $state<User>({});
