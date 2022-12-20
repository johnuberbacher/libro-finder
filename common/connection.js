import { APISettings } from "@/common/api";

export default {
  async index() {
    const response = await fetch(
      APISettings.baseURL + "/subjects/adventure.json?details=true",
      {
        method: "GET",
        headers: APISettings.headers,
      }
    );
    if (response.status != 200) {
      throw response.status;
    } else {
      return response.json();
    }
  },
  async getWorksByGenre(genre) {
    console.log(genre);
    const response = await fetch(
      APISettings.baseURL + "/subjects/" + genre + ".json?details=true&limit=20",
      {
        method: "GET",
        headers: APISettings.headers,
      }
    );
    if (response.status != 200) {
      throw response.status;
    } else {
      return response.json();
    }
  },
  store(data) {
    APISettings.headers.set("Content-Type", "multipart/form-data");
    APISettings.headers.set("Authorization", "Bearer " + APISettings.token);

    return fetch(
      APISettings.baseURL + "/subjects/adventure.json?details=true",
      {
        method: "POST",
        headers: APISettings.headers,
        body: data,
      }
    ).then(function (response) {
      if (response.status != 201) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
};
