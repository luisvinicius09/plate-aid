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
      <p style="font-weight: bold; font-size: 1.5em">Plate Aid</p>

      <div style="">
        <div>
          <p style="font-size: 2rem">Access your account</p>
        </div>

        <div style="">
          <p style="font-weight: normal; align-items: center; gap: 12px">
            Token:
            <span style="font-weight: bold; font-size: 1.2rem"> ${token} </span>
          </p>
        </div>

        <div>
          <p>If you didn't request this email, you can safely ignore it</p>
        </div>
      </div>
    </div>
  </div>

</body>
`;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
export function myText({ url }: { url: string }) {
  return `Sign in to Plate Aid\n${url}\n\n`;
}
