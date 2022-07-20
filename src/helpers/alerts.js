import Swal from "sweetalert2";

export const customAlert = (title, text, icon) => {
  return Swal.fire({
    title,
    text,
    icon,
  });
};
