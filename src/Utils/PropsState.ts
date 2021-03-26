//* Swiper page *//
export interface SwiperProps {
}
export interface SwiperState {
  swipedAllCards: boolean,
  swipeDirection: string,
  cardIndex: number,
  yesList: string[],
  noList: string[],
  currentFilm: Object
}

//* Sign up page *//
export interface SignUpProps {
  navigation: any;
}
export interface SignUpState {
  email: string;
  password: string;
  isLoading: boolean;
  errorMessage?: string;
  displayName: string;
}

//* Login page *//
export interface LoginProps {
  navigation: any;
}
export interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
  errorMessage?: string
}

//* Error page *//
export interface ErrorProps {
  navigation: any;
}
export interface ErrorState {
}

//* Error page *//
export interface DashboardProps {
  cards: any;
  navigation?: any;
}
export interface DashboardState {
  uid: string,
  errorMessage?: string;
}