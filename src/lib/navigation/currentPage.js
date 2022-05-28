import { writable } from "svelte/store";

const currentPage = writable("search");

export default currentPage;
