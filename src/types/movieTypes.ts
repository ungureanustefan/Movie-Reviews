import { TypeID } from "./commonTypes";

export type TypeMovie = {
  id: TypeID;
  cost: number;
  filmCompanyId: TypeID;
  releaseYear: number;
  reviews: number[];
  title: string;
};

export type TypeMovies = TypeMovie[];

export type TypeMovieCompany = {
  id: TypeID;
  name: string;
};

export type TypeMovieCompanies = TypeMovieCompany[];

export type TypeReview = string;

export type TypeMovieColumn = {
  id: "title" | "review" | "filmCompany";
  label: string;
  minWidth?: number;
};

export type TypeSelectedMovie = {
  title: string;
  review: string;
  filmCompany: string;
  id: TypeID;
};
