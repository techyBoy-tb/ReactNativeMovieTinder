import { CardModel } from "../Models/Card.model";

//* Navigation *//
export interface NavProps {
  navigation?: any;
}

//* Swiper page *//
export interface SwiperProps {}
export interface SwiperState {
  swipedAllCards: boolean;
  swipeDirection: string;
  cardIndex: number;
  yesList: string[];
  noList: string[];
  currentFilm: CardModel;
}

//* Sign up page *//
export interface SignUpProps extends NavProps {}
export interface SignUpState {
  email: string;
  password: string;
  isLoading: boolean;
  errorMessage?: string;
  displayName: string;
}

//* Login page *//
export interface LoginProps extends NavProps {}
export interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
  errorMessage?: string;
}

//* Error page *//
export interface ErrorProps extends NavProps {}
export interface ErrorState {}

//* Dashboard page *//
export interface DashboardProps extends NavProps {
  cards: CardModel;
}
export interface DashboardState {
  uid: string;
  errorMessage?: string;
}

//* TabView pages *//
export interface TabViewProps extends NavProps {}
export interface TabViewState {
  index: number;
}

//* MovieList page *//
export interface MovieListProps extends NavProps {}
export interface MovieListState {
  selectedId: string;
}

//* Swipeable Item *//
export interface SwipeableItemProps extends NavProps {}
export interface SwipeableItemState {}
