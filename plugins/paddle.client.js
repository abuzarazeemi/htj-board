export default defineNuxtPlugin((nuxtApp) => {
  const script = document.createElement("script");
  script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
  script.async = true;
  document.body.appendChild(script);

  script.onload = () => {
    window.Paddle.Environment.set("sandbox");
    window.Paddle.Initialize({
      token: nuxtApp.$config.public.paddleClientToken,
    });
  };
});
