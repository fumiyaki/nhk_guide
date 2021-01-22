export type Guide = {
  id: string;
  event_id: string;
  start_time: string;
  end_time: string;
  area: {
    id: string;
    name: string;
  };
  service: {
    id: string;
    name: string;
    logo_s: {
      url: string;
      width: string;
      height: string;
    };
    logo_m: {
      url: string;
      width: string;
      height: string;
    };
    logo_l: {
      url: string;
      width: string;
      height: string;
    };
  };
  title: string;
  subtitle: string;
  content: string;
  act: string;
  genres: string[];
};

export type GuideDetail =
  | Guide
  | {
      program_logo: {
        url: string;
        width: string;
        height: string;
      };
      program_url: string;
      hashtags: string[];
    };
