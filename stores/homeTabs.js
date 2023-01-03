import { defineStore } from "pinia";
import MethodsAPI from "../common/connection";

export const useHomeTabStore = defineStore("homeTabStore", {
  id: "homeTabStore",
  state: () => ({
    activeTab: "",
    worksResponse: {},
    workDetails: {},
  }),
  actions: {
    async loadWorksByGenre(genre) {
        this.worksResponse = {};
        this.activeTab = genre;
        this.worksResponse = await MethodsAPI.getWorksByGenre(genre);
    },
    async getWorkDetails(workID) {
        this.workDetails = {};
        this.workDetails = await MethodsAPI.getWorkDetails(workID);
    },
  },
});
