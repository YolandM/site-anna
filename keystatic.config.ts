import { config, fields, singleton } from "@keystatic/core";

/* One editable page of copy, reused for each language. */
function pageCopy(label: string, path: string) {
  return singleton({
    label,
    path,
    format: { data: "yaml" },
    schema: {
      hero: fields.object(
        {
          eyebrow: fields.text({ label: "Small line above the headline" }),
          headline: fields.text({ label: "Headline", multiline: true }),
          subhead: fields.text({ label: "Intro paragraph", multiline: true }),
          ctaPrimary: fields.text({ label: "Main button" }),
          ctaSecondary: fields.text({ label: "Second button" }),
          showCtaSecondary: fields.checkbox({
            label: "Show the second button",
            defaultValue: true,
          }),
        },
        { label: "Top of the page", description: "The first thing visitors read." }
      ),

      showProof: fields.checkbox({
        label: "Show the client logos",
        description: "Uncheck to hide the whole logo strip on this language.",
        defaultValue: true,
      }),

      proofPrefix: fields.text({
        label: "Line above the client logos",
        description: "The logos themselves are managed in the code.",
      }),

      problem: fields.object(
        {
          show: fields.checkbox({ label: "Show this section", defaultValue: true }),
          title: fields.text({ label: "Title", multiline: true }),
          body: fields.text({ label: "Text", multiline: true }),
        },
        { label: "The pitch" }
      ),

      services: fields.object(
        {
          show: fields.checkbox({ label: "Show this section", defaultValue: true }),
          title: fields.text({ label: "Section title" }),
          items: fields.array(
            fields.object({
              title: fields.text({ label: "Name" }),
              body: fields.text({ label: "Description", multiline: true }),
            }),
            {
              label: "Services",
              itemLabel: (props) => props.fields.title.value || "Service",
            }
          ),
          outro: fields.text({ label: "Line below the services", multiline: true }),
          link: fields.text({ label: "Link text" }),
        },
        { label: "Services" }
      ),

      contact: fields.object(
        {
          title: fields.text({ label: "Title", multiline: true }),
          body: fields.text({ label: "Text", multiline: true }),
          cta: fields.text({ label: "Booking button" }),
          linkedin: fields.text({ label: "Label above the LinkedIn link" }),
        },
        { label: "Contact" }
      ),

      form: fields.object(
        {
          nameLabel: fields.text({ label: "Name field" }),
          emailLabel: fields.text({ label: "Email field" }),
          messageLabel: fields.text({ label: "Message field" }),
          submit: fields.text({ label: "Send button" }),
          sending: fields.text({ label: "While sending" }),
          success: fields.text({ label: "After sending" }),
          error: fields.text({ label: "If it fails" }),
        },
        { label: "Contact form", description: "Wording of the form at the bottom of the page." }
      ),

      nav: fields.object(
        {
          services: fields.text({ label: "Menu: services" }),
          contact: fields.text({ label: "Menu: contact" }),
          cta: fields.text({ label: "Menu button" }),
        },
        { label: "Menu" }
      ),

      footerTagline: fields.text({ label: "Footer line", multiline: true }),

      seoTitle: fields.text({
        label: "Browser tab and Google title",
        description: "Around 60 characters works best.",
      }),
      seoDescription: fields.text({
        label: "Google description",
        multiline: true,
        description: "Around 155 characters works best.",
      }),
    },
  });
}

export default config({
  storage: {
    kind: "github",
    repo: { owner: "YolandM", name: "site-anna" },
  },
  ui: {
    brand: { name: "Anna-Mariam Österlind" },
    navigation: {
      Website: ["en", "fr", "sv"],
      Details: ["settings"],
    },
  },
  singletons: {
    en: pageCopy("English", "content/en"),
    fr: pageCopy("Français", "content/fr"),
    sv: pageCopy("Svenska", "content/sv"),

    settings: singleton({
      label: "Contact details",
      path: "content/settings",
      format: { data: "yaml" },
      schema: {
        name: fields.text({ label: "Your name", description: "Shown in the header and footer." }),
        email: fields.text({ label: "Email address" }),
        linkedin: fields.url({ label: "LinkedIn profile URL" }),
        calUrl: fields.text({
          label: "Cal.com booking link",
          description:
            "For example https://cal.com/your-name/30min. Leave empty to show an email button instead of a calendar.",
        }),
      },
    }),
  },
});
