import KeystaticApp from "./keystatic";

export const metadata = { title: "Edit the website", robots: { index: false, follow: false } };

/* Keystatic is a single-page app that handles its own routing, so this layout
   renders it directly instead of its children. It also carries the <html> tag,
   because this project has no shared root layout. */
export default function KeystaticLayout() {
  return (
    <html lang="en">
      <body>
        <KeystaticApp />
      </body>
    </html>
  );
}
