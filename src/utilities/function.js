import { FE } from "./API";

export const activeCSS = (param, page) => {
  let active = "";

  if (param === `${FE}/home` && page === "home") active = "active";
  else if (page === "dataMaster") {
    if (
      param === `${FE}/nasabah` ||
      param === `${FE}/barang` ||
      param === `${FE}/bunga`
    )
      active = "active";
  } else if (page === "trans") {
    if (
      param === `${FE}/peminjaman` ||
      param === `${FE}/perpanjangan` ||
      param === `${FE}/pembayaran`
    )
      active = "active";
  } else if (param === `${FE}/ganti-foto` && page === "gantiFoto")
    active = "active";
  else if (param === `${FE}/ganti-pass` && page === "gantiPass")
    active = "active";
  return active;
};
