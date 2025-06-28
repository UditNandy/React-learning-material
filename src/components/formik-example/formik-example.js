import { Formik, Field, Form, FieldArray } from "formik";
import * as Yup from "yup";
import Accordian from "../shared/accordian/accordian";

const FormikExample = () => {
  const initialData = { name: "Udit", age: 25, phone: 7377888110, hobbies: [] };
  const onSubmit = (values, formAction) => {
    console.log(values);
  };

  const validators = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Min length is 2")
      .test("name-filer", "cant be udit", (v) => v !== "Udit"),
  });

  const renderHobbies = (arrayHelpers, hobby) => {
    return (
      <div>
        {hobby?.map((v, index) => (
          <div key={index}>
            <Field placeholder="Hobby" name={`hobbies[${index}]`}></Field>
          </div>
        ))}
        <div>
          <button
            onClick={() => {
              arrayHelpers.push("");
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  };

  const renderForm = ({ values, errors, isSubmitting }) => (
    <div>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text"></Field>
          {errors.name && <div>{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Field name="age" type="number" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="number" />
        </div>
        <div>
          <FieldArray name="hobbies">
            {(fieldHelpers) => renderHobbies(fieldHelpers, values.hobbies)}
          </FieldArray>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );

  return (
    <>
      <Formik
        initialValues={initialData}
        onSubmit={onSubmit}
        validationSchema={validators}
      >
        {renderForm}
      </Formik>
      <Accordian header="Notes">
        <ul>
          <li>
            Always remember to add type='button' in all the buttons inside
            formik or else it will act as submit.
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default FormikExample;
