import React, { useState } from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Textarea,
} from "@mantine/core";
const MailForm = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.1759328524": "",
    "entry.60803183": "",
    "entry.220097671": "",
    "entry.857691959": "",
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSejEzAdpCGzmTYSq2LQTZbCpq8A4GcVUDpo0iAq9_7Ex2JMbA/formResponse?entry.1759328524=${formData["entry.1759328524"]}&entry.60803183=${formData["entry.60803183"]}&entry.220097671=${formData["entry.220097671"]}&entry.857691959=${formData["entry.857691959"]}`;

    const res = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }
  return (
    <div className=" m-auto mt-20 w-96 pr-2 pt-2">
      {submit ? (
        <div className=" border-2 border-indigo-500/75 rounded-lg p-8 m-auto mt-40 w-96">
          Thank you! , we will get back to you soon...
        </div>
      ) : (
        <form onSubmit={handleSubmit} target="_self">
          {
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6  gap-6">
                  <div className="col-span-6 ">
                    <label
                      htmlFor="entry.1759328524"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="entry.1759328524"
                      onChange={handleInputData("entry.1759328524")}
                      value={formData["entry.1759328524"]}
                      autoComplete={"false"}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm   sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="entry.60803183"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="entry.60803183"
                      onChange={handleInputData("entry.60803183")}
                      value={formData["entry.60803183"]}
                      autoComplete={"false"}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="entry.220097671"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="entry.220097671"
                      onChange={handleInputData("entry.220097671")}
                      value={formData["entry.220097671"]}
                      autoComplete={"false"}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="entry.857691959"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      name="entry.857691959"
                      rows="4"
                      cols="10"
                      onChange={handleInputData("entry.857691959")}
                      value={formData["entry.857691959"]}
                      autoComplete={"false"}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm"
                    ></Textarea>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          }
        </form>
      )}
    </div>
  );
};

export default MailForm;
