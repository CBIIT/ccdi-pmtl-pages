const config = {
  // Used as a base URL in a few places; leave empty for same-origin.
  mtpConfig: import.meta.env.VITE_MTP_CONFIG ?? '',

  profile: {
    helpdeskEmail: import.meta.env.VITE_HELPDESK_EMAIL ?? 'helpdesk@example.org',
  },
};

export default config;
