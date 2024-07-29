const formatCpf = (cpf: string): string => {
  let value = cpf?.replace(/\D/g, "");
  if (value.length > 11) {
    value = value.slice(0, 11);
  }
  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return value;
};

const formatPhone = (phone: string): string => {
  let value = phone.replace(/\D/g, "");
  if (value.length > 11) {
    value = value.slice(0, 11);
  }
  if (value.length <= 11) {
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
  }
  return value;
};

export { formatCpf, formatPhone };
