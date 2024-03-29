export const SIDEBAR_ITEM = [
  { index: "0", title: "CREATE", link: "/create" },
  { index: "1", title: "ROLLBACK", link: "/rollback" },
];

export const API = {
  BASE: "http://localhost:3001",
  // BASE: "https://query-maker-mu.vercel.app/",
  INFO: {
    CREATE_QUERY_TABLE: { PATH: "/table/createQuery", TYPE: "post" },
    CREATE_QUERY_SELECT: { PATH: "/select/createQuery", TYPE: "post" },
  },
};
