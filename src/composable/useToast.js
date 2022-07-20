import { useToast } from "primevue/usetoast";

export const ToastService = () => {
  const toast = useToast(); // Get the toast service.

  const showToast = (title, text, type = "info") => {
    toast.add({
      severity: type,
      summary: title,
      detail: text,
      life: 3000,
    });
  };
  const showSuccess = (title, text) => {
    showToast(title, text, "success");
  };
  const showInfo = (title, text) => {
    showToast(title, text, "info");
  };
  const showWarn = (title, text) => {
    showToast(title, text, "warn");
  };
  const showError = (title, text) => {
    showToast(title, text, "error");
  };
  return {
    showSuccess,
    showInfo,
    showWarn,
    showError,
  };
};
