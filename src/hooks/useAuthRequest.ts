import { API, URL } from '../services/api/index';

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UseRequestAuthResponse {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (data: SignUpRequest) => Promise<void>;
}

export function useRequestAuth(): UseRequestAuthResponse {
  async function signIn(email: string, password: string): Promise<void> {
    try {
      const response = await API.post(URL.SIGN_IN, { email, password });

      const { status } = response;

      if (status === 200) {
        /**
         * set success logic
         */
      }
    } catch (err) {
      const message =
        err?.response?.data !== undefined
          ? err.response.data.error
          : 'Unexpected error, please try again';

      console.error(message);
      /**
       * call some messaging service to show in application
       */
    }
  }

  async function signUp(data: SignUpRequest): Promise<void> {
    try {
      const response = await API.post(URL.SIGN_UP, data);

      if (response.status === 200) {
        /**
         * set success logic
         */
      }
    } catch (err) {
      const message =
        err?.response?.data !== undefined
          ? err.response.data.error
          : 'Unexpected error, please try again';

      console.error(message);

      /**
       * call some messaging service to show in application
       */
    }
  }

  return { signIn, signUp };
}
