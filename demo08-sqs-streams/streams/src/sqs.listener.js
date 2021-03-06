class Handler {
  async main(event) {
    console.log("***event", JSON.stringify(event, null, 2));
    try {
      return {
        statusCode: 200,
        body: "Hello",
      };
    } catch (error) {
      console.log("***error", error.stack);
      return {
        statusCode: 500,
        body: "Internal Error",
      };
    }
  }
}

const handler = new Handler();
module.exports = handler.main.bind(handler);
