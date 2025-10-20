import { test, expect } from "@playwright/test";
import pageTwoAllUsers from "../api-testing/test-data/reqres_users_page2_response.json";

test.describe("API-Testing", () => {
  test("GET All Users - match saved response", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2", {
      headers: { "x-api-key": "reqres-free-v1" },
    });

    // verify status code
    expect(response.status()).toBe(200);

    // parse response body
    const body = await response.json();

    // compare structure with saved response
    expect(body).toEqual(pageTwoAllUsers);
  });

  test("GET single user - check fields", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2", {
      headers: { "x-api-key": "reqres-free-v1" },
    });

    // verify status code
    expect(response.status()).toBe(200);

    // parse response body
    const body = await response.json();

    // check fields
    expect(body.data.id).toBe(2);
    expect(body.data.email).toBe("janet.weaver@reqres.in");
    expect(body.data.first_name).toBe("Janet");
  });

  test("POST create user", async ({ request }) => {
    const newUser = { name: "vad", job: "QA-Engineer" };
    const response = await request.post("https://reqres.in/api/users", {
      data: newUser,
      headers: { "x-api-key": "reqres-free-v1" },
    });

    // verify status code
    expect(response.status()).toBe(201);

    // parse response body
    const body = await response.json();

    // check fields
    expect(body.name).toBe("vad");
    expect(body.job).toBe("QA-Engineer");
  });

  test("PUT update user", async ({ request }) => {
    const updatedUser = { name: "vad", job: "QA-Engineer" };
    const response = await request.put("https://reqres.in/api/users/2", {
      data: updatedUser,
      headers: { "x-api-key": "reqres-free-v1" },
    });

    // verify status code
    expect(response.status()).toBe(200);

    // parse response body
    const body = await response.json();

    // check fields
    expect(body.name).toBe("vad");
    expect(body.job).toBe("QA-Engineer");
  });

  test("DELETE single user", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/2", {
      headers: { "x-api-key": "reqres-free-v1" },
    });

    // verify status code
    expect(response.status()).toBe(204);
  });
});
