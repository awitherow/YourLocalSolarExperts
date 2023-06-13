"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { DEFAULT_FORM_SUBMISSION, FORM_INPUTS } from "constants/consult";
import * as yup from "yup";

import "react-toastify/dist/ReactToastify.css";
import { headingStyle, subHeadingStyle } from "styles";

export interface FormState {
  email: string;
  name: string;
  phone: string;
  comments: string;
  interests: string[];
  referral: string;
}

export interface FormInput {
  id: keyof FormState;
  label: string;
  type: string;
  helperText?: string;
  options?: string[];
}

const ConsultationPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(DEFAULT_FORM_SUBMISSION);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (e.target.checked) {
      setFormState({
        ...formState,
        interests: [...formState.interests, value],
      });
    } else {
      setFormState({
        ...formState,
        interests: formState.interests.filter((interest) => interest !== value),
      });
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.string().required(),
      interests: yup.array().of(yup.string()).required(),
      referral: yup.string().required(),
      comments: yup.string().required(),
    });

    try {
      await schema.validate(formState);
      const response = await fetch("/api/consult", { body: JSON.stringify(formState), method: "POST" });

      if (response.status === 200) {
        setFormState(DEFAULT_FORM_SUBMISSION);
        toast.success("Form submission successful!");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className={headingStyle}>Will Solar Work for Me?</h1>
        <h2 className={subHeadingStyle}>
          Please fill out some basic information about your home and we will get back to you with a free consultation!
        </h2>
      </div>
      <form className="shadow-md rounded p-4 md:p-6 lg:p-8 bg-slate-500 bg-opacity-20 text-white" onSubmit={onSubmit}>
        {FORM_INPUTS.map((input) => {
          switch (input.type) {
            case "text":
            case "email":
            case "tel":
              return (
                <div className="mb-4" key={input.id}>
                  <label className="block text-xl font-bold mb-1" htmlFor={String(input.id)}>
                    {input.label}
                  </label>
                  <input
                    className="text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id={String(input.id)}
                    type={input.type}
                    value={formState[input.id]}
                    onChange={handleChange}
                    placeholder={input.label}
                  />
                  <p className="text-gray-100 text-xs italic mt-1">{input.helperText}</p>
                </div>
              );
            // case "checkbox":
            //   return (
            //     <fieldset key={String(input.id)} className="mb-4">
            //       <legend className="block text-xl font-bold mb-2">{input.label}</legend>
            //       {input.options?.map((option) => (
            //         <div key={option} className="mb-2">
            //           <label className="inline-flex items-center">
            //             <input
            //               type="checkbox"
            //               value={option}
            //               checked={formState.interests.includes(option)}
            //               onChange={handleCheckboxChange}
            //               className="form-checkbox text-indigo-600"
            //             />
            //             <span className="ml-2">{option}</span>
            //           </label>
            //         </div>
            //       ))}
            //       <p className="text-gray-100 text-xs italic">{input.helperText}</p>
            //     </fieldset>
            //   );
            case "textarea":
              return (
                <div className="mb-4" key={String(input.id)}>
                  <label className="block text-xl font-bold mb-2" htmlFor={String(input.id)}>
                    {input.label}
                  </label>
                  <textarea
                    className="text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id={String(input.id)}
                    value={formState[input.id]}
                    onChange={handleChange}
                    placeholder={input.label}
                  />
                  <p className="text-gray-100 text-xs italic">{input.helperText}</p>
                </div>
              );
            default:
              return null;
          }
        })}
        <div className="flex items-center justify-between">
          <button
            className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default ConsultationPage;
