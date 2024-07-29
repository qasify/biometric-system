// src/components/BiometricRegistration.tsx
import React, { useState } from "react";
import { Button, InputField } from "../../components";
import { useNavigate } from "react-router-dom";
import {
  formatCpf,
  formatPhone,
  validateCpf,
  validateEmail,
  validatePhone,
} from "./helpers";
import { LogInErrors } from "./types";
import constants from "./constants";

const BiometricRegistration: React.FC = () => {
  const navigate = useNavigate();

  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<LogInErrors | null>(null);

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, cpf: null } as LogInErrors));
    setCpf(formatCpf(e.target.value));
  };

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, birthDate: null } as LogInErrors));
    setBirthDate(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, phone: null } as LogInErrors));
    setPhone(formatPhone(e.target.value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, email: null } as LogInErrors));
    setEmail(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // Handle form submission logic here
    console.log({ cpf, birthDate, phone, email });

    const cpfValue = cpf.replace(/\D/g, "");
    // const birthdateValue = formatDateToISO(
    //   document.getElementById("birthdate").value
    // );
    const phoneValue = phone.replace(/\D/g, "");
    const emailValue = email;

    const cpfVaild = validateCpf(cpfValue);
    const phoneValid = validatePhone(phoneValue);
    const emailValid = validateEmail(emailValue);

    if (!cpfVaild || !phoneValid || !emailValid) {
      setErrors({
        cpf: cpfVaild ? null : constants.INVALID_CPF,
        phone: phoneValid ? null : constants.INVALID_PHONE,
        email: emailValid ? null : constants.INVALID_EMAIL,
        birthDate: null,
      });
      return;
    }

    // navigate if authenticated
    navigate("/home");
  };

  // Test Credentials
  // 05684082769
  // 14/02/1983
  // 21 979997000
  // email@email.com.br

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
            error={errors?.cpf}
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          />
          <InputField
            label="Data de Nascimento:"
            type="date"
            placeholder="mm/dd/yyyy"
            value={birthDate}
            onChange={handleBirthDateChange}
            error={errors?.birthDate}
          />
          <InputField
            label="Celular:"
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
            error={errors?.phone}
            pattern="\(\d{2}\) \d{5}-\d{4}"
          />
          <InputField
            label="Email:"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            error={errors?.email}
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
