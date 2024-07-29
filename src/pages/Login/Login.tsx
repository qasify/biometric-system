// src/components/BiometricRegistration.tsx
import React, { useState } from "react";
import { Button, InputField } from "../../components";
import { useNavigate } from "react-router-dom";

const BiometricRegistration: React.FC = () => {
  const navigate = useNavigate();

  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCpf(e.target.value);
  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBirthDate(e.target.value);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // Handle form submission logic here
    console.log({ cpf, birthDate, phone, email });

    // navigate if authenticated
    navigate("/home");
  };

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center bg-background-light">
      <div className="max-w-xl mx-auto mt-10 p-8 rounded-lg shadow-lg bg-white">
        <img
          src="/assets/images/logo_angra.png"
          alt="Logo"
          className="mx-auto mb-4"
        />
        <h1 className="text-center text-2xl font-bold mb-4">
          CADASTRO BIOMÉTRICO
        </h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="CPF:"
            type="text"
            placeholder="Enter CPF"
            value={cpf}
            onChange={handleCpfChange}
          />
          <InputField
            label="Data de Nascimento:"
            type="date"
            placeholder="mm/dd/yyyy"
            value={birthDate}
            onChange={handleBirthDateChange}
          />
          <InputField
            label="Celular:"
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <InputField
            label="Email:"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="flex justify-center mt-6">
            <Button onClick={handleSubmit}>Enviar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BiometricRegistration;
