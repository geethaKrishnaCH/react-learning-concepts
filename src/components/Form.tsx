import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState } = useForm();
  console.log(formState);
  
  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", {required: true, minLength: 3})}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
export default Form;
