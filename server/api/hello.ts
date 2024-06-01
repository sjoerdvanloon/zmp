export default defineEventHandler((event) => {
  return {
    hello: "world",
    event: event,
    t: "ddsd",
    mwt: event.context.auth,
  };
});
