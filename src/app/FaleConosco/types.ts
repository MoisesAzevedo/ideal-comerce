export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponse = {
  success: boolean;
  message?: string;
};
