// Components
import { Button } from "../components/Button";
import { Input } from "../components/Input";

// Hook
import { useForm } from "../hooks/useForm";

// Styles
import "./MainPage.css";

export const MainPage = () => {

  const [formValue, setFormValue, reset] = useForm({
      name:"",
      email:"",
      password:""
  });

  const {name, email, password} = formValue;

  const handleSubmit  = (e) => {
    e.preventDefault();
    console.log(formValue);
    reset();
  }

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <Input
          labelTitle="Name"
          id="name"
          name="name"
          value={name}
          type="text"
          required={true}
          placeholder="Enter your name"
          onChange={setFormValue}
        />
        <Input
          labelTitle="Email"
          id="email"
          name="email"
          value={email}
          type="email"
          required={true}
          placeholder="Enter your email"
          onChange={setFormValue}
        />
        <Input
          labelTitle="Password"
          id="password"
          name="password"
          value={password}
          type="password"
          required={true}
          placeholder="Enter you password"
          onChange={setFormValue}
        />
        <Button title="Registrer" type="submit"/>
      </form>
    </div>
  );
};
