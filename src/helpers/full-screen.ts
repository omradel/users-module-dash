import { ref } from "vue";

export const useFullScreen = () => {
  const isFullscreen = ref<boolean>(false);

  const fullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          isFullscreen.value = true;
        })
        .catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
      console.log(document.fullscreenEnabled);
    } else {
      document.exitFullscreen();
      isFullscreen.value = false;
    }
  };

  return {
    fullScreen,
    isFullscreen,
  };
};
