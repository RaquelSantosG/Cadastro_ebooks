import { useFormik } from "formik";
import * as yup from "yup";
import * as S from "./styles";

function Form() {
  const schema = yup.object({
    nome: yup.string().required("Nome obrigatorio!!!").max(26),
    senha: yup
      .string()
      .required("Senha obrigatoria!!!")
      .length(6, "Tamanho tem que ser de 6 caracteres!!!"),
    telefone: yup.string().length(9, "Formato de telefone inválido"),
    endereco: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      senha: "",
      telefone: "",
      endereco: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("SUBMIT", values);
    },
    onReset: (values) => {
      console.log("RESET", values);
      values.nome = "";
      values.senha = "";
      values.telefone = "";
      values.endereco = "";
    },
  });

  return (
    <S.FormBox onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <S.FormFields>
        <h1>Formulário</h1>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={formik.values.nome}
          onChange={formik.handleChange}
        />
        {formik.errors.nome ? (
          <S.ErrorTip>{formik.errors.nome}</S.ErrorTip>
        ) : (
          <S.TextSuccess>{"Nome tá ok! :)"}</S.TextSuccess>
        )}
        <label>Senha</label>
        <input
          type="password"
          name="senha"
          value={formik.values.senha}
          onChange={formik.handleChange}
        />
        {formik.errors.senha && <S.ErrorTip>{formik.errors.senha}</S.ErrorTip>}
        <label>Telefone</label>
        <input
          type="text"
          name="telefone"
          value={formik.values.telefone}
          onChange={formik.handleChange}
        />
        {formik.errors.telefone && (
          <S.ErrorTip>{formik.errors.telefone}</S.ErrorTip>
        )}
        <label>Endereço</label>
        <input
          type="text"
          name="endereco"
          value={formik.values.endereco}
          onChange={formik.handleChange}
        />
        {formik.errors.endereco && (
          <S.ErrorTip>{formik.errors.endereco}</S.ErrorTip>
        )}

        <br />
        <br />
        <button type="submit">Salvar</button>
        <br />
        <button type="reset">Limpar</button>
      </S.FormFields>
    </S.FormBox>
  );
}

export default Form;

//   FORMULÁRIO SEM UTILIZAÇÃO DE BIBLIOTECAS
//   ========================================
//   const [nome, setNome] = useState("");
//   const [senha, setSenha] = useState("");

//   const [submit, setSubmit] = useState(false);
//   const [error, setError] = useState(false);

//   const handleChange = (event) => {
//     if (event.target.name === "nome") {
//       setNome(event.target.value);
//     }
//     if (event.target.name === "senha") {
//       setSenha(event.target.value);
//     }
//   };

//   const validateForm = () => {
//     return !(senha === "");
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       setSubmit(true);
//     } else {
//       setSubmit(false);
//       setError(true);
//     }
//   };

//   const onReset = (event) => {
//     event.preventDefault();
//     setNome("");
//     setSenha("");
//   };

// return (
//     <S.FormBox onSubmit={(e) => onSubmit(e)} onReset={(e) => onReset(e)}>
//       <S.FormFields>
//         <h1>Formulário</h1>
//         <label>Nome</label>
//         <input
//           type="text"
//           name="nome"
//           value={nome}
//           onChange={(e) => handleChange(e)}
//         />
//         <label>Senha</label>
//         <input
//           type="password"
//           name="senha"
//           value={senha}
//           onChange={(e) => handleChange(e)}
//         />
//         {error && <S.ErrorTip>Cadê a senha?!!?!</S.ErrorTip>}
//         <label>Telefone</label>
//         <input type="tel" />
//         <label>Valor Aleatório</label>
//         <input type="number" />
//         <br />
//         <br />
//         <button type="submit">Salvar</button>
//         <br />
//         <button type="reset">Limpar</button>
//         {submit && <S.TextSuccess> Deu certo!!! </S.TextSuccess>}
//       </S.FormFields>
//     </S.FormBox>
//   );
