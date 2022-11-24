import { rest } from "msw";

const baseURL = "https://compass-drf.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "admin",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image:
          "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-simon-robben-614810_yfqke3",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get(`${baseURL}profiles/`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        owner: "admin",
        created_at: "12 Sep 2022",
        updated_at: "12 Sep 2022",
        profile_name: "John Hart",
        profile_content: "I am a property investor",
        profile_image:
          "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-simon-robben-614810_yfqke3",
        is_owner: false,
        following_id: null,
        listing_count: 16,
        followers_count: 0,
        following_count: 1,
        listings: [35, 34, 32, 31, 28, 22, 20, 17, 16, 15, 14, 10, 9, 7, 6, 5],
        saved_count: 0,
        saved: [],
        messages_count: 9,
        messages: [28, 26, 23, 21, 18, 17, 16, 14, 13],
      })
    );
  }),
];
