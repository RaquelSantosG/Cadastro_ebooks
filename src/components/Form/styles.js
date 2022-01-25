import styled from "styled-components";

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const FormFields = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ErrorTip = styled.p`
  color: red;
  font-size: 12px;
`;

export const TextSuccess = styled.p`
  color: green;
  font-size: 32px;
`;
