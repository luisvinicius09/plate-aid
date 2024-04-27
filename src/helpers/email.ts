import { type Theme } from "next-auth";

export function myHtml(params: { url: string; theme: Theme; token: string }) {
  const { url, theme, token } = params;

  // const escapedHost = host.replace(/\./g, "&#8203;.")

  const brandColor = theme.brandColor ?? "#346df1";
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme.buttonText ?? "#fff",
  };

  return `
<body style="background: ${color.background};">
  <div>
    <div style="text-align: center">
      <p style="font-weight: bold; font-size: 1.5em">Veiculo Pago</p>

      <div style="">
        <div>
          <p style="font-size: 2rem">Acesse sua conta</p>
        </div>

        <div style="">
          <p style="font-weight: normal; align-items: center; gap: 12px">
            Token:
            <span style="font-weight: bold; font-size: 1.2rem"> ${token} </span>
          </p>
        </div>

        <div>
          <p>Se você não requisitou esse email, pode ignora-lo tranquilamente</p>
        </div>
      </div>
    </div>
  </div>

</body>
`;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
export function myText({ url }: { url: string }) {
  return `Sign in to VeiculoPago\n${url}\n\n`;
}

// <table width="100%" border="0" cellspacing="20" cellpadding="0"
// style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
// <tr>
//   <td align="center"
//     style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
//     Accesse sua conta
//   </td>
// </tr>
// <tr>
//   <td align="center" style="padding: 20px 0;">
//     <table border="0" cellspacing="0" cellpadding="0">
//       <tr>
//         <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><p>Token: ${token}</p></td>
//       </tr>

//     </table>
//   </td>
// </tr>
// <tr>
//   <td align="center"
//     style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
//     If you did not request this email you can safely ignore it.
//   </td>
// </tr>
// </table>