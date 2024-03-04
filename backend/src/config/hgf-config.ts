import dotenv from "dotenv";
import request, { Options, Headers } from "request";

dotenv.config();

const url: string = process.env.MODEL_URL!;
const headers: Headers = {
  Accept: "application/json",
  Authorization: "Bearer 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",
  "Content-Type": "application/json"
};
const payload = {
  inputs: "",
  parameters: {
    return_full_text: false,
    use_cache: true // False if want the model to create new response when the input is the same
    // "max_new_tokens": 25
  }
};

const query = async (input: string): Promise<string> => {
  payload.inputs = `Human: ${input} Bot:`;
  const data = JSON.stringify(payload);
  const options: Options = {
    method: "POST",
    url,
    headers,
    body: data
  };

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        const responseData = JSON.parse(body);
        const text = responseData[0].generated_text;
        const res = text.split("Human:")[0].trim();
        resolve(res);
      }
    });
  });
};

export { query };
