import React from "react";

const Data = [
  {
    id : "1",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hme76sjbumnkzynaek5z",
    item_name: " Pizza time",
    star: "5.4",
    del_time: "25-30",
    rest_name: "Panna Sweet",
    rest_add: "Sec-22 Chandigargh",
    price:"250"
  },
  {
    id : "2",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v8c496jyfrjbr106qgge",
    item_name: " MDG Paranthe Wale",
    star: "3.8",
    del_time: "60-65",
    rest_name: "Fast food",
    rest_add: "Sec-32 Chandigargh",
    price:"100"
  },
  {
    id : "3",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_795223.JPG",
    item_name: " Burger King",
    star: "4.4",
    del_time: "50-60",
    rest_name: "Burger American ",
    rest_add: "Sec-20 Chandigarh",
    price:"150"
  },
  {
    id : "4",
    src: "https://cdn.pulse2.com/cdn/2018/12/Swiggy.jpg",
    item_name: " Paratha Rice",
    star: "4.4",
    del_time: "15-20",
    rest_name: "Kaala Dhaba",
    rest_add: "Manimajra Chandigargh",
    price:"200"
  },
  {
    id : "5",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b5f73274133329.5c238353cf201.jpg",
    item_name: " Veg Thali",
    star: "5.9",
    del_time: "35-40",
    rest_name: "Panna Sweet",
    rest_add: "Manimajra Chandigargh",
    price:"220"
  },
  {
    id : "6",
    src: "https://images.livemint.com/img/2022/12/15/1600x900/swiggy_biryani_1671108299094_1671108299222_1671108299222.jpg",
    item_name: " Biryani",
    star: "3.4",
    del_time: "20-25",
    rest_name: "Shama Dhaba",
    rest_add: "Housing Board Chandigargh",
    price:"400"
  },
  {
    id : "7",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dsfd9zhtoxvrakg6nwal",
    item_name: " La pinzo's Pizza",
    star: "5.5",
    del_time: "15-30",
    rest_name: "Pizza Hut",
    rest_add: "Sec-21 Chandigargh",
    price:"300"
  },
  {
    id : "8",
    src: "https://justbakedcake.com/wp-content/uploads/2021/09/Chicken-Grilled-sandwich-1-768x512.jpg",
    item_name: " Bhukad chief",
    star: "5.9",
    del_time: "25-35",
    rest_name: "Fast food ",
    rest_add: "Sec-19 Chandigargh",
    price:"200"
  },
  {
    id : "9",
    src: "https://couponswala.com/blog/wp-content/uploads/2020/01/Swiggy-Super.jpg",
    item_name: " Dosa",
    star: "5.8",
    del_time: "10-20",
    rest_name: "Kaala Dhaba",
    rest_add: "Manimajra Chandigargh",
    price:"180"
  },
  {
    id : "10",
    src: "https://img.onmanorama.com/content/dam/mm/en/food/foodie/images/2019/5/14/mutton-biryani-biriyani.jpg",
    item_name: " Chicken Biryani",
    star: "8.4",
    del_time: "25-30",
    rest_name: "Ikram Dhaba",
    rest_add: "Sec-28 Chandigargh",
    price:"90"
  },
  {
    id : "11",
    src: "https://images.hindustantimes.com/img/2021/12/22/original/French_fries_swiggy_1640174113397.jpg",
    item_name: " French Fries",
    star: "8.4",
    del_time: "25-29",
    rest_name: "Panna Sweet",
    rest_add: "Sec-15 Chandigargh",
    price:"190"
  },
  {
    id : "12",
    src: "https://i.pinimg.com/originals/00/c9/c8/00c9c8227b052b856d9a0f9a1e1ca901.jpg",
    item_name: " South Thali",
    star: "5.9",
    del_time: "20-35",
    rest_name: "South Indian Dhaba",
    rest_add: "Sec-20 Chandigargh",
    price:"290"
  },
  {
    id : "13",
    src: "https://www.lacademie.com/wp-content/uploads/2022/05/types-of-snack-foods.jpg",
    item_name: " Burger Meal ",
    star: "6.4",
    del_time: "15-20",
    rest_name: "Burger King",
    rest_add: "Sec-28 Chandigargh",
    price:"120"
  },
  {
    id : "14",
    src: "https://globalprimenews.com/wp-content/uploads/2022/08/IMG-20220812-WA0024.jpg",
    item_name: " KFC Special-15",
    star: "5.8",
    del_time: "25-30",
    rest_name: "KFC",
    rest_add: "Sec-23 Chandigargh",
    price:"240"
  },
  {
    id : "15",
    src: "https://cablevey.com/wp-content/uploads/2020/11/What-Are-the-Different-Kinds-of-Snack-Foods.jpg",
    item_name: " Snacks Meal",
    star: "4.4",
    del_time: "25-35",
    rest_name: "Fast Food",
    rest_add: "Sec-17 Chandigargh",
    price:"210"
  },
  {
    id : "16",
    src: "https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/master/w_2560%2Cc_limit/GettyImages-1223580360.jpg",
    item_name: " Special Thali",
    star: "4.4",
    del_time: "25-30",
    rest_name: "Panna Sweet",
    rest_add: "Sec-19 Chandigargh",
    price:"260"
  },
  {
    id : "17",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5e293c94dc18f34784f59c9eec2f70a7",
    item_name: "Veg Noodle",
    star: "5.5",
    del_time: "20-25",
    rest_name: "Food Special",
    rest_add: "Sec-15 Chandigargh",
    price:"80"
  },
  {
    id : "18",
    src: "https://ranveerbrar.com/wp-content/uploads/2021/02/Aloo-Tikki-Burger-scaled.jpg",
    item_name: " Aloo Tikki Burger",
    star: "5.5",
    del_time: "25-30",
    rest_name: "Burger King",
    rest_add: "Sec-12 Chandigargh",
    price:"70"
  },
  {
    id : "19",
    src: "https://tse2.mm.bing.net/th?id=OIP.OS9Nj2cnuCoxfKxI_bLMOAHaE8&pid=Api&P=0&h=180",
    item_name: " Pizza Special",
    star: "5.9",
    del_time: "20-25",
    rest_name: "La Pinzos",
    rest_add: "Sec-15 Chandigargh",
    price:"290"
  },
  {
    id : "20",
    src: "https://i.ytimg.com/vi/OpciOuWpuQs/maxresdefault.jpg",
    item_name: " french fries",
    star: "3.5",
    del_time: "25-30",
    rest_name: "Pizza Hut",
    rest_add: "Sec-10 Chandigargh",
    price:"240"
  },
  {
    id : "21",
    src: "https://tse4.mm.bing.net/th?id=OIP.RJUa5jqt7gxU2Lgih5Hh-wHaEK&pid=Api&P=0&h=180",
    item_name: "Chicken Legs",
    star: "7.8",
    del_time: "25-30",
    rest_name: "KFC",
    rest_add: "Sec-22 Chandigargh",
    price:"990"
  },
  {
    id : "22",
    src: "https://ph.phonebooky.com/webp?u=https:%2F%2Fcdn.phonebooky.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F09%2F05144151%2F59596894_2623999647628798_5566754425705332736_n-1.jpg",
    item_name: " Chicken Meal",
    star: "5.4",
    del_time: "25-35",
    rest_name: "Chicken Special",
    rest_add: "Sec-20 Chandigargh",
    price:"590"
  },
  {
    id : "23",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hme76sjbumnkzynaek5z",
    item_name: " Pizza time",
    star: "5.4",
    del_time: "25-30",
    rest_name: "Panna Sweet",
    rest_add: "Sec-22 Chandigargh",
    price:"299"
  },
  {
    id : "24",
    src: "https://couponswala.com/blog/wp-content/uploads/2020/01/Swiggy-Super.jpg",
    item_name: " Dosa",
    star: "5.8",
    del_time: "10-20",
    rest_name: "Kaala Dhaba",
    rest_add: "Manimajra Chandigargh",
    price:"199"
  },
];
export default Data;
