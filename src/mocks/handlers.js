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

  rest.get(`${baseURL}/listings/`, (req, res, ctx) => {
    return res(
      ctx.json(
        {
          id: 16,
          owner: "admin",
          created_at: "2 months ago",
          updated_at: "2 months ago",
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
          created_at: "2 months ago",
          updated_at: "2 months ago",
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
        {
          id: 14,
          owner: "admin",
          created_at: "2 months ago",
          updated_at: "2 months ago",
          title: "house in countryside",
          is_owner: false,
          description: "house with bedrooms",
          type_of_property: "detached_house",
          bedrooms: "5",
          area: "Wsetborn",
          price: "150000",
          commerce_type: "sell",
          saved_id: null,
          image_one:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-alex-andrews-833192_-_Copy_ygpgbc",
          image_two:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_lerfyk",
          image_three:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_pw2oop",
          image_four:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_oibcxe",
          image_five:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-bianca-1560065_-_Copy_p1qm0r",
          image_six:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_k1ptsc",
          image_seven:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_qbo7ph",
          image_eight:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_jhnerv",
          saved_count: 0,
          messages_count: 1,
          profile_image: "../default_profile_ik0b2z.jpg",
          profile_id: 1,
        },
        {
          id: 13,
          owner: "louw",
          created_at: "2 months ago",
          updated_at: "2 months ago",
          title: "house",
          is_owner: false,
          description: "hopuse",
          type_of_property: "apartment",
          bedrooms: "2",
          area: "mand",
          price: "500",
          commerce_type: "rent",
          saved_id: null,
          image_one:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/b10_lfygtq",
          image_two:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/lr2_xjx8lx",
          image_three:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-felipe-hueb-2747901_evvzlu",
          image_four:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-ivan-samkov-4164463_vqqqyp",
          image_five:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lgh-933588_dsqajq",
          image_six:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-marlene-lepp%C3%A4nen-1031593_jwiis5",
          image_seven:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-max-vakhtbovych-6933779_oeepse",
          image_eight:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-280232_pnwjfb",
          saved_count: 0,
          messages_count: 0,
          profile_image: "../default_profile_ik0b2z.jpg",
          profile_id: 2,
        },
        {
          id: 12,
          owner: "louw",
          created_at: "2 months ago",
          updated_at: "2 months ago",
          title: "house",
          is_owner: false,
          description: "house",
          type_of_property: "detached_house",
          bedrooms: "2",
          area: "leeds",
          price: "1500",
          commerce_type: "rent",
          saved_id: null,
          image_one:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_mrhncm",
          image_two:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_qcyi3p",
          image_three:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_frcdze",
          image_four:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_gcgpby",
          image_five:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_rlegfa",
          image_six:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-bianca-1560065_-_Copy_fw8gqc",
          image_seven:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-alex-andrews-833192_-_Copy_p7j7qx",
          image_eight:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-emre-can-acer-2079665_voyxh8",
          saved_count: 0,
          messages_count: 0,
          profile_image: "../default_profile_ik0b2z.jpg",
          profile_id: 2,
        },
        {
          id: 11,
          owner: "louw",
          created_at: "2 months ago",
          updated_at: "1 month, 4 weeks ago",
          title: "house",
          is_owner: false,
          description: "house",
          type_of_property: "bungalows",
          bedrooms: "2",
          area: "leeds",
          price: "2",
          commerce_type: "rent",
          saved_id: null,
          image_one:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_oxq8ks",
          image_two:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_fjnbhw",
          image_three:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_cfwfu9",
          image_four:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_rths1l",
          image_five:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_zairqt",
          image_six:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_g3zexv",
          image_seven:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_yeppyn",
          image_eight:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-alex-andrews-833192_-_Copy_uh2ucv",
          saved_count: 0,
          messages_count: 0,
          profile_image: "../default_profile_ik0b2z.jpg",
          profile_id: 2,
        },
        {
          id: 10,
          owner: "admin",
          created_at: "2 months ago",
          updated_at: "2 months ago",
          title: "house",
          is_owner: false,
          description: "house",
          type_of_property: "detached_house",
          bedrooms: "1",
          area: "wake",
          price: "150",
          commerce_type: "rent",
          saved_id: null,
          image_one:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_vviiav",
          image_two:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_ez1jj3",
          image_three:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_baldom",
          image_four:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-460695_pulqvp",
          image_five:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_txpm5o",
          image_six:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_f4zgk9",
          image_seven:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-matthis-2091166_cerqed",
          image_eight:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-lukas-kloeppel-577697_z0lilf",
          saved_count: 0,
          messages_count: 0,
          profile_image: "../default_profile_ik0b2z.jpg",
          profile_id: 1,
        },
        {
          id: 9,
          owner: "admin",
          created_at: "2 months ago",
          updated_at: "2 months ago",
          title: "house",
          is_owner: false,
          description: "house house",
          type_of_property: "detached_house",
          bedrooms: "2",
          area: "naman",
          price: "5",
          commerce_type: "sell",
          saved_id: null,
          image_one:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_aroa6w",
          image_two:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sebastian-palomino-1862402_xaurms",
          image_three:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-emre-can-acer-2189666_xofwf5",
          image_four:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-emre-can-acer-2079665_yaiw5o",
          image_five:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-eberhard-grossgasteiger-1102402_kdkwnn",
          image_six:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-eberhard-grossgasteiger-449461_zb3u0v",
          image_seven:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-bianca-1560065_-_Copy_oncarj",
          image_eight:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-benjamin-suter-3617496_rsbnnk",
          saved_count: 1,
          messages_count: 0,
          profile_image: "../default_profile_ik0b2z.jpg",
          profile_id: 1,
        },
        {
          id: 7,
          owner: "admin",
          created_at: "2 months, 1 week ago",
          updated_at: "2 months, 1 week ago",
          title: "house",
          is_owner: false,
          description: "house",
          type_of_property: "detached_house",
          bedrooms: "5",
          area: "oakes",
          price: "252",
          commerce_type: "sell",
          saved_id: null,
          image_one:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-alex-andrews-833192_-_Copy_frinwi",
          image_two:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/../Placeholder-Clipart-Icon_dhzywt.png",
          image_three:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/../Placeholder-Clipart-Icon_dhzywt.png",
          image_four:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/../Placeholder-Clipart-Icon_dhzywt.png",
          image_five:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/../Placeholder-Clipart-Icon_dhzywt.png",
          image_six:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/../Placeholder-Clipart-Icon_dhzywt.png",
          image_seven:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/../Placeholder-Clipart-Icon_dhzywt.png",
          image_eight:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/../Placeholder-Clipart-Icon_dhzywt.png",
          saved_count: 0,
          messages_count: 0,
          profile_image: "../default_profile_ik0b2z.jpg",
          profile_id: 1,
        },
        {
          id: 6,
          owner: "admin",
          created_at: "2 months, 1 week ago",
          updated_at: "2 months, 1 week ago",
          title: "Apartment",
          is_owner: false,
          description: "apartment",
          type_of_property: "apartment",
          bedrooms: "2",
          area: "Manchester",
          price: "200 000",
          commerce_type: "sell",
          saved_id: null,
          image_one:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-terje-sollie-312029_rydjwo",
          image_two:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-sindre-str%C3%B8m-950058_anr1xw",
          image_three:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-eberhard-grossgasteiger-449461_zcpdzv",
          image_four:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-pixabay-161768_kch70s",
          image_five:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-benjamin-suter-3617496_icbma6",
          image_six:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-bianca-1560065_-_Copy_fvszom",
          image_seven:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-michael-tuszynski-2157404_bbz6qr",
          image_eight:
            "https://res.cloudinary.com/dxwuotiow/image/upload/v1/media/images/pexels-emre-can-acer-2079665_ocq0tl",
          saved_count: 0,
          messages_count: 0,
          profile_image: "../default_profile_ik0b2z.jpg",
          profile_id: 1,
        }
      )
    );
  }),
];
