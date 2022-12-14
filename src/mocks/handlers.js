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

  rest.get(`${baseURL}profiles/1`, (req, res, ctx) => {
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

  rest.get(`${baseURL}messages`, (req, res, ctx) => {
    return res(
      ctx.json(
        {
          id: 31,
          owner: "louw",
          listing: 37,
          created_at: "23 Nov 2022",
          title: "Viewing",
          content: "Hi I would like to view the property",
          name: "Louw",
          surname: "Piet",
          phone_number: "098789849900",
          email: "lp@mail.com",
          listing_owner: 29,
        },
        {
          id: 30,
          owner: "Jo",
          listing: 37,
          created_at: "10 Nov 2022",
          title: "Hi",
          content: "Hi",
          name: "Tom",
          surname: "H",
          phone_number: "123456789",
          email: "t@mail.com",
          listing_owner: 29,
        },
        {
          id: 29,
          owner: "Jo",
          listing: 37,
          created_at: "10 Nov 2022",
          title: "Viewing",
          content: "Hi I would like to view",
          name: "Jo",
          surname: "Doe",
          phone_number: "0125456854",
          email: "jd@mail.com",
          listing_owner: 29,
        },
        {
          id: 28,
          owner: "testtutor01",
          listing: 34,
          created_at: "08 Nov 2022",
          title: "test",
          content: "test",
          name: "Test",
          surname: "Tutor",
          phone_number: "1234567",
          email: "test@test.com",
          listing_owner: 1,
        },
        {
          id: 27,
          owner: "admin",
          listing: 29,
          created_at: "07 Nov 2022",
          title: "Hi",
          content: "Hi",
          name: "Admin",
          surname: "Ad",
          phone_number: "0236411254",
          email: "admin@mail.com",
          listing_owner: 2,
        },
        {
          id: 26,
          owner: "louw",
          listing: 32,
          created_at: "01 Nov 2022",
          title: "More Details",
          content: "Hi I would like more details",
          name: "Peter",
          surname: "Parker",
          phone_number: "123456789",
          email: "pp@mail.com",
          listing_owner: 1,
        },
        {
          id: 25,
          owner: "Jo",
          listing: 30,
          created_at: "01 Nov 2022",
          title: "House Viewing",
          content: "Hi I would like to view the house",
          name: "Joe",
          surname: "Doe",
          phone_number: "123456789",
          email: "joe@mail.com",
          listing_owner: 2,
        },
        {
          id: 24,
          owner: "admin",
          listing: 33,
          created_at: "01 Nov 2022",
          title: "View",
          content: "Hi",
          name: "joe",
          surname: "doe",
          phone_number: "123654789",
          email: "joe@mail.com",
          listing_owner: 24,
        },
        {
          id: 23,
          owner: "louw",
          listing: 32,
          created_at: "27 Sep 2022",
          title: "Viewing",
          content:
            "Hi I would like to view the property, if you could please give me a call back. Regards. Louw",
          name: "Louw",
          surname: "Doe",
          phone_number: "052365411",
          email: "louw@mail.com",
          listing_owner: 1,
        },
        {
          id: 22,
          owner: "Jo",
          listing: 30,
          created_at: "26 Sep 2022",
          title: "View",
          content: "view",
          name: "jo",
          surname: "jo",
          phone_number: "02561236541",
          email: "jo@mial.com",
          listing_owner: 2,
        },
        {
          id: 21,
          owner: "Jo",
          listing: 32,
          created_at: "26 Sep 2022",
          title: "hi",
          content: "message",
          name: "jo",
          surname: "Doe",
          phone_number: "",
          email: "jo@mail.com",
          listing_owner: 1,
        },
        {
          id: 20,
          owner: "admin",
          listing: 29,
          created_at: "26 Sep 2022",
          title: "house",
          content: "house",
          name: "joe",
          surname: "joe",
          phone_number: "02541231236",
          email: "joe@mail.com",
          listing_owner: 2,
        }
      )
    );
  }),
  rest.get(`${baseURL}listings`, (req, res, ctx) => {
    const query = req.url.searchParams.get("commerce_type=sell");
    return res(
      ctx.json({
        count: 17,
        next: "https://compass-drf.herokuapp.com/listings/?area__icontains=&bedrooms=&commerce_type=sell&page=2&price__icontains=&type_of_property=",
        previous: null,
        results: [
          {
            id: 37,
            owner: "Johannes",
            created_at: "1 month ago",
            updated_at: "1 month ago",
            title: "My Houser",
            is_owner: false,
            description: "House",
            type_of_property: "terrace_house",
            bedrooms: "5",
            area: "Leeds",
            price: "150001",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-benjamin-suter-3617496_txpxzf",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_rvhgnp",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_k4l7hi",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-alex-andrews-833192_-_Copy_sl7q7v",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_u3krja",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_ulpdi4",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_eev6yr",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_om4acy",
            saved_count: 1,
            messages_count: 3,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 30,
          },
          {
            id: 34,
            owner: "admin",
            created_at: "1 month, 1 week ago",
            updated_at: "1 month, 1 week ago",
            title: "House for sale",
            is_owner: false,
            description: "4 beadroom house for sale",
            type_of_property: "terrace_house",
            bedrooms: "4",
            area: "Leeds",
            price: "185000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_ygyzez",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_ydhm3p",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_taxwg1",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_qqrz28",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_zconfb",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_iwvxig",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-benjamin-suter-3617496_dxhon0",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-alex-andrews-833192_-_Copy_kd1d1l",
            saved_count: 1,
            messages_count: 1,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
          {
            id: 33,
            owner: "Jo",
            created_at: "2 months, 2 weeks ago",
            updated_at: "1 month ago",
            title: "House with 4 bedrooms",
            is_owner: false,
            description: "House for sale 4bedrooms 2 bathrooms 2 living spaces",
            type_of_property: "detached_house",
            bedrooms: "4",
            area: "Marsden ,Huddersfield",
            price: "315000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_upmdyx",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_owm9v7",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_gn1ijs",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_smk3ts",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_lkqwk5",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_mlgbtq",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_nuxu9y",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_brumrl",
            saved_count: 2,
            messages_count: 1,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 25,
          },
          {
            id: 32,
            owner: "admin",
            created_at: "2 months, 2 weeks ago",
            updated_at: "1 week, 5 days ago",
            title: "HOUSE",
            is_owner: false,
            description: "HOUSE",
            type_of_property: "detached_house",
            bedrooms: "5",
            area: "LEEDS",
            price: "200000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_msm8yh",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_vwaqom",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_umwvsz",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_sfmmxn",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_khtp62",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_v6pdq9",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_xztrjg",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_kinzex",
            saved_count: 0,
            messages_count: 3,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
          {
            id: 31,
            owner: "admin",
            created_at: "2 months, 2 weeks ago",
            updated_at: "2 months, 2 weeks ago",
            title: "house",
            is_owner: false,
            description: "house",
            type_of_property: "detached_house",
            bedrooms: "5",
            area: "leeds",
            price: "150000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_jcidjq",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_rfv1ea",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_hyl9kb",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_btxcsr",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_yravaz",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-emre-can-acer-2079665_ate4bw",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-karl-solano-2883049_hlnpye",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-benjamin-suter-3617496_x4krl1",
            saved_count: 2,
            messages_count: 0,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
          {
            id: 30,
            owner: "louw",
            created_at: "2 months, 2 weeks ago",
            updated_at: "2 months, 2 weeks ago",
            title: "house",
            is_owner: false,
            description: "house",
            type_of_property: "detached_house",
            bedrooms: "5",
            area: "Leeds",
            price: "550000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-alex-andrews-833192_-_Copy_dlrnoh",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-benjamin-suter-3617496_n1qnia",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-eberhard-grossgasteiger-449461_f8smya",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_abkzjv",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_hjbkkr",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_jtspjk",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_b9ynbg",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_rlmnaa",
            saved_count: 2,
            messages_count: 3,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 2,
          },
          {
            id: 28,
            owner: "admin",
            created_at: "2 months, 2 weeks ago",
            updated_at: "2 months, 2 weeks ago",
            title: "houes",
            is_owner: false,
            description: "house",
            type_of_property: "detached_house",
            bedrooms: "6",
            area: "Manchester",
            price: "550 000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-emre-can-acer-2189666_koeavu",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_p3deml",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_baxqrw",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_qqoufl",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_r2exo2",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_orsnda",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_edzekf",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-bianca-1560065_-_Copy_ufe5l4",
            saved_count: 0,
            messages_count: 1,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
          {
            id: 22,
            owner: "admin",
            created_at: "2 months, 3 weeks ago",
            updated_at: "2 months, 1 week ago",
            title: "house",
            is_owner: false,
            description: "house house",
            type_of_property: "detached_house",
            bedrooms: "2",
            area: "Brighouse",
            price: "150",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_rq7qiy",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_o1sdnr",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_eswstl",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_ligtgq",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_lekdz0",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_tty1zd",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_ox4ejk",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-bianca-1560065_-_Copy_golfwi",
            saved_count: 0,
            messages_count: 2,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
          {
            id: 20,
            owner: "admin",
            created_at: "2 months, 3 weeks ago",
            updated_at: "2 months, 3 weeks ago",
            title: "house",
            is_owner: false,
            description: "houseeeeeee",
            type_of_property: "bungalows",
            bedrooms: "3",
            area: "leeds",
            price: "150",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_ataxzr",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_nnokmo",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_b1q1rp",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_nzk02o",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_td01tj",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_mxnm1o",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_kkjwvq",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_cvboax",
            saved_count: 1,
            messages_count: 0,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
          {
            id: 17,
            owner: "admin",
            created_at: "2 months, 3 weeks ago",
            updated_at: "2 months, 2 weeks ago",
            title: "terrance house with 4 bedrooms",
            is_owner: false,
            description: "terrace",
            type_of_property: "terrace_house",
            bedrooms: "4",
            area: "Huds",
            price: "250000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_oyiq3f",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_avxhum",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_w8ytvu",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_y8v40i",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_iy384k",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_egseex",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_md7kmf",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_ztnjdu",
            saved_count: 0,
            messages_count: 1,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
          {
            id: 16,
            owner: "admin",
            created_at: "2 months, 3 weeks ago",
            updated_at: "2 months, 3 weeks ago",
            title: "apartment",
            is_owner: false,
            description: "apartment",
            type_of_property: "apartment",
            bedrooms: "2",
            area: "dews",
            price: "150000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/b10_wyu3mh",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/lr2_tsayea",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-felipe-hueb-2747901_fqpmlf",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-ivan-samkov-4164463_mqpzsy",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lgh-933588_aaspym",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-marlene-lepp%C3%A4nen-1031593_wz61ir",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-max-vakhtbovych-6933779_gfba6h",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-280232_sou5ik",
            saved_count: 0,
            messages_count: 0,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
          {
            id: 15,
            owner: "admin",
            created_at: "2 months, 3 weeks ago",
            updated_at: "2 months, 3 weeks ago",
            title: "apartment with 2 bedrooms",
            is_owner: false,
            description: "apartment apapapa asdfa",
            type_of_property: "apartment",
            bedrooms: "2",
            area: "leeds",
            price: "250000",
            commerce_type: "sell",
            saved_id: null,
            image_one:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-alex-andrews-833192_-_Copy_fxuhmh",
            image_two:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/lr2_p1obdh",
            image_three:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-felipe-hueb-2747901_qklaok",
            image_four:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-ivan-samkov-4164463_fs5es1",
            image_five:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lgh-933588_g1iyvz",
            image_six:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-marlene-lepp%C3%A4nen-1031593_mfmqm0",
            image_seven:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-max-vakhtbovych-6933779_ewwfuj",
            image_eight:
              "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-280232_mn0tw4",
            saved_count: 0,
            messages_count: 0,
            profile_image: "../default_profile_ik0b2z.jpg",
            profile_id: 1,
          },
        ],
      })
    );
  }),
];
